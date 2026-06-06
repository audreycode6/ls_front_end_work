const assert = require('assert');
const { test } = require('node:test');
const { wordSizes } = require('./letter_counter2');

test('wordSizes excludes non-letters for "Four score and seven."', () => {
  assert.deepStrictEqual(wordSizes('Four score and seven.'), { 3: 1, 4: 1, 5: 2 });
});

test('wordSizes excludes non-letters for "Hey diddle diddle, the cat and the fiddle!"', () => {
  assert.deepStrictEqual(wordSizes('Hey diddle diddle, the cat and the fiddle!'), { 3: 5, 6: 3 });
});

test("wordSizes excludes non-letters for \"What's up doc?\"", () => {
  assert.deepStrictEqual(wordSizes("What's up doc?"), { 5: 1, 2: 1, 3: 1 });
});

test('wordSizes returns empty object for empty string', () => {
  assert.deepStrictEqual(wordSizes(''), {});
});

test('wordsSizes return empty object for string of only nonalphabetical chars', () => {
  assert.deepStrictEqual(wordSizes('123'), {});
})

test('wordsSizeswordSizes excludes non-letters for "a12!', () => {
  assert.deepStrictEqual(wordSizes('a12!'), {'1': 1});
})