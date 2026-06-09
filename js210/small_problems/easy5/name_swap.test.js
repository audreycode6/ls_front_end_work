const { test } = require('node:test');
const assert = require('assert');
const swapName = require('./name_swap.js');

test('swapName returns "Roberts, Joe" for "Joe Roberts"', () => {
  assert.strictEqual(swapName('Joe Roberts'), 'Roberts, Joe');
});

test('swapName handles multiple first names', () => {
  assert.strictEqual(swapName('Joe Moe Grow Roberts'), 'Roberts, Joe Moe Grow');
});
