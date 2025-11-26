import { verifyKey } from 'discord-interactions';

/**
 * Discord interaction signature verification using discord-interactions
 * Required to verify requests are from Discord
 */
export class Verification {
  /**
   * Verify Discord interaction signature
   * @param body Raw request body (string)
   * @param signature Signature from X-Signature-Ed25519 header
   * @param timestamp Timestamp from X-Signature-Timestamp header
   * @param publicKey Discord public key (from env)
   * @returns true if signature is valid
   */
  public static async verify(
    body: string,
    signature: string,
    timestamp: string,
    publicKey: string
  ): Promise<boolean> {
    try {
      return await verifyKey(body, signature, timestamp, publicKey);
    } catch (error) {
      console.error('Verification error:', error);
      return false;
    }
  }
}
