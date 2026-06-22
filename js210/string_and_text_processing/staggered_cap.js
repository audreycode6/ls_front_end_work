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

function staggeredCase1(string) {
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

console.log(staggeredCase1('I Love Launch School!')); // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase1('ALL_CAPS')); // "AlL_CaPs"
console.log(staggeredCase1('ignore 77 the 4444 numbers')); // "IgNoRe 77 ThE 4444 nUmBeRs"

/**
Staggered Caps Part 2
Modify the function from the previous exercise so
that it ignores non-alphabetic characters when determining
whether a letter should be upper or lower case. Non-alphabetic
characters should still be included in the output string, but
should not be counted when determining the appropriate case.
*/

function staggeredCase2(string) {
  let newStrings = '';
  let upper = true;

  [...string].forEach((char) => {
    if (/^[A-Za-z]$/i.test(char)) {
      //alphabetic char
      if (upper) {
        char = char.toUpperCase();
        upper = false;
      } else {
        char = char.toLowerCase();
        upper = true;
      }
    }
    newStrings += char;
  });

  return newStrings;
}

console.log(staggeredCase2('I Love Launch School!')); // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase2('ALL CAPS')); // "AlL cApS"
console.log(staggeredCase2('ignore 77 the 444 numbers')); // "IgNoRe 77 ThE 444 nUmBeRs"
