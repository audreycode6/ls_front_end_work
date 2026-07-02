/*
Write a function that takes a string and returns an object containing
three properties: one representing the number of characters in the string
that are lowercase letters, one representing the number of characters that
are uppercase letters, and one representing the number of characters that
are neither.
 */
'use strict';

function letterCaseCount(string) {
  const REGEX_LOWER_ALPHABETIC_CHAR = /[a-z]/;
  const REGEX_UPPER_ALPHABETIC_CHAR = /[A-Z]/;

  let lowercaseCount = 0;
  let uppercaseCount = 0;
  let neitherCount = 0;

  [...string].forEach((char) => {
    if (REGEX_LOWER_ALPHABETIC_CHAR.test(char)) {
      lowercaseCount += 1;
    } else if (REGEX_UPPER_ALPHABETIC_CHAR.test(char)) {
      uppercaseCount += 1;
    } else neitherCount += 1;
  });

  return {
    lowercase: lowercaseCount,
    uppercase: uppercaseCount,
    neither: neitherCount,
  };
}

console.log(letterCaseCount('abCdef 123')); // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef')); // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123')); // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount('')); // { lowercase: 0, uppercase: 0, neither: 0 }
