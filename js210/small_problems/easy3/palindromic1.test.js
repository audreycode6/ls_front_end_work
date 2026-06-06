const assert = require('assert');
const { test } = require('node:test');
const { isPalindrome, isRealPalindrome } = require('./palindromic1');

test('isPalindrome returns true for exact palindrome with lowercase letters', () => {
  assert.strictEqual(isPalindrome('madam'), true);
});

test('isPalindrome returns false when case differs', () => {
  assert.strictEqual(isPalindrome('Madam'), false);
});

test('isPalindrome treats punctuation and spaces as significant', () => {
  assert.strictEqual(isPalindrome("madam i'm adam"), false);
});

test('isPalindrome returns true for numeric palindrome strings', () => {
  assert.strictEqual(isPalindrome('356653'), true);
});

test('isRealPalindrome is case-insensitive', () => {
  assert.strictEqual(isRealPalindrome('Madam'), true);
});

test('isRealPalindrome ignores non-alphanumeric characters', () => {
  assert.strictEqual(isRealPalindrome("Madam, I'm Adam"), true);
});

test('isRealPalindrome works for numeric palindromes', () => {
  assert.strictEqual(isRealPalindrome('356653'), true);
});

test('isRealPalindrome treats embedded letters and numbers correctly', () => {
  assert.strictEqual(isRealPalindrome('356a653'), true);
});

test('isRealPalindrome returns false for non-palindromic alphanumeric strings', () => {
  assert.strictEqual(isRealPalindrome('123ab321'), false);
});
