/*
A collection of spelling blocks has two letters per block,
 as shown in this list:

B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

This limits the words you can spell with the blocks
 to only those words that do not use both letters
  from any given block. You can also only use each block once.

Write a function that takes a word string as
 an argument and returns true if the word can be spelled
  using the set of blocks, false otherwise. You can consider
   the letters to be case-insensitive when you apply the rules.
 */

/* NOTES
PROB:
- in: word string
- out: returns bool
  - true if word can be spelled using the set of blocks
  - false otherwise
- exp:
  - consider the letters to be case-insensitive when you apply the rules.
  - can only use 1 of the letters in the block
  - only use each block once
-?:
   - do i need to follow the array structure of the spelling blocks:?
    - or i make my own structure?

EXAMPLES:
"BATCH" -> upper case word
matches blocks: [B:o, n:A, g:T, C:p, H:u] -> match true


"BaTCH" -> test case insensitivity
matches blocks: [B:o, n:A, g:T, C:p, H:u] -> match true

isBlockWord('BUTCH'); -- block would need to be reused     // false
[B:o, h:U, g:T, C:p, H:u X block already used]

isBlockWord('jest');  --lower case word and match     // true
[J:w, r:E, f:S , g:T ]


DATASTRUCTURE:
- need my building block list to easily identify what 2 letters are in box
  - list of strings : strings are the letter block -> "<letter1>:<letter2>"

BRAINSTORM:
- need to check each char in word for block match (caseinsensitve)
  - can only use block once if needed again then need to return false

  - maybe keep datastructure that store used letters: usedLetters
    - once block used update maybe array or string to have these letter combo
    -before finding block match check if letter is in usedLetters

-- how to extract letter block based on current letter?
  -  const letterBlocks = ["B:O", 'X:K', 'D:Q', 'C:P', 'N:A',
  'G:T', 'R:E', 'F:S', 'J:W', 'H:U',
  'V:I', 'L:Y', 'Z:M'
  ]
  --HELPER FUNC get letter block: for each element in
   letterBlocks if currentLetter in lettersblock
    then get that letter block and extract actual


ALGO:
- define empty string of used letters "": usedLetters
- for each char.toUpper() in word (use upper for caseinsensitvity)
 -- regular for loop to terminate early
  - check if letter is in usedLetters:
    - not: then retrieve the the letterBlock match -- Helperfunc
      - add letters to usedLetters
    - is: then return false -- cannot use block more than once

- if loop finished with no false return -> return true
*/

const LETTER_BLOCKS = [
  'B:O',
  'X:K',
  'D:Q',
  'C:P',
  'N:A',
  'G:T',
  'R:E',
  'F:S',
  'J:W',
  'H:U',
  'V:I',
  'L:Y',
  'Z:M',
];

function getLetterBlock(currentLetter) {
  // expects capital letter input -> else returns undefined
  return LETTER_BLOCKS.filter((letterBlock) =>
    letterBlock.includes(currentLetter),
  )[0];
}

function isBlockWord(word) {
  let usedLetters = '';

  for (let idx = 0; idx < word.length; idx += 1) {
    let currentLetter = word[idx].toUpperCase();
    if (usedLetters.includes(currentLetter)) {
      return false;
    }
    let letterBlock = getLetterBlock(currentLetter);
    usedLetters += letterBlock;
  }
  return true;
}

console.log(isBlockWord('BATCH')); // true
console.log(isBlockWord('BUTCH')); // false
console.log(isBlockWord('jest')); // true
console.log(isBlockWord('j')); // true
