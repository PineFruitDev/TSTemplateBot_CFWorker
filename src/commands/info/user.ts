import { RawInteraction } from '../../core/Command.js';
import { InteractionResponse } from '../../utils/interaction-response.js';

/**
 * User subcommand for info command
 */
export class InfoUserSubcommand {
  public async execute(
    interaction: RawInteraction,
    env: Record<string, unknown>
  ): Promise<Response> {
    try {
      // Get target user option
      const userSubcommand = interaction.data?.options?.find((opt) => opt.name === 'user');
      const targetOption = (
        userSubcommand as { options?: Array<{ name: string; value: unknown }> }
      )?.options?.find((opt) => opt.name === 'target');
      const targetUserId = (targetOption?.value as string) || undefined;

      // Determine which user to show info for
      let userId: string;
      let user: RawInteraction['user'];
      let member: RawInteraction['member'];

      if (targetUserId) {
        // Fetch target user from Discord API
        const token = env.DISCORD_TOKEN as string;
        try {
          const userResponse = await fetch(`https://discord.com/api/v10/users/${targetUserId}`, {
            headers: {
              Authorization: `Bot ${token}`,
            },
          });
          if (userResponse.ok) {
            const targetUser = (await userResponse.json()) as {
              id: string;
              username: string;
              discriminator: string;
              global_name?: string;
              bot?: boolean;
              avatar?: string | null;
            };
            userId = targetUser.id;
            user = {
              id: targetUser.id,
              username: targetUser.username,
              discriminator: targetUser.discriminator,
              global_name: targetUser.global_name,
              bot: targetUser.bot,
              avatar: targetUser.avatar ?? null,
            };
            // Try to get member info if in guild
            if (interaction.guild_id) {
              try {
                const memberResponse = await fetch(
                  `https://discord.com/api/v10/guilds/${interaction.guild_id}/members/${targetUserId}`,
                  {
                    headers: {
                      Authorization: `Bot ${token}`,
                    },
                  }
                );
                if (memberResponse.ok) {
                  const memberData = (await memberResponse.json()) as { joined_at?: string };
                  member = { joined_at: memberData.joined_at };
                }
              } catch {
                // Ignore member fetch errors
              }
            }
          } else {
            // If user fetch fails, fall back to command author
            userId = interaction.user?.id || interaction.member?.user?.id || '';
            user = interaction.user || interaction.member?.user;
            member = interaction.member;
          }
        } catch {
          // If fetch fails, fall back to command author
          userId = interaction.user?.id || interaction.member?.user?.id || '';
          user = interaction.user || interaction.member?.user;
          member = interaction.member;
        }
      } else {
        // No target specified, use command author
        userId = interaction.user?.id || interaction.member?.user?.id || '';
        user = interaction.user || interaction.member?.user;
        member = interaction.member;
      }

      if (!user || !userId) {
        return InteractionResponse.error('Unable to get user information.', true);
      }

      const username = user.username || 'Unknown';
      const discriminator = user.discriminator || '0';
      const tag = `${username}${discriminator !== '0' ? `#${discriminator}` : ''}`;
      const displayName = user.global_name || username;
      const avatar = user.avatar || null;

      // Calculate created timestamp from user ID (snowflake)
      const createdTimestamp = Number(BigInt(userId) >> 22n) + 1420070400000;

      const embed = {
        title: `👤 User Information`,
        description: `Information about ${tag}`,
        color: 0x00ae86,
        thumbnail: avatar
          ? {
              url: `https://cdn.discordapp.com/avatars/${userId}/${avatar}.png`,
            }
          : undefined,
        fields: [
          {
            name: '📊 Basic Info',
            value: [
              `**Username:** ${username}`,
              `**Display Name:** ${displayName}`,
              `**ID:** ${userId}`,
              `**Bot:** ${user.bot ? 'Yes' : 'No'}`,
            ].join('\n'),
            inline: true,
          },
          {
            name: '📅 Dates',
            value: [
              `**Account Created:** <t:${Math.floor(createdTimestamp / 1000)}:F>`,
              `**Joined Server:** ${member?.joined_at ? `<t:${Math.floor(Date.parse(member.joined_at) / 1000)}:F>` : 'Not in server'}`,
            ].join('\n'),
            inline: true,
          },
        ],
        timestamp: new Date().toISOString(),
      };

      return InteractionResponse.embed([embed], false);
    } catch (_error) {
      return InteractionResponse.error('An error occurred while fetching user information.', true);
    }
  }
}
