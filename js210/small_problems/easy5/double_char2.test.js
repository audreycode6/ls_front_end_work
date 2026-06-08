const assert = require('assert');
const { test } = require('node:test');

const doubleConsonants = require('./double_char2');

test('handles single string with only alphabetical chars', () => {
    assert.deepStrictEqual(doubleConsonants('String'), "SSttrrinngg");
});

test('handles string with non alphabetical chars', () => {
    assert.deepStrictEqual(doubleConsonants('Hello-World!'), "HHellllo-WWorrlldd!");
});

test('handles string with numeric chars and whitespace', () => {
    assert.deepStrictEqual(doubleConsonants('July 4th'), "JJullyy 4tthh");
});

test('handle empty string', () => {
     assert.deepStrictEqual(doubleConsonants(''), "");
});