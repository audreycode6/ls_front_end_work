/*
Implement a function that checks whether an email address is valid.
An email address has two parts: A "local part" and a"domain part."
An @ sign separates the two parts: local-part@domain-part.

The local part is the name of the mailbox; this is usually a username.

The domain part is the domain name (e.g., gmail.com, yahoo.com.ph,
or myCompanyName.com). The domain name contains a server name
(sometimes called the mail server name) and a top-level domain
(.com, .ph, etc.).

For this practice problem, use the following criteria to
determine whether an email address is valid:

There must be one @ sign.
The local part must contain one or more letters (A-Z, a-z)
  and/or digits (0-9). It may not contain any other characters.
The domain part must contain two or more components with a single
  dot (.) between each component. Each component must contain one or
  more letters (A-Z, a-z) only.
To keep things simple, you don't need to check whether the domain
  part or top-level domain is "real" or "official".
 */

function isValidEmail(email) {
  if (!hasOneAtSymbol(email)) {
    return false;
  }

  const [local, domain] = email.split('@');
  return isAlphaNumericString(local) && validDomain(domain);
}

module.exports = { isValidEmail };

if (require.main === module) {
  console.log(isValidEmail('Foo@baz.com.ph')); // returns true
  console.log(isValidEmail('Foo@mx.baz.com.ph')); // returns true
  console.log(isValidEmail('foo@baz.com')); // returns true
  console.log(isValidEmail('foo@baz.ph')); // returns true
  console.log(isValidEmail('foo@baz@bar.ph')); // returns false
  console.log(isValidEmail('HELLO123@baz')); // returns false
  console.log(isValidEmail('foo.bar@baz.to')); // returns false
  console.log(isValidEmail('foo@baz.')); // returns false
  console.log(isValidEmail('foo_bat@baz')); // returns false
  console.log(isValidEmail('foo@bar.a12')); // returns false
  console.log(isValidEmail('foo_bar@baz.com')); // returns false
  console.log(isValidEmail('foo@bar.....com')); // returns false
}

/*
-------------
HELPER FUNCS
-------------
 */

function hasOneAtSymbol(string) {
  return string.split('@').length === 2;
}

function isAlphaNumericString(string) {
  return /^[a-zA-Z0-9]+$/.test(string);
}

function validDomain(domain) {
  const domainComponents = domain.split('.');

  if (domainComponents.length < 2) {
    return false;
  }

  return hasOnlyAlphabeticStrings(domainComponents);
}

function hasOnlyAlphabeticStrings(arr) {
  return arr.every((component) => /^[a-zA-Z]+$/.test(component));
}
