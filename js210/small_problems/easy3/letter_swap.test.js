const assert = require('assert');
const { test } = require('node:test');
const { swap } = require('./letter_swap');

test('swap swaps first and last letters for every word in a sentence', () => {
  assert.strictEqual(swap('Oh what a wonderful day it is'), 'hO thaw a londerfuw yad ti si');
});

test('swap swaps first and last letters for a single word', () => {
  assert.strictEqual(swap('Abcde'), 'ebcdA');
});

test('swap returns same single-letter word', () => {
  assert.strictEqual(swap('a'), 'a');
});
