import assert from 'node:assert/strict';
import test from 'node:test';
import uuid from '../dist/esm/index.js';

function withoutCrypto(callback) {
  const descriptor = Object.getOwnPropertyDescriptor(globalThis, 'crypto');
  Object.defineProperty(globalThis, 'crypto', {
    configurable: true,
    value: undefined
  });

  try {
    callback();
  } finally {
    if (descriptor) {
      Object.defineProperty(globalThis, 'crypto', descriptor);
    } else {
      delete globalThis.crypto;
    }
  }
}

test('uses Web Crypto by default to produce a version 4 UUID', (context) => {
  context.mock.method(globalThis.crypto, 'getRandomValues', (values) => {
    values[0] = 0;
    return values;
  });
  context.mock.method(Math, 'random', () => {
    throw new Error('Math.random must not be used by default.');
  });

  assert.equal(uuid(), '00000000-0000-4000-8000-000000000000');
});

test('throws when secure randomness is unavailable', () => {
  withoutCrypto(() => {
    assert.throws(uuid, /Secure randomness is unavailable/);
  });
});
