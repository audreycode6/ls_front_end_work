const assert = require('assert');
const { test } = require('node:test');
const { runningTotal } = require('./running_totals');

test('runningTotal returns cumulative sums for [2, 5, 13]', () => {
  assert.deepStrictEqual(runningTotal([2, 5, 13]), [2, 7, 20]);
});

test('runningTotal returns cumulative sums for [14, 11, 7, 15, 20]', () => {
  assert.deepStrictEqual(runningTotal([14, 11, 7, 15, 20]), [14, 25, 32, 47, 67]);
});

test('runningTotal returns [3] for [3]', () => {
  assert.deepStrictEqual(runningTotal([3]), [3]);
});

test('runningTotal returns [] for []', () => {
  assert.deepStrictEqual(runningTotal([]), []);
});
