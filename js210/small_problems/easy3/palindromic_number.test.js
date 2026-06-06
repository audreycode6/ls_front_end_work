const assert = require('assert');
const { test } = require('node:test');
const { isPalindromicNumber } = require('./palindromic_number');

test('isPalindromicNumber returns true for 34543', () => {
  assert.strictEqual(isPalindromicNumber(34543), true);
});

test('isPalindromicNumber returns false for 123210', () => {
  assert.strictEqual(isPalindromicNumber(123210), false);
});

test('isPalindromicNumber returns true for 22', () => {
  assert.strictEqual(isPalindromicNumber(22), true);
});

test('isPalindromicNumber returns true for single digit 5', () => {
  assert.strictEqual(isPalindromicNumber(5), true);
});
