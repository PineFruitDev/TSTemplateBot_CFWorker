import { Command, CommandHelpInfo, RawInteraction } from '../../core/Command.js';
import { InteractionResponse } from '../../utils/interaction-response.js';

/**
 * Simple ping command - demonstrates basic command structure
 */
export class PingCommand extends Command {
  public readonly data = {
    name: 'ping',
    description: 'Check if the bot is responding',
    type: 1, // CHAT_INPUT
  };

  public readonly helpInfo: CommandHelpInfo = {
    name: 'ping',
    description: 'Check if the bot is responding and get latency information',
    usage: '/ping',
    examples: ['/ping'],
    category: 'Utility',
  };

  public async execute(
    _interaction: RawInteraction,
    _env: Record<string, unknown>
  ): Promise<Response> {
    const startTime = Date.now();

    // Calculate latency (approximate, since we're responding immediately)
    const latency = Date.now() - startTime;

    // Return response immediately with latency info
    return InteractionResponse.message(
      `🏓 **Pong!**\n📡 **Latency:** ~${latency}ms\n💓 **API Latency:** ~${latency}ms`,
      false
    );
  }
}
