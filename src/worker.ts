import { InteractionType, InteractionResponseType, APIInteraction } from 'discord-api-types/v10';
import { Verification } from './utils/verification.js';
import { InteractionResponse } from './utils/interaction-response.js';
import { Logger } from './services/Logger.js';
import { RawInteraction } from './core/Command.js';
import { DiscordApi } from './services/DiscordApi.js';

// Lazy load commands to avoid instantiation issues in Workers
async function getCommands() {
  const { ALL_COMMANDS } = await import('./commands/index.js');
  return ALL_COMMANDS;
}

async function getCommandManager() {
  const commands = await getCommands();
  const { CommandManager } = await import('./core/CommandManager.js');
  return new CommandManager(commands);
}

// Cache for bot user info to avoid fetching on every request
let botUserInfo: { username: string; id: string; discriminator?: string } | null = null;

/**
 * Fetch and log bot user information
 */
async function logBotInfo(env: Env, logger: Logger): Promise<void> {
  // Only fetch once
  if (botUserInfo) {
    return;
  }

  try {
    const userInfo = (await DiscordApi.call('/users/@me', 'GET', undefined, env.DISCORD_TOKEN)) as {
      username: string;
      id: string;
      discriminator?: string;
      global_name?: string;
    };

    botUserInfo = {
      username: userInfo.username,
      id: userInfo.id,
      discriminator: userInfo.discriminator,
    };

    const displayName = userInfo.global_name || userInfo.username;
    const tag =
      userInfo.discriminator && userInfo.discriminator !== '0'
        ? `${userInfo.username}#${userInfo.discriminator}`
        : userInfo.username;

    logger.info(`Bot connected as: ${displayName} (${tag}) [ID: ${userInfo.id}]`);
  } catch (error) {
    logger.error('Failed to fetch bot user info:', error);
  }
}

/**
 * Cloudflare Workers environment interface
 */
export interface Env {
  DISCORD_TOKEN: string;
  DISCORD_CLIENT_ID: string;
  DISCORD_PUBLIC_KEY: string;
  DEVELOPER_IDS?: string;
  NODE_ENV?: string;
  // Add KV namespace bindings here if needed
  // SHOP_DATA?: KVNamespace;
}

/**
 * Main Cloudflare Worker handler
 * Handles both HTTP interactions and scheduled cron tasks
 */
export default {
  /**
   * Handle HTTP requests (Discord interactions)
   */
  async fetch(request: Request, env: Env): Promise<Response> {
    const logger = new Logger({ context: 'Worker' });

    // Log every request for debugging (helps confirm logs are working)
    logger.info(`fetch - ${request.method} ${request.url}`);

    // Handle GET requests for health check
    if (request.method === 'GET') {
      // Log bot info on first GET request (when wrangler connects)
      await logBotInfo(env, logger);

      return new Response(
        JSON.stringify({
          status: 'ok',
          message: 'Discord Bot Worker is running',
          applicationId: env.DISCORD_CLIENT_ID,
          botUsername: botUserInfo?.username || 'Unknown',
        }),
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Only allow POST requests for interactions
    if (request.method !== 'POST') {
      logger.warn(`fetch - Invalid method: ${request.method}, expected POST`);
      return new Response('Method not allowed', { status: 405 });
    }

    // Log all headers for debugging
    const allHeaders: Record<string, string> = {};
    request.headers.forEach((value, key) => {
      allHeaders[key] = value;
    });
    logger.info(`fetch - POST request received, headers: ${JSON.stringify(allHeaders)}`);

    try {
      // Get request body
      const body = await request.text();
      logger.info(`fetch - Request body length: ${body.length} bytes`);

      // Discord sends headers in lowercase, but some proxies may uppercase them
      const signature =
        request.headers.get('x-signature-ed25519') || request.headers.get('X-Signature-Ed25519');
      const timestamp =
        request.headers.get('x-signature-timestamp') ||
        request.headers.get('X-Signature-Timestamp');

      logger.info(`fetch - Signature present: ${!!signature}, Timestamp present: ${!!timestamp}`);

      // Verify signature
      if (!signature || !timestamp) {
        logger.warn(
          'fetch - Missing signature headers (X-Signature-Ed25519 or X-Signature-Timestamp)'
        );
        logger.warn(
          `fetch - Headers present: ${JSON.stringify(Object.fromEntries(request.headers.entries()))}`
        );
        return InteractionResponse.error('Missing signature', false);
      }

      const isValid = await Verification.verify(body, signature, timestamp, env.DISCORD_PUBLIC_KEY);

      if (!isValid) {
        logger.error('fetch - Invalid signature verification failed');
        logger.error(
          `fetch - Signature: ${signature.substring(0, 20)}..., Timestamp: ${timestamp}`
        );
        return InteractionResponse.error('Invalid signature', false);
      }

      logger.info('fetch - Signature verified successfully');

      // Parse interaction
      const interaction: APIInteraction = JSON.parse(body);
      logger.info(
        `fetch - Interaction received: type=${interaction.type} (${interaction.type === InteractionType.Ping ? 'PING' : interaction.type === InteractionType.ApplicationCommand ? 'COMMAND' : 'OTHER'}), id=${interaction.id}`
      );

      if (interaction.type === InteractionType.ApplicationCommand) {
        const commandData = interaction.data;
        if ('options' in commandData) {
          logger.info(
            `fetch - Command: ${commandData.name}, options: ${JSON.stringify(commandData.options || [])}`
          );
        } else {
          logger.info(`fetch - Command: ${commandData.name} (no options)`);
        }
      }

      // Handle PING (verification)
      if (interaction.type === InteractionType.Ping) {
        logger.info('fetch - Received PING, responding with PONG');
        return InteractionResponse.pong();
      }

      // Handle application commands
      if (interaction.type === InteractionType.ApplicationCommand) {
        return await handleApplicationCommand(interaction, env, logger);
      }

      // Handle autocomplete
      if (interaction.type === InteractionType.ApplicationCommandAutocomplete) {
        return await handleAutocomplete(interaction, env, logger);
      }

      logger.warn(`fetch - Unhandled interaction type: ${interaction.type}`);
      return InteractionResponse.error('Unhandled interaction type', true);
    } catch (error) {
      logger.error('fetch - Error handling request:', error);
      return InteractionResponse.error('Internal server error', false);
    }
  },

  /**
   * Handle scheduled tasks (cron triggers)
   * This runs at intervals defined in wrangler.toml
   *
   * Example: Post scheduled messages, update data, etc.
   */
  async scheduled(event: ScheduledEvent, env: Env, ctx: ExecutionContext): Promise<void> {
    const logger = new Logger({ context: 'Scheduled' });

    logger.info(`scheduled - Cron triggered: ${event.cron}`);

    // Use ctx.waitUntil() for async operations that can complete after handler returns
    ctx.waitUntil(
      handleScheduledTask(event, env, logger).catch((error) => {
        logger.error('scheduled - Error in scheduled task:', error);
      })
    );
  },
};

/**
 * Handle application command interactions
 * Uses raw API interactions (no Discord.js classes)
 */
async function handleApplicationCommand(
  interaction: APIInteraction,
  env: Env,
  logger: Logger
): Promise<Response> {
  if (interaction.type !== InteractionType.ApplicationCommand) {
    return InteractionResponse.error('Invalid interaction type', true);
  }

  const commandManager = await getCommandManager();
  const commandName = interaction.data.name;
  const command = commandManager.getCommand(commandName);

  if (!command) {
    logger.warn(`handleApplicationCommand - Unknown command: ${commandName}`);
    return InteractionResponse.error(`Unknown command: ${commandName}`, true);
  }

  try {
    // Convert to raw interaction format
    const apiUser = 'user' in interaction ? interaction.user : undefined;
    const apiMember = 'member' in interaction ? interaction.member : undefined;

    const rawInteraction: RawInteraction = {
      id: interaction.id,
      type: interaction.type,
      data: {
        id: interaction.data.id,
        name: interaction.data.name,
        type: interaction.data.type,
        options: 'options' in interaction.data ? interaction.data.options : undefined,
      },
      guild_id: 'guild_id' in interaction ? interaction.guild_id : undefined,
      channel_id: 'channel_id' in interaction ? interaction.channel_id : undefined,
      user: apiUser
        ? {
            id: apiUser.id,
            username: apiUser.username,
            discriminator: apiUser.discriminator,
            global_name: apiUser.global_name ?? undefined,
            bot: apiUser.bot,
            avatar: apiUser.avatar ?? null,
          }
        : undefined,
      member: apiMember
        ? {
            user: apiMember.user
              ? {
                  id: apiMember.user.id,
                  username: apiMember.user.username,
                  discriminator: apiMember.user.discriminator,
                  global_name: apiMember.user.global_name ?? undefined,
                  bot: apiMember.user.bot,
                  avatar: apiMember.user.avatar ?? null,
                }
              : undefined,
            joined_at: 'joined_at' in apiMember ? apiMember.joined_at : undefined,
          }
        : undefined,
      token: interaction.token,
      application_id: interaction.application_id,
    };

    // Validate command
    const validation = await command.validate(rawInteraction);
    if (!validation.valid) {
      logger.warn(
        `handleApplicationCommand - Command validation failed for ${commandName}: ${validation.reason}`
      );
      // Send error response
      return new Response(
        JSON.stringify({
          type: InteractionResponseType.ChannelMessageWithSource,
          data: {
            content: `❌ ${validation.reason}`,
            flags: 64, // Ephemeral
          },
        }),
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Execute command and return its response directly
    logger.info(`handleApplicationCommand - Executing command: ${commandName}`, {
      interactionId: interaction.id,
      guildId: interaction.guild_id,
      userId: rawInteraction.user?.id,
    });

    try {
      const response = await command.execute(
        rawInteraction,
        env as unknown as Record<string, unknown>
      );
      logger.info(`handleApplicationCommand - Command ${commandName} executed successfully`);
      return response;
    } catch (commandError) {
      logger.error(
        `handleApplicationCommand - Command ${commandName} execution failed:`,
        commandError
      );
      throw commandError; // Re-throw to be caught by outer catch
    }
  } catch (error) {
    logger.error(`handleApplicationCommand - Error executing ${commandName}:`, error);
    // Log full error details
    if (error instanceof Error) {
      logger.error(`Error message: ${error.message}`);
      logger.error(`Error stack: ${error.stack}`);
    }
    return InteractionResponse.error('An error occurred while executing this command.', true);
  }
}

/**
 * Handle autocomplete interactions
 */
async function handleAutocomplete(
  interaction: APIInteraction,
  env: Env,
  logger: Logger
): Promise<Response> {
  if (interaction.type !== InteractionType.ApplicationCommandAutocomplete) {
    return InteractionResponse.error('Invalid interaction type', true);
  }

  const commandManager = await getCommandManager();
  const commandName = interaction.data.name;
  const command = commandManager.getCommand(commandName);

  if (!command) {
    return new Response(
      JSON.stringify({
        type: InteractionResponseType.ApplicationCommandAutocompleteResult,
        data: { choices: [] },
      }),
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  // Handle autocomplete if command supports it
  if ('autocomplete' in command && typeof command.autocomplete === 'function') {
    try {
      const apiUser = 'user' in interaction ? interaction.user : undefined;
      const apiMember = 'member' in interaction ? interaction.member : undefined;

      const rawInteraction: RawInteraction = {
        id: interaction.id,
        type: interaction.type,
        data: {
          id: interaction.data.id,
          name: interaction.data.name,
          type: interaction.data.type,
          options: 'options' in interaction.data ? interaction.data.options : undefined,
        },
        guild_id: 'guild_id' in interaction ? interaction.guild_id : undefined,
        channel_id: 'channel_id' in interaction ? interaction.channel_id : undefined,
        user: apiUser
          ? {
              id: apiUser.id,
              username: apiUser.username,
              discriminator: apiUser.discriminator,
              global_name: apiUser.global_name ?? undefined,
              bot: apiUser.bot,
              avatar: apiUser.avatar ?? null,
            }
          : undefined,
        member: apiMember
          ? {
              user: apiMember.user
                ? {
                    id: apiMember.user.id,
                    username: apiMember.user.username,
                    discriminator: apiMember.user.discriminator,
                    global_name: apiMember.user.global_name ?? undefined,
                    bot: apiMember.user.bot,
                    avatar: apiMember.user.avatar ?? null,
                  }
                : undefined,
              joined_at: 'joined_at' in apiMember ? apiMember.joined_at : undefined,
            }
          : undefined,
        token: interaction.token,
        application_id: interaction.application_id,
      };
      const choices = await command.autocomplete(rawInteraction);
      return new Response(
        JSON.stringify({
          type: InteractionResponseType.ApplicationCommandAutocompleteResult,
          data: { choices },
        }),
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
    } catch (error) {
      logger.error('handleAutocomplete - Error:', error);
    }
  }

  return new Response(
    JSON.stringify({
      type: InteractionResponseType.ApplicationCommandAutocompleteResult,
      data: { choices: [] },
    }),
    {
      headers: { 'Content-Type': 'application/json' },
    }
  );
}

/**
 * Handle scheduled tasks
 *
 * This is a template function - implement your scheduled logic here.
 * Examples:
 * - Post messages to Discord channels
 * - Update data from external APIs
 * - Generate and post randomized content
 * - Clean up old data
 *
 * @param event Scheduled event with cron information
 * @param env Environment variables
 * @param logger Logger instance
 */
async function handleScheduledTask(event: ScheduledEvent, env: Env, logger: Logger): Promise<void> {
  logger.info('handleScheduledTask - Scheduled task started');

  // Example: Post a message to Discord channel
  // Uncomment and customize as needed:

  // const channelId = 'YOUR_CHANNEL_ID'; // Add to Env interface if needed
  // const rest = new REST().setToken(env.DISCORD_TOKEN);
  //
  // const message = `⏰ Scheduled message from cron: ${event.cron}`;
  //
  // await rest.post(Routes.channelMessages(channelId), {
  //   body: { content: message }
  // });

  logger.info('handleScheduledTask - Scheduled task completed');
}
