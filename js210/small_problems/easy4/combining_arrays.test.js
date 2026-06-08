const assert = require('assert');
const { test } = require('node:test');

const union = require('./combining_arrays.js');

test('returns union without duplicates for numeric arrays', () => {
  assert.deepStrictEqual(union([1, 3, 5], [3, 6, 9]), [1, 3, 5, 6, 9]);
});

test('handles duplicates within arrays and different ordering', () => {
  assert.deepStrictEqual(union([1, 2, 3, 3], [3, 4, 2, 4]), [1, 2, 3, 4]);
});

test('handles empty arrays', () => {
  assert.deepStrictEqual(union([], []), []);
  assert.deepStrictEqual(union([], [1, 2]), [1, 2]);
});

test('handles strings and mixed types', () => {
  assert.deepStrictEqual(union(['a', 'b'], ['b', 'c']), ['a', 'b', 'c']);
  assert.deepStrictEqual(union([1, '1'], ['1', 2]), [1, '1', 2]);
});
