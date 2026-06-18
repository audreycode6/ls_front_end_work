/*
Write a function that takes a string argument and
returns true if all of the alphabetic characters
inside the string are uppercase; otherwise, return
false. Ignore characters that are not alphabetic.
*/

'use strict';

function isUppercase(string) {
  for (let i = 0; i < string.length; i++) {
    let char = string[i];

    if (/^[A-Za-z]$/i.test(char)) {
      // if alphabetical char
      if (char !== char.toUpperCase()) {
        // char not upper
        return false;
      }
    }
  }
  return true;
}

console.log(isUppercase('t')); // false
console.log(isUppercase('T')); // true
console.log(isUppercase('Four Score')); // false
console.log(isUppercase('FOUR SCORE')); // true
console.log(isUppercase('4SCORE!')); // true
console.log(isUppercase('')); // true
