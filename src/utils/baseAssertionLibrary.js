import { assert } from 'chai';

export async function assertTest(actual, message) {
  assert(actual, message);
}

export async function assertEqual(actual, expected, message) {
  assert.equal(actual, expected, message);
}

export async function assertNotEqual(actual, expected, message) {
  assert.notEqual(actual, expected, message);
}

export async function isNotNaN(actual, message) {
  assert.isNotNaN(actual, message);
}

export async function typeOf(value, name, message) {
  assert.typeOf(value, name, message);
}

export async function assertFail(message) {
  assert.fail(message);
}
