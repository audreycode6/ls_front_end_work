/*
Write a function that takes a string argument and returns
true if all of the alphabetic characters inside the string
are uppercase; otherwise, return false. Ignore characters
that are not alphabetic.
*/

function isUppercase(string) {
  const REGEX_IS_ALPHABETIC_CASE_INSENSITIVE = /^[a-z]$/i;

  const alphabeticCharacters = [...string].filter((char) =>
    REGEX_IS_ALPHABETIC_CASE_INSENSITIVE.test(char),
  );

  return alphabeticCharacters.every((char) => {
    return char === char.toUpperCase();
  });
}

isUppercase('t'); // false
isUppercase('T'); // true
isUppercase('Four Score'); // false
isUppercase('FOUR SCORE'); // true
isUppercase('4SCORE!'); // true
isUppercase(''); // true
