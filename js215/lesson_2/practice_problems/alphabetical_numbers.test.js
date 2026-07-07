const assert = require('assert');
const { test, describe } = require('node:test');
const { alphabeticNumberSort } = require('./alphabetical_numbers');

describe('alphabeticalNumberSort', () => {
  test("returns array of numbers 0 - 19 sorted by it's english word value", () => {
    assert.deepStrictEqual(
      alphabeticNumberSort([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
      ]),
      [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0],
    );
  });

  test('returns array of numbers 0 - 10 sorted by its english word value', () => {
    assert.deepStrictEqual(
      alphabeticNumberSort([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
      [8, 5, 4, 9, 1, 7, 6, 10, 3, 2, 0],
    );
  });

  test('returns self if array has only 1 element', () => {
    assert.deepStrictEqual(alphabeticNumberSort([0]), [0]);
  });
});
