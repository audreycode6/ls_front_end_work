/*
Write a function that takes a string and returns an object
containing three properties: one representing the number
of characters in the string that are lowercase letters,
one representing the number of characters that are uppercase
letters, and one representing the number of characters that
are neither.
*/

'use strict';

function letterCaseCount(string) {
  let caseCount = {
    lowercase: 0,
    uppercase: 0,
    neither: 0,
  };

  [...string].forEach((char) => {
    if (/^[A-Za-z]$/i.test(char)) {
      // is alphabetical char
      if (char === char.toLowerCase()) {
        caseCount['lowercase'] += 1;
      } else {
        caseCount['uppercase'] += 1;
      }
    } else {
      // is non-alphabetical char
      caseCount['neither'] += 1;
    }
  });

  return caseCount;
}

console.log(letterCaseCount('abCdef 123')); // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef')); // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123')); // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount('')); // { lowercase: 0, uppercase: 0, neither: 0 }
