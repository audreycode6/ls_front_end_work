const assert = require('assert');
const { test, describe } = require('node:test');
const { isValidEmail } = require('./email_validation');

describe('isValidEmail', () => {
  // HAPPY PATH
  test('returns true for basic valid email', () => {
    assert.strictEqual(isValidEmail('foo@baz.com'), true);
  });

  test('returns true for two-part domain', () => {
    assert.strictEqual(isValidEmail('foo@baz.ph'), true);
  });

  test('returns true for valid email with multiple ccSLD domains', () => {
    assert.strictEqual(isValidEmail('Foo@baz.com.ph'), true);
  });

  test('returns true for four-part domain', () => {
    assert.strictEqual(isValidEmail('Foo@mx.baz.com.ph'), true);
  });

  test('returns true for valid email using uppercase and digits in local', () => {
    assert.strictEqual(isValidEmail('FOO123@baz.com'), true);
  });

  // INVALID INPUTS
  test('returns false for multiple @ signs', () => {
    assert.strictEqual(isValidEmail('foo@bar.com@baz'), false);
  });

  test('returns false when domain has no dot', () => {
    assert.strictEqual(isValidEmail('HELLO123@baz'), false);
  });

  test('returns false when local part contains a dot', () => {
    assert.strictEqual(isValidEmail('foo.bar@baz.to'), false);
  });

  test('returns false when domain ends with a dot', () => {
    assert.strictEqual(isValidEmail('foo@baz.'), false);
  });

  test('returns false when a domain component contains digits', () => {
    assert.strictEqual(isValidEmail('foo@bar.a12'), false);
  });

  test('returns false when local part has underscore and domain looks valid', () => {
    assert.strictEqual(isValidEmail('foo_bar@baz.com'), false);
  });

  test('returns false when domain has consecutive dots', () => {
    assert.strictEqual(isValidEmail('foo@bar.....com'), false);
  });

  test('returns false if no "@" sign at all', () => {
    assert.strictEqual(isValidEmail('foobazbaz'), false);
  });
});
