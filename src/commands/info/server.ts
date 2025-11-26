import { RawInteraction } from '../../core/Command.js';
import { InteractionResponse } from '../../utils/interaction-response.js';

/**
 * Server subcommand for info command
 */
export class InfoServerSubcommand {
  public async execute(
    interaction: RawInteraction,
    env: Record<string, unknown>
  ): Promise<Response> {
    try {
      if (!interaction.guild_id) {
        return InteractionResponse.error('This command can only be used in a server.', true);
      }

      // Fetch guild info via REST API
      const token = env.DISCORD_TOKEN as string;
      const guildResponse = await fetch(
        `https://discord.com/api/v10/guilds/${interaction.guild_id}`,
        {
          headers: {
            Authorization: `Bot ${token}`,
          },
        }
      );

      if (!guildResponse.ok) {
        return InteractionResponse.error('Unable to fetch server information.', true);
      }

      const guild = (await guildResponse.json()) as {
        name: string;
        id: string;
        owner_id: string;
        description?: string;
        icon?: string;
        member_count?: number;
        verification_level?: number;
        premium_tier?: number;
      };

      // Calculate created timestamp from guild ID (snowflake)
      const guildId = guild.id;
      const createdTimestamp = Number(BigInt(guildId) >> 22n) + 1420070400000;

      const embed = {
        title: `🏰 Server Information`,
        description: `Information about ${guild.name}`,
        color: 0x5865f2,
        thumbnail: guild.icon
          ? {
              url: `https://cdn.discordapp.com/icons/${guildId}/${guild.icon}.png`,
            }
          : undefined,
        fields: [
          {
            name: '📊 Statistics',
            value: [`**Members:** ${guild.member_count || 'Unknown'}`, `**ID:** ${guildId}`].join(
              '\n'
            ),
            inline: true,
          },
          {
            name: '👑 Server Details',
            value: [
              `**Owner:** <@${guild.owner_id}>`,
              `**Created:** <t:${Math.floor(createdTimestamp / 1000)}:F>`,
              `**Verification:** ${guild.verification_level || 'Unknown'}`,
              `**Boost Level:** ${guild.premium_tier || 0}`,
            ].join('\n'),
            inline: true,
          },
        ],
        timestamp: new Date().toISOString(),
      };

      if (guild.description) {
        embed.fields.push({
          name: '📝 Description',
          value: guild.description,
          inline: false,
        });
      }

      return InteractionResponse.embed([embed], false);
    } catch (_error) {
      return InteractionResponse.error(
        'An error occurred while fetching server information.',
        true
      );
    }
  }
}
