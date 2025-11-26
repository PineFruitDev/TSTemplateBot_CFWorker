import { Command, CommandHelpInfo, RawInteraction } from '../../core/Command.js';
import { Logger } from '../../services/Logger.js';
import { InfoUserSubcommand } from './user.js';
import { InfoServerSubcommand } from './server.js';
import { InteractionResponse } from '../../utils/interaction-response.js';

/**
 * Info command demonstrating advanced features:
 * - Subcommands
 * - Options
 * - Permissions
 * - Error handling
 * - Guild-only restriction
 */
export class InfoCommand extends Command {
  private userSubcommand = new InfoUserSubcommand();
  private serverSubcommand = new InfoServerSubcommand();

  public readonly data = {
    name: 'info',
    description: 'Get information about users or servers',
    type: 1, // CHAT_INPUT
    options: [
      {
        name: 'user',
        description: 'Get information about a user',
        type: 1, // SUBCOMMAND
        options: [
          {
            name: 'target',
            description: 'The user to get info about',
            type: 6, // USER
            required: false,
          },
        ],
      },
      {
        name: 'server',
        description: 'Get information about the server',
        type: 1, // SUBCOMMAND
      },
    ],
  };

  public readonly helpInfo: CommandHelpInfo = {
    name: 'info',
    description: 'Get information about users or servers',
    usage: '/info <user|server> [target]',
    examples: ['/info user', '/info user target:@john', '/info server'],
    category: 'Utility',
  };

  // Command configuration
  public readonly requiredPermissions: string[] = ['SendMessages'];
  public readonly guildOnly = true;

  public async execute(
    interaction: RawInteraction,
    env: Record<string, unknown>
  ): Promise<Response> {
    // Get subcommand from options
    const subcommandOption = interaction.data?.options?.find(
      (opt) => opt.type === 1 // SUBCOMMAND
    );
    const subcommand = subcommandOption?.name;

    try {
      switch (subcommand) {
        case 'user':
          return await this.userSubcommand.execute(interaction, env);

        case 'server':
          return await this.serverSubcommand.execute(interaction, env);

        default:
          return InteractionResponse.error('Unknown subcommand.', true);
      }
    } catch (error) {
      Logger.error(`Error in info command subcommand ${subcommand}:`, error);
      return InteractionResponse.error('An error occurred while executing this command.', true);
    }
  }
}
