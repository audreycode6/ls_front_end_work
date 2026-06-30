const assert = require('assert');
const { test } = require('node:test');
const { isValidEmail } = require('./email_validation');

// Valid emails
test('isValidEmail returns true for "Foo@baz.com.ph"', () => {
  assert.strictEqual(isValidEmail('Foo@baz.com.ph'), true);
});

test('isValidEmail returns true for "Foo@mx.baz.com.ph"', () => {
  assert.strictEqual(isValidEmail('Foo@mx.baz.com.ph'), true);
});

test('isValidEmail returns true for "foo@baz.com"', () => {
  assert.strictEqual(isValidEmail('foo@baz.com'), true);
});

test('isValidEmail returns true for "foo@baz.ph"', () => {
  assert.strictEqual(isValidEmail('foo@baz.ph'), true);
});

// Invalid: multiple @ signs
test('isValidEmail returns false when there are two @ signs', () => {
  assert.strictEqual(isValidEmail('foo@baz@bar.ph'), false);
});

// Invalid: domain has no dot (only one component)
test('isValidEmail returns false when domain has no dot', () => {
  assert.strictEqual(isValidEmail('HELLO123@baz'), false);
});

// Invalid: local part contains a dot
test('isValidEmail returns false when local part contains a dot', () => {
  assert.strictEqual(isValidEmail('foo.bar@baz.to'), false);
});

// Invalid: domain ends with a dot (empty trailing component)
test('isValidEmail returns false when domain ends with a dot', () => {
  assert.strictEqual(isValidEmail('foo@baz.'), false);
});

// Invalid: local part contains an underscore
test('isValidEmail returns false when local part contains an underscore', () => {
  assert.strictEqual(isValidEmail('foo_bat@baz'), false);
});

// Invalid: domain component contains digits
test('isValidEmail returns false when a domain component contains digits', () => {
  assert.strictEqual(isValidEmail('foo@bar.a12'), false);
});

// Invalid: local part contains underscore with valid-looking domain
test('isValidEmail returns false when local part has underscore and domain looks valid', () => {
  assert.strictEqual(isValidEmail('foo_bar@baz.com'), false);
});

// Invalid: domain has consecutive dots (empty component between dots)
test('isValidEmail returns false when domain has consecutive dots', () => {
  assert.strictEqual(isValidEmail('foo@bar.....com'), false);
});
