/*
Write a function that takes an array of integers
 between 0 and 19 and returns a new array sorted
  based on the English words for each number:
   zero, one, two, ... eighteen, nineteen.
 */

/* NOTES

** PROB:
- in : array of integers between 0 - 19
- out: return new array sorted based on english word for each number
- exp:
  - original numbers are sorted based on their english word value
  - return empty array if empty array input
- impl:
  - sorting alphabetically least to greatest: "eight" < "eleven"
  - dont mutate original

- ?
  - are we sorting alphabetically least to greatest? --yes
  - can i expect good input or should i validate
    - expect empty array or array of numbers with valid numbner range


** EXAMPLE:
-- valid input is sorted by english word
alphabeticNumberSort([4, 5, 8, 11, 14 ,15 ,18]) / [8, 18, 11, 15, 5, 4, 14,

"four", "five", "eight", "eleven", "fourteen", "fifteen", "eighteen"
-- "eight", "eighteen", "eleven", "fifteen", "five", "four", "fourteen"

-- empty array input
alphabeticNumberSort([]) // []


** BRAINSTORM:
- probaly have obj: with key being number 0-19 and
 value being the english word for number: numberAndWord
- make custom func for sort that compares
 numberAndWord[numa] -numberAndWord[numb]

- since input is 0 -19 we can just use array and use
 num as idx in array to get relevant word

** ALGO:
- copy input -- shallow bc just nums
- call sort of inputCopy with the custom func compareByNumberWord
- return copyInput should be sorted

*/

const NUMBER_WORDS_0_19 = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen',
];

function alphabeticNumberSort(array) {
  let arrayCopy = array.slice();
  arrayCopy.sort(compareByNumberWord);
  return arrayCopy;
}

function compareByNumberWord(numA, numB) {
  return NUMBER_WORDS_0_19[numA].localeCompare(NUMBER_WORDS_0_19[numB]);
}

let orignalInput = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
];
console.log(alphabeticNumberSort(orignalInput));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

// TEST nonmutating original
console.log(orignalInput); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]

console.log(alphabeticNumberSort([])); // []
