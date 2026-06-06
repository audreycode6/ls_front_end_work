const assert = require('assert');
const { test } = require('node:test');
const { wordSizes } = require('./letter_counter1');

test('wordSizes counts word lengths for "Four score and seven."', () => {
  assert.deepStrictEqual(wordSizes('Four score and seven.'), { 3: 1, 4: 1, 5: 1, 6: 1 });
});

test('wordSizes counts word lengths for "Hey diddle diddle, the cat and the fiddle!"', () => {
  assert.deepStrictEqual(wordSizes('Hey diddle diddle, the cat and the fiddle!'), { 3: 5, 6: 1, 7: 2 });
});

test('wordSizes counts word lengths for "What\'s up doc?"', () => {
  assert.deepStrictEqual(wordSizes("What's up doc?"), { 2: 1, 4: 1, 6: 1 });
});

test('wordSizes returns empty object for empty string', () => {
  assert.deepStrictEqual(wordSizes(''), {});
});
