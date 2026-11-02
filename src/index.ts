/**
 * Generates a single random value.
 * Cryptographic randomness is used by default; Math.random() is only used when explicitly requested.
 *
 * @param useCrypto - Whether to use cryptographic randomness. Defaults to true; false uses Math.random().
 * @returns A single random value.
 *
 * @example
 * // Generate a random value using cryptographic randomness
 * console.log(generateRandomValue(true)); // Outputs a number between 0 and 15
 */
function generateRandomValue(useCrypto: boolean): number {
  if (useCrypto === false) return (Math.random() * 16) | 0;

  const cryptoProvider = globalThis.crypto;
  if (!cryptoProvider?.getRandomValues) {
    throw new Error(
      'Secure randomness is unavailable. Use uuid(false) only for non-security-sensitive identifiers.'
    );
  }

  const uint8 = new Uint8Array(1);
  cryptoProvider.getRandomValues(uint8);
  return uint8[0] & 0x0f;
}

/**
 * Generates a UUID (Universally Unique Identifier).
 * By default, the UUID generated is a version 4 UUID, which uses random numbers as the source.
 * Cryptographic randomness is used by default. Passing false opts into Math.random() and is only suitable for non-security-sensitive identifiers.
 *
 * @param useCrypto - Whether to use cryptographic randomness. Defaults to true; false uses Math.random().
 * @returns A UUID string.
 *
 * @example
 * // Generate a UUID using cryptographic randomness
 * console.log(uuid()); // Outputs something like '123e4567-e89b-12d3-a456-426614174000'
 *
 * // Opt into pseudo-random numbers only for non-security-sensitive identifiers
 * console.log(uuid(false));
 *
 * // Explicitly request cryptographic randomness
 * console.log(uuid(true));
 */
function uuid(useCrypto: boolean = true): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = generateRandomValue(useCrypto);
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export default uuid;
