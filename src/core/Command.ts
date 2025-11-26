import { RESTPostAPIChatInputApplicationCommandsJSONBody } from 'discord-api-types/v10';
import { Environment } from '../services/Environment.js';

/**
 * Help information for commands
 */
export interface CommandHelpInfo {
  name: string;
  description: string;
  usage: string;
  examples: string[];
  category: string;
}

/**
 * Raw API interaction type (from discord-api-types)
 */
export interface RawInteraction {
  id: string;
  type: number;
  data?: {
    id?: string;
    name: string;
    type?: number;
    options?: Array<{
      name: string;
      type: number;
      value?: string | number | boolean;
      options?: Array<{
        name: string;
        type: number;
        value?: string | number | boolean;
      }>;
      focused?: boolean;
    }>;
  };
  guild_id?: string;
  channel_id?: string;
  user?: {
    id: string;
    username: string;
    discriminator?: string;
    global_name?: string;
    bot?: boolean;
    avatar?: string | null;
  };
  member?: {
    user?: {
      id: string;
      username: string;
      discriminator?: string;
      global_name?: string;
      bot?: boolean;
      avatar?: string | null;
    };
    joined_at?: string;
  };
  token: string;
  application_id: string;
}

/**
 * Abstract base class for all Discord commands
 * Each command extends this class and implements its own logic
 * Uses plain objects instead of Discord.js classes for Workers compatibility
 */
export abstract class Command {
  /** Command metadata for Discord registration (plain object) */
  public abstract readonly data: RESTPostAPIChatInputApplicationCommandsJSONBody;

  /** Help information for the help system */
  public abstract readonly helpInfo: CommandHelpInfo;

  /** Optional permissions required for the bot to execute this command */
  public readonly requiredPermissions: string[] = [];

  /** Whether this command can only be used in guilds (not DMs) */
  public readonly guildOnly: boolean = false;

  /** Whether this command can only be used by developers */
  public readonly developerOnly: boolean = false;

  /**
   * Execute the command
   * @param interaction The raw Discord API interaction
   * @param env Environment variables (for Cloudflare Workers compatibility)
   * @returns Response object to send back to Discord
   */
  public abstract execute(
    interaction: RawInteraction,
    env: Record<string, unknown>
  ): Promise<Response>;

  /**
   * Get the command data for Discord registration
   */
  public getRegistrationData(): RESTPostAPIChatInputApplicationCommandsJSONBody {
    return this.data;
  }

  /**
   * Get the command name
   */
  public getName(): string {
    return this.data.name;
  }

  /**
   * Get the command description
   */
  public getDescription(): string {
    return this.helpInfo.description;
  }

  /**
   * Get the help information
   */
  public getHelpInfo(): CommandHelpInfo {
    return this.helpInfo;
  }

  /**
   * Validate if the command can be executed in the current context
   */
  public async validate(interaction: RawInteraction): Promise<{ valid: boolean; reason?: string }> {
    // Check if command is guild-only but used in DM
    if (this.guildOnly && !interaction.guild_id) {
      return { valid: false, reason: 'This command can only be used in servers.' };
    }

    // Check bot permissions
    // Note: In Cloudflare Workers, we don't have access to guild member cache
    // Permission checks would need to be done via REST API if required
    // For template purposes, we'll skip detailed permission checks
    if (this.requiredPermissions.length > 0 && interaction.guild_id) {
      // In a production bot, you would fetch bot member via REST API here
      // For template, we'll assume permissions are correct
      // Users can implement proper permission checking if needed
    }

    // Add developer-only check if needed
    if (this.developerOnly) {
      const config = Environment.getConfig();
      const userId = interaction.user?.id || interaction.member?.user?.id;
      if (!userId || !config.developerIds.includes(userId)) {
        return { valid: false, reason: 'This command is for developers only.' };
      }
    }

    return { valid: true };
  }
}
