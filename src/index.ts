/**
 * Generates a pseudo-random UUID (Universally Unique Identifier).
 * The UUID generated is a version 4 UUID, which uses random numbers as the source.
 *
 * @returns {string} A pseudo-random UUID.
 *
 * @example
 * // Generates a UUID string
 * const id = uuid();
 * console.log(id); // Outputs: '123e4567-e89b-12d3-a456-426614174000' (example output)
 */

function uuid(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
    /[xy]/g,
    (character) => {
      const randomValue = (Math.random() * 16) | 0;
      const uuidValue =
        character === 'x' ? randomValue : (randomValue & 0x3) | 0x8;
      return uuidValue.toString(16);
    }
  );
}

export default uuid;
