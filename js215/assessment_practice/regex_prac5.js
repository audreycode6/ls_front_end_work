'use strict';
/*
Write a method that returns true if its argument
 looks like a URL, false if it does not.
 */

function isUrl(string) {
  const patt = /^https?:\/\/\S+\.\S+$/;
  let result = string.search(patt);
  // console.log(result !== -1);
  return result !== -1;
}

// isUrl('https://launchschool.com'); // -> true
// isUrl('http://example.com'); // -> true
// isUrl('https://example.com hello'); // -> false
// isUrl('   https://example.com'); // -> false

/*
Write a method that returns all of the fields in a haphazardly
formatted string. A variety of spaces, tabs, and commas separate
the fields, with possibly multiple occurrences of each delimiter
 */

function fields(string) {
  // match all -- use global g flag and make lazy (?) to grab all
  // actually use split with regex pattern
  const patt = /[, \t]+/;
  const strings = string.split(patt);
  // console.log(strings);
  return strings;
}

// fields('Pete,201,Student'); // ['Pete', '201', 'Student']
// fields('Pete \t 201   ,  TA'); // ['Pete', '201', 'TA']
// fields('Pete \t 201'); // ['Pete', '201']
// fields('Pete \n 201'); // ['Pete', '\n', '201']

/*
Write a method that changes the first arithmetic operator (+, -, *, /)
in a string to a '?' and returns the resulting string.
Don't modify the original string.
*/

function mysteryMath(string) {
  const patt = /\+|-|\*|\//; // OR /[+\-*\/]/;
  return string.replace(patt, '?');
  // use replace without global will just change first
}

// console.log(mysteryMath('4 + 3 - 5 = 2'));
// '4 ? 3 - 5 = 2'
// console.log(mysteryMath('(4 * 3 + 2) / 7 - 1 = 1'));
// '(4 ? 3 + 2) / 7 - 1 = 1'

/*
Write a method that changes every arithmetic operator
 (+, -, *, /) to a '?' and returns the resulting string.
  Don't modify the original string.
 */

function mysteriousMath(string) {
  const patt = /[+\-*\/]/g;
  return string.replace(patt, '?');
}

// console.log(mysteriousMath('4 + 3 - 5 = 2'));
// '4 ? 3 ? 5 = 2'
// console.log(mysteriousMath('(4 * 3 + 2) / 7 - 1 = 1'));
// '(4 ? 3 ? 2) ? 7 ? 1 = 1'

/*
Write a method that changes the first occurrence
 of the word apple, blueberry, or cherry in a string to danish.
 */

function danish(string) {
  const patt = /\b(apple|blueberry|cherry)\b/;
  console.log(string.replace(patt, 'danish'));
}

danish('An apple a day keeps the doctor away');
// -> 'An danish a day keeps the doctor away'

danish('My favorite is blueberry pie');
// -> 'My favorite is danish pie'

danish('The cherry of my eye');
// -> 'The danish of my eye'

danish('apple. cherry. blueberry.');
// -> 'danish. cherry. blueberry.'

danish('I love pineapple');
// -> 'I love pineapple'
