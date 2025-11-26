import { Command, CommandHelpInfo, RawInteraction } from '../../core/Command.js';
import { ALL_COMMANDS } from '../index.js';
import { InteractionResponse } from '../../utils/interaction-response.js';

/**
 * Help command that automatically uses all registered commands
 * Demonstrates how the centralized system makes help generation automatic
 */
export class HelpCommand extends Command {
  public readonly data = {
    name: 'help',
    description: 'Get help with bot commands',
    type: 1, // CHAT_INPUT
    options: [
      {
        name: 'command',
        description: 'Get detailed help for a specific command',
        type: 3, // STRING
        required: false,
        autocomplete: true,
      },
    ],
  };

  public readonly helpInfo: CommandHelpInfo = {
    name: 'help',
    description: 'Get help with bot commands and see detailed usage instructions',
    usage: '/help [command]',
    examples: ['/help', '/help command:ping'],
    category: 'Utility',
  };

  public async execute(
    interaction: RawInteraction,
    _env: Record<string, unknown>
  ): Promise<Response> {
    // Get command option value
    const commandOption = interaction.data?.options?.find((opt) => opt.name === 'command');
    const specificCommand = commandOption?.value as string | undefined;

    if (specificCommand) {
      return await this.showSpecificCommandHelp(interaction, specificCommand);
    } else {
      return await this.showAllCommandsHelp(interaction);
    }
  }

  private async showSpecificCommandHelp(
    interaction: RawInteraction,
    commandName: string
  ): Promise<Response> {
    const command = ALL_COMMANDS.find((cmd) => cmd.getName() === commandName);

    if (!command) {
      return InteractionResponse.error(`Command "${commandName}" not found.`, true);
    }

    const helpInfo = command.getHelpInfo();

    const embed = {
      title: `📖 Help: /${helpInfo.name}`,
      description: helpInfo.description,
      color: 0x00ae86,
      fields: [
        {
          name: '📋 Usage',
          value: `\`${helpInfo.usage}\``,
          inline: false,
        },
        {
          name: '🎯 Examples',
          value: helpInfo.examples.map((ex) => `\`${ex}\``).join('\n'),
          inline: false,
        },
        {
          name: '📂 Category',
          value: helpInfo.category,
          inline: true,
        },
      ],
      timestamp: new Date().toISOString(),
    };

    // Add permission info if any
    if (command.requiredPermissions.length > 0) {
      embed.fields.push({
        name: '🔒 Required Permissions',
        value: command.requiredPermissions.join(', '),
        inline: true,
      });
    }

    // Add restrictions if any
    const restrictions: string[] = [];
    if (command.guildOnly) restrictions.push('Server only');
    if (command.developerOnly) restrictions.push('Developer only');

    if (restrictions.length > 0) {
      embed.fields.push({
        name: '⚠️ Restrictions',
        value: restrictions.join(', '),
        inline: true,
      });
    }

    return InteractionResponse.embed([embed], false);
  }

  private async showAllCommandsHelp(_interaction: RawInteraction): Promise<Response> {
    // Group commands by category
    const categories = new Map<string, Command[]>();

    for (const command of ALL_COMMANDS) {
      const category = command.getHelpInfo().category;
      if (!categories.has(category)) {
        categories.set(category, []);
      }
      const categoryCommands = categories.get(category);
      if (categoryCommands) {
        categoryCommands.push(command);
      }
    }

    const embed = {
      title: '🤖 Bot Commands',
      description: 'Here are all available commands, organized by category.',
      color: 0x5865f2,
      timestamp: new Date().toISOString(),
      footer: { text: 'Use /help command:<name> for detailed help on a specific command' },
      fields: [] as Array<{ name: string; value: string; inline: boolean }>,
    };

    // Add fields for each category
    for (const [categoryName, commands] of categories) {
      const commandList = commands
        .map((cmd) => `\`/${cmd.getName()}\` - ${cmd.getDescription()}`)
        .join('\n');

      embed.fields.push({
        name: `📂 ${categoryName}`,
        value: commandList,
        inline: false,
      });
    }

    return InteractionResponse.embed([embed], false);
  }

  // Autocomplete for command names
  public async autocomplete(
    interaction: RawInteraction
  ): Promise<Array<{ name: string; value: string }>> {
    const focusedOption = interaction.data?.options?.find(
      (opt) => (opt as { focused?: boolean }).focused === true
    );
    const focusedValue = (focusedOption?.value as string) || '';

    const choices = ALL_COMMANDS.filter((cmd) =>
      cmd.getName().toLowerCase().startsWith(focusedValue.toLowerCase())
    )
      .slice(0, 25) // Discord limit
      .map((cmd) => ({
        name: cmd.getName(),
        value: cmd.getName(),
      }));

    return choices;
  }
}
