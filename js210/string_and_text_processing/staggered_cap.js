/*
Staggered Caps Part 1
Write a function that takes a string as an
argument and returns that string with a staggered
capitalization scheme. Every other character, starting
from the first, should be capitalized and should be
followed by a lowercase or non-alphabetic character.
Non-alphabetic characters should not be changed, but
should be counted as characters for determining when
to switch between upper and lower case.
*/

function staggeredCase(string) {
  let newStrings = [...string].map((char, idx) => {
    if (/^[A-Za-z]$/i.test(char)) {
      //alphabetic char
      if (idx % 2 === 0) {
        char = char.toUpperCase();
      } else {
        char = char.toLowerCase();
      }
    }

    return char;
  });

  return newStrings.join('');
}

console.log(staggeredCase('I Love Launch School!')); // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS')); // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers')); // "IgNoRe 77 ThE 4444 nUmBeRs"
