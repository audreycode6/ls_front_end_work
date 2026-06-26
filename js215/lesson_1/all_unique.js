/*
implement a function that determines whether a string
has any character that appears more than once. The
function should return true if, and only if, all
characters in the string are unique. We should ignore
multiple spaces and case differences; focus instead
on the non-space characters without regard to case.
 */

function isNotWhiteSpaceChar(char) {
  return char !== ' ';
}

function isAllUnique(string) {
  let uniqueChars = [];

  for (let idx = 0; idx < string.length; idx += 1) {
    let currentChar = string.toLowerCase()[idx];

    if (isNotWhiteSpaceChar(currentChar)) {
      if (uniqueChars.includes(currentChar)) {
        return false;
      } else {
        uniqueChars.push(currentChar);
      }
    }
  }

  return true;
}

console.log(isAllUnique('The quick brown fox jumped over a lazy dog')); // false
console.log(isAllUnique('123,456,789')); // false
console.log(isAllUnique('The big apple')); // false
console.log(isAllUnique('The big apPlE')); // false
console.log(isAllUnique('!@#$%^&*()')); // true
console.log(isAllUnique('abcdefghijklmnopqrstuvwxyz')); // true
