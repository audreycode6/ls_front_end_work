const assert = require('assert');
const { test } = require('node:test');

const reverseNumber = require('./reverse_numb.js');

test('reverses digits for multi-digit number', () => {
  assert.strictEqual(reverseNumber(12345), 54321);
});

test('drops leading zeros after reversal', () => {
  assert.strictEqual(reverseNumber(12000), 21);
});

test('single-digit returns same', () => {
  assert.strictEqual(reverseNumber(1), 1);
});

test('handles zero', () => {
  assert.strictEqual(reverseNumber(0), 0);
});

test('returns number type', () => {
  assert.strictEqual(typeof reverseNumber(123), 'number');
});
