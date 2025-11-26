import {
  APIInteraction,
  APIApplicationCommandInteraction,
  APIChatInputApplicationCommandInteractionData,
  APIApplicationCommandInteractionDataOption,
  APIApplicationCommandInteractionDataStringOption,
  APIApplicationCommandInteractionDataNumberOption,
  APIApplicationCommandInteractionDataIntegerOption,
  APIApplicationCommandInteractionDataBooleanOption,
  APIApplicationCommandInteractionDataUserOption,
  InteractionType,
  RESTPostAPIInteractionCallbackJSONBody,
  RESTPostAPIInteractionFollowupJSONBody,
  RESTPatchAPIWebhookJSONBody,
  Routes,
  APIEmbed,
  APIActionRowComponent,
  APIMessageActionRowComponent,
  APIAllowedMentions,
  APIMessage,
} from 'discord-api-types/v10';
import type {
  ChatInputCommandInteraction,
  Message,
  Guild,
  GuildMember,
  User,
  CommandInteractionOptionResolver,
  CacheType,
  InteractionReplyOptions,
  InteractionEditReplyOptions,
  InteractionDeferReplyOptions,
  WebhookMessageCreateOptions,
} from 'discord.js';
import { REST } from 'discord.js';
import { Logger } from '../services/Logger.js';

const logger = new Logger({ context: 'InteractionAdapter' });

/**
 * Create a REST client for Workers environment
 * We don't use Client in Workers - only REST API
 */
export function createRESTClient(token: string): REST {
  return new REST().setToken(token);
}

/**
 * Simplified interaction adapter that implements essential ChatInputCommandInteraction methods
 * Uses REST API to handle interactions in Cloudflare Workers
 */
export class WorkersInteractionAdapter {
  public readonly client: { rest: REST; user: { id: string; tag: string; bot: boolean } };
  public readonly commandId: string;
  public readonly commandName: string;
  public readonly guildId: string | null;
  public readonly channelId: string | null;
  public readonly user: User;
  public readonly member: GuildMember | null;
  public readonly guild: Guild | null;
  public readonly createdTimestamp: number;
  public readonly id: string;
  public readonly token: string;
  public readonly applicationId: string;
  public readonly version: number;
  public readonly locale: string | null;
  public readonly guildLocale: string | null;
  public readonly options: CommandInteractionOptionResolver<CacheType>;
  public replied: boolean = false;
  public deferred: boolean = false;
  public ephemeral: boolean | null = null;

  private rest: REST;
  private apiInteraction: APIApplicationCommandInteraction;

  constructor(apiInteraction: APIApplicationCommandInteraction, restClient: REST, _token: string) {
    this.apiInteraction = apiInteraction;
    // Create a minimal client-like object for compatibility
    this.client = {
      rest: restClient,
      user: {
        id: '0',
        tag: 'Bot',
        bot: true,
      },
    };
    this.rest = restClient;
    this.id = apiInteraction.id;
    this.token = apiInteraction.token;
    this.applicationId = apiInteraction.application_id;
    this.version = apiInteraction.version;
    this.commandId = apiInteraction.data.id;
    this.commandName = apiInteraction.data.name;
    this.guildId = apiInteraction.guild_id || null;
    this.channelId = apiInteraction.channel_id || null;
    this.locale = apiInteraction.locale || null;
    this.guildLocale = apiInteraction.guild_locale || null;
    this.createdTimestamp = Date.parse(apiInteraction.id) / 1000;

    // Create user object
    // According to Discord API, user is always present in application command interactions
    // If member exists, use member.user, otherwise use the top-level user
    const userData = apiInteraction.member?.user || apiInteraction.user;
    if (!userData) {
      throw new Error('User data is missing from interaction');
    }
    this.user = this.createUser({
      ...userData,
      global_name: userData.global_name ?? undefined,
    });

    // Create member if in guild
    this.member = apiInteraction.member
      ? this.createGuildMember(
          {
            ...apiInteraction.member,
            user: apiInteraction.member.user
              ? {
                  ...apiInteraction.member.user,
                  global_name: apiInteraction.member.user.global_name ?? undefined,
                }
              : undefined,
          },
          this.user
        )
      : null;

    // Create guild (minimal)
    this.guild = this.guildId ? this.createGuild(this.guildId) : null;

    // Create options resolver
    const optionsData = apiInteraction.data as APIChatInputApplicationCommandInteractionData;
    const options = 'options' in optionsData ? optionsData.options || [] : [];
    this.options = this.createOptionsResolver(options);
  }

  private createUser(userData: {
    id: string;
    username: string;
    discriminator?: string;
    global_name?: string;
    bot?: boolean;
    avatar?: string | null;
  }): User {
    return {
      id: userData.id,
      username: userData.username,
      discriminator: userData.discriminator || '0',
      globalName: userData.global_name || userData.username,
      bot: userData.bot || false,
      system: false,
      avatar: userData.avatar,
      banner: undefined,
      accentColor: undefined,
      createdTimestamp: Date.parse(userData.id) / 1000,
      tag: `${userData.username}${userData.discriminator ? `#${userData.discriminator}` : ''}`,
      displayName: userData.global_name || userData.username,
      defaultAvatarURL: () =>
        `https://cdn.discordapp.com/embed/avatars/${parseInt(userData.discriminator || '0') % 5}.png`,
      avatarURL: () =>
        userData.avatar
          ? `https://cdn.discordapp.com/avatars/${userData.id}/${userData.avatar}.png`
          : null,
      bannerURL: () => null,
    } as unknown as User;
  }

  private createGuildMember(
    memberData: {
      user?: { id: string; username: string; discriminator?: string; global_name?: string };
      joined_at?: string;
      nick?: string | null;
    },
    user: User
  ): GuildMember {
    // This method is only called when we're in a guild context, so guild should exist
    if (!this.guild) {
      throw new Error('Cannot create guild member without guild context');
    }
    return {
      user,
      guild: this.guild,
      joinedTimestamp: memberData.joined_at ? Date.parse(memberData.joined_at) : null,
      premiumSinceTimestamp: null,
      roles: new Map(),
      permissions: null,
      voice: null,
      avatar: null,
      displayName: memberData.nick || user.username,
      nickname: memberData.nick || null,
      pending: false,
      communicationDisabledUntil: null,
    } as unknown as GuildMember;
  }

  private createGuild(guildId: string): Guild {
    return {
      id: guildId,
      name: 'Unknown Guild',
      icon: null,
      available: true,
      shard: null,
      memberCount: 0,
      large: false,
    } as unknown as Guild;
  }

  private createOptionsResolver(
    options: APIApplicationCommandInteractionDataOption[]
  ): CommandInteractionOptionResolver<CacheType> {
    const optionsMap = new Map<string, APIApplicationCommandInteractionDataOption>();

    const processOption = (opt: APIApplicationCommandInteractionDataOption) => {
      optionsMap.set(opt.name, opt);
      if ('options' in opt && opt.options) {
        opt.options.forEach(processOption);
      }
    };

    options.forEach(processOption);

    return {
      getString: (name: string, required?: boolean) => {
        const opt = optionsMap.get(name);
        if (!opt && required) throw new Error(`Option ${name} is required`);
        if (!opt || opt.type !== 3) return null;
        return (opt as APIApplicationCommandInteractionDataStringOption).value;
      },
      getInteger: (name: string, required?: boolean) => {
        const opt = optionsMap.get(name);
        if (!opt && required) throw new Error(`Option ${name} is required`);
        if (!opt || opt.type !== 4) return null;
        return (opt as APIApplicationCommandInteractionDataIntegerOption).value;
      },
      getNumber: (name: string, required?: boolean) => {
        const opt = optionsMap.get(name);
        if (!opt && required) throw new Error(`Option ${name} is required`);
        if (!opt || opt.type !== 10) return null;
        return (opt as APIApplicationCommandInteractionDataNumberOption).value;
      },
      getBoolean: (name: string, required?: boolean) => {
        const opt = optionsMap.get(name);
        if (!opt && required) throw new Error(`Option ${name} is required`);
        if (!opt || opt.type !== 5) return null;
        return (opt as APIApplicationCommandInteractionDataBooleanOption).value;
      },
      getUser: (name: string, required?: boolean) => {
        const opt = optionsMap.get(name);
        if (!opt && required) throw new Error(`Option ${name} is required`);
        if (!opt || opt.type !== 6) return null;
        const userOpt = opt as APIApplicationCommandInteractionDataUserOption;
        return userOpt.value ? this.createUser({ id: userOpt.value, username: 'User' }) : null;
      },
      getChannel: () => null,
      getRole: () => null,
      getMentionable: () => null,
      getAttachment: () => null,
      getSubcommand: (required?: boolean) => {
        const subcommand = options.find((opt) => opt.type === 1);
        if (!subcommand && required) throw new Error('Subcommand is required');
        return subcommand?.name || null;
      },
      getSubcommandGroup: (required?: boolean) => {
        const group = options.find((opt) => opt.type === 2);
        if (!group && required) throw new Error('Subcommand group is required');
        return group?.name || null;
      },
      getFocused: () => {
        const focused = options.find(
          (
            opt
          ): opt is
            | APIApplicationCommandInteractionDataStringOption
            | APIApplicationCommandInteractionDataNumberOption
            | APIApplicationCommandInteractionDataIntegerOption =>
            (opt.type === 3 || opt.type === 4 || opt.type === 10) &&
            'focused' in opt &&
            (opt as { focused?: boolean }).focused === true
        );
        if (!focused || !('value' in focused)) return undefined;
        return focused.value as string | number | boolean | undefined;
      },
    } as unknown as CommandInteractionOptionResolver<CacheType>;
  }

  // Implement essential ChatInputCommandInteraction methods
  async reply(options: InteractionReplyOptions & { fetchReply?: boolean }): Promise<Message> {
    if (this.replied || this.deferred) {
      throw new Error('Interaction has already been replied to or deferred');
    }

    this.replied = true;
    this.ephemeral = options.ephemeral || false;

    const body: RESTPostAPIInteractionCallbackJSONBody = {
      type: 4, // CHANNEL_MESSAGE_WITH_SOURCE
      data: {
        content: options.content,
        embeds: options.embeds as APIEmbed[] | undefined,
        components: options.components as
          | APIActionRowComponent<APIMessageActionRowComponent>[]
          | undefined,
        flags: options.ephemeral ? 64 : undefined,
        tts: options.tts,
        allowed_mentions: options.allowedMentions as APIAllowedMentions | undefined,
      },
    };

    await this.rest.post(Routes.interactionCallback(this.id, this.token), { body });

    if (options.fetchReply) {
      const messageData = (await this.rest.get(
        Routes.webhookMessage(this.applicationId, this.token)
      )) as APIMessage;
      return this.createMessage(messageData);
    }

    return {} as Message;
  }

  async editReply(options: InteractionEditReplyOptions): Promise<Message> {
    if (!this.replied && !this.deferred) {
      throw new Error('Interaction has not been replied to or deferred');
    }

    const body = {
      content: options.content ?? null,
      embeds: options.embeds as APIEmbed[] | undefined,
      components: options.components as
        | APIActionRowComponent<APIMessageActionRowComponent>[]
        | undefined,
      allowed_mentions: options.allowedMentions as APIAllowedMentions | undefined,
    } as RESTPatchAPIWebhookJSONBody;

    await this.rest.patch(Routes.webhookMessage(this.applicationId, this.token), { body });

    const messageData = (await this.rest.get(
      Routes.webhookMessage(this.applicationId, this.token)
    )) as APIMessage;
    return this.createMessage(messageData);
  }

  async deferReply(
    options?: InteractionDeferReplyOptions & { fetchReply?: boolean }
  ): Promise<Message | void> {
    if (this.replied || this.deferred) {
      throw new Error('Interaction has already been replied to or deferred');
    }

    this.deferred = true;
    this.ephemeral = options?.ephemeral || false;

    const body: RESTPostAPIInteractionCallbackJSONBody = {
      type: 5, // DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE
      data: {
        flags: options?.ephemeral ? 64 : undefined,
      },
    };

    await this.rest.post(Routes.interactionCallback(this.id, this.token), { body });

    if (options?.fetchReply) {
      const messageData = (await this.rest.get(
        Routes.webhookMessage(this.applicationId, this.token)
      )) as APIMessage;
      return this.createMessage(messageData);
    }
  }

  async followUp(options: WebhookMessageCreateOptions): Promise<Message> {
    if (!this.replied && !this.deferred) {
      throw new Error('Interaction has not been replied to or deferred');
    }

    const body: RESTPostAPIInteractionFollowupJSONBody = {
      content: options.content,
      embeds: options.embeds as APIEmbed[] | undefined,
      components: options.components as
        | APIActionRowComponent<APIMessageActionRowComponent>[]
        | undefined,
      flags: (options as { ephemeral?: boolean }).ephemeral ? 64 : undefined,
      tts: options.tts,
      allowed_mentions: options.allowedMentions as APIAllowedMentions | undefined,
    };

    const messageData = (await this.rest.post(
      Routes.webhookMessage(this.applicationId, this.token),
      { body }
    )) as APIMessage;

    return this.createMessage(messageData);
  }

  async deleteReply(): Promise<void> {
    await this.rest.delete(Routes.webhookMessage(this.applicationId, this.token));
  }

  async fetchReply(): Promise<Message> {
    const messageData = (await this.rest.get(
      Routes.webhookMessage(this.applicationId, this.token)
    )) as APIMessage;
    return this.createMessage(messageData);
  }

  private createMessage(messageData: APIMessage): Message {
    return {
      id: messageData.id,
      channelId: messageData.channel_id,
      guildId: ('guild_id' in messageData ? messageData.guild_id : null) || null,
      author: this.createUser({
        ...messageData.author,
        global_name: messageData.author.global_name ?? undefined,
      }),
      createdTimestamp: Date.parse(messageData.timestamp),
      editedTimestamp: messageData.edited_timestamp
        ? Date.parse(messageData.edited_timestamp)
        : null,
      content: messageData.content,
      embeds: messageData.embeds || [],
      components: messageData.components || [],
      attachments: new Map(),
      reactions: new Map(),
      mentions: {
        users: new Map(),
        roles: new Map(),
        channels: new Map(),
        everyone: messageData.mention_everyone || false,
      },
      pinned: messageData.pinned || false,
      tts: messageData.tts || false,
      type: messageData.type || 0,
      flags: messageData.flags || 0,
    } as unknown as Message;
  }

  // Type guards
  isChatInputCommand(): this is ChatInputCommandInteraction {
    return true;
  }
}

/**
 * Convert API interaction to Discord.js ChatInputCommandInteraction
 */
export async function convertToDiscordJSInteraction(
  apiInteraction: APIInteraction,
  restClient: REST,
  token: string
): Promise<ChatInputCommandInteraction | null> {
  if (apiInteraction.type !== InteractionType.ApplicationCommand) {
    return null;
  }

  try {
    return new WorkersInteractionAdapter(
      apiInteraction as APIApplicationCommandInteraction,
      restClient,
      token
    ) as unknown as ChatInputCommandInteraction;
  } catch (error) {
    logger.error('convertToDiscordJSInteraction - Error creating adapter:', error);
    return null;
  }
}
