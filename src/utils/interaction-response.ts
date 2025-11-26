import { InteractionResponseType } from 'discord-api-types/v10';

/**
 * JSON Response utility for Discord interactions
 * Similar to ChartisBot's JsonResponse pattern
 */
export class JsonResponse extends Response {
  constructor(body: object, init?: ResponseInit) {
    const jsonBody = JSON.stringify(body);
    const headers = new Headers(init?.headers);
    headers.set('content-type', 'application/json;charset=UTF-8');

    super(jsonBody, {
      ...init,
      headers,
    });
  }
}

/**
 * Utilities for building Discord interaction responses
 */
export class InteractionResponse {
  /**
   * Create a PONG response (for verification)
   */
  public static pong(): JsonResponse {
    return new JsonResponse({ type: InteractionResponseType.Pong });
  }

  /**
   * Create an error response
   */
  public static error(message: string, ephemeral: boolean = true): JsonResponse {
    return new JsonResponse({
      type: InteractionResponseType.ChannelMessageWithSource,
      data: {
        content: `❌ ${message}`,
        flags: ephemeral ? 64 : 0,
      },
    });
  }

  /**
   * Create a deferred response (for long-running operations)
   */
  public static deferred(ephemeral: boolean = false): JsonResponse {
    return new JsonResponse({
      type: InteractionResponseType.DeferredChannelMessageWithSource,
      data: {
        flags: ephemeral ? 64 : 0,
      },
    });
  }

  /**
   * Create a channel message response
   */
  public static message(content: string, ephemeral: boolean = false): JsonResponse {
    return new JsonResponse({
      type: InteractionResponseType.ChannelMessageWithSource,
      data: {
        content,
        flags: ephemeral ? 64 : 0,
      },
    });
  }

  /**
   * Create a response with embeds
   */
  public static embed(embeds: unknown[], ephemeral: boolean = false): JsonResponse {
    return new JsonResponse({
      type: InteractionResponseType.ChannelMessageWithSource,
      data: {
        embeds,
        flags: ephemeral ? 64 : 0,
      },
    });
  }
}
