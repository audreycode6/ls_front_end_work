const assert = require('assert');
const { test } = require('node:test');

const halvsies = require('./halvsies.js');

test('even length array returns new array with 2 array elems evenly splitting the arrays elems', () => {
    assert.deepStrictEqual(halvsies([1, 2, 3, 4]), [[1, 2], [3, 4]])    
});

test('odd length array returns new array with the middle elem stored in new arrays 1st elem', () => {
    assert.deepStrictEqual(halvsies([1, 5, 2, 4, 3]), [[1, 5, 2], [4, 3]])    
});

test('only 1 array for arg returns new array has 2nd elem empty', () => {
    assert.deepStrictEqual(halvsies([5]), [[5], []])
});

test('empty array argument returns new array with both elems empty', () => {
    assert.deepStrictEqual(halvsies([]), [[], []])
});

test('does not mutate the original array', () => {
    const input = [1, 2, 3, 4];
    const copy = input.slice();
    halvsies(input);
    assert.deepStrictEqual(input, copy);
});

test('handles non-number elements (strings and objects)', () => {
    assert.deepStrictEqual(halvsies(['a', 'b', 'c', 'd']), [['a', 'b'], ['c', 'd']]);

    const a = { x: 1 };
    const b = { y: 2 };
    const c = { z: 3 };
    const arr = [a, b, c];
    const [first, second] = halvsies(arr);
    assert.strictEqual(first[0], a);
    assert.strictEqual(first[1], b);
    assert.strictEqual(second[0], c);
});