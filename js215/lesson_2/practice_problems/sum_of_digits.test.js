const assert = require('assert');
const { test, describe } = require('node:test');
const { sum } = require('./sum_of_digits');

describe('sum', () => {
  // HAPPY PATH
  test('returns sum of self in single digit number', () => {
    assert.strictEqual(sum(5), 5);
  });

  test('returns sum of 2 digit number', () => {
    assert.strictEqual(sum(23), 5);
  });

  test('return sum of multidigit number', () => {
    assert.strictEqual(sum(123456789), 45);
  });
});
