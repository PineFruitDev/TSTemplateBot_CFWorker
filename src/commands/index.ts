import { Command } from '../core/Command.js';

// Import commands from their folders
import { PingCommand } from './ping/index.js';
import { HelpCommand } from './help/index.js';
import { InfoCommand } from './info/index.js';

/**
 * Central command registry - SINGLE SOURCE OF TRUTH
 * Add new commands here and they'll automatically be available everywhere
 *
 * Commands are organized in folders:
 * - Each command has its own folder (e.g., ping/, help/, info/)
 * - Commands with subcommands organize them in separate files
 * - The index.ts in each folder exports the main command class
 */
export const ALL_COMMANDS: Command[] = [
  new PingCommand(),
  new HelpCommand(),
  new InfoCommand(),
  // Add new commands here - they'll automatically be registered and available
  // Commands will automatically appear in /help command
];

/**
 * Export individual commands for type checking if needed
 */
export { PingCommand } from './ping/index.js';
export { HelpCommand } from './help/index.js';
export { InfoCommand } from './info/index.js';
