/**
 * Generates a single random value.
 * If `useCrypto` is true and the environment supports the Web Crypto API, cryptographic randomness will be used.
 * Otherwise, Math.random() is used.
 *
 * @param useCrypto - Whether to use cryptographic randomness.
 * @returns A single random value.
 *
 * @example
 * // Generate a random value using Math.random()
 * console.log(generateRandomValue(false)); // Outputs a number between 0 and 15
 *
 * // Generate a random value using cryptographic randomness
 * console.log(generateRandomValue(true)); // Outputs a number between 0 and 15 (if crypto is supported)
 */
function generateRandomValue(useCrypto: boolean): number {
  try {
    if (useCrypto && window.crypto && window.crypto.getRandomValues) {
      const uint8 = new Uint8Array(1);
      window.crypto.getRandomValues(uint8);
      return uint8[0] % 16;
    } else {
      return (Math.random() * 16) | 0;
    }
  } catch (e) {
    console.error('Error generating random value: ', e);
    return (Math.random() * 16) | 0; // Fallback to Math.random()
  }
}

/**
 * Generates a UUID (Universally Unique Identifier).
 * By default, the UUID generated is a version 4 UUID, which uses random numbers as the source.
 * If `useCrypto` is true, cryptographic randomness is used if available.
 *
 * @param useCrypto - Whether to use cryptographic randomness.
 * @returns A UUID string.
 *
 * @example
 * // Generate a UUID using pseudo-random numbers
 * console.log(uuid()); // Outputs something like '123e4567-e89b-12d3-a456-426614174000'
 *
 * // Generate a UUID using cryptographic randomness
 * console.log(uuid(true)); // Outputs a UUID generated with cryptographic randomness (if crypto is supported)
 */
function uuid(useCrypto: boolean = false): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = generateRandomValue(useCrypto);
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export default uuid;
