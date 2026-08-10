/*
Write a function that takes a string of words
and returns an object showing how many words of
each length appear. Punctuation counts as part
of the word... then write a second version where
letters are counted case-insensitively and
non-letter characters are excluded from length.
*/

/* NOTES
PROB
- in: string of words
- out: return obj showing how mant owrds of each length appear
  {} keys -> string of word len
   values -> number of occurences
   -- empty obj if empty string input

- exp:
  - need 2 versions
    - verison 1: letters case sensitive and word can include punc
    - version 2: letters are counted
    case-insensitively & non letter chars excluded
      - need to extract nonletterchars from word

- imp:
- ?
  - why does case insensitively matter if we are just comparing by len?
  - can i expect valid input: string of words
    -- YES but can also be empty string
  - will words be seperated by single whitespace -- YES
  - does the order of  keys in the obj returned matter?
    -- NO

  - are these the only punc i should be exlcuding  [.,?!']
    -- NO exclude all nonletters


BRAINSTORM

- extract words in string: split(" ") -- split by single whitespace
- v1: get len of each word and that is key -- build obj
- v2: need to replace any punc with empty string -> replace()
  use regex to match nonletters: TODO test regex

  \[^a-z]\ig -> console.log("w2H.?at".replace(/[^a-z]/ig, "")) // "wHat"


EXAMPLES
-- has multiple words of same len with some including punc
v1:
  string: 'Four score and seven.'
  words -> ['Four', 'score', 'and', 'seven']
  -- empty obj
  -- get len of currWord and add to its value in obj

  -- maybe get all lens and put in array

  word lens: [4, 5, 3, 5]
  build obj for each num


-- has words with punc -- v2 needs to have different len

-- empty string

--
build obj for each num --maybe use reduce
  - if num doesnt alreayd exist in obj add with value 0
  - add 1 to the keys value

lenArray.reduce((obj, currentLen) => {
  if (!(currentLen in obj)) {
    obj[currentLen] = 0
  }
    obj[currentLen] += 1;
  return obj
  }, {})

ALGO:
--  build 2 wordSizes funcs: for v1 and v2
  - v2: for each word in stirng need to remove
   nonletters -- apply removeNonLetters to each word

- take in stirng of words
- split by whitespace: arrayOfWords
  - v2 use map to apply removeNonLetters

- get len of each word and store in array

- build obj from lenArray -> buildNumCountObj
  
*/

const MATCH_NON_LETTERS_REGEX = /[^a-z]/gi;

function wordSizes(string) {
  if (string.length === 0) {
    return {};
  }
  let words = string.split(' ');
  let wordLengths = getWordLengths(words);

  return buildNumCountObj(wordLengths);
}

function wordSizes2(string) {
  let words = string.split(' ');
  // v2 transform words to words with nonletters removed
  words = words.map((word) => removeNonLetters(word));
  let wordLengths = getWordLengths(words);

  return buildNumCountObj(wordLengths);
}

function getWordLengths(words) {
  let wordLengths = [];
  words.forEach((word) => {
    const wordLength = word.length;
    if (wordLength > 0) {
      wordLengths.push(wordLength);
    }
  });
  return wordLengths;
}

function removeNonLetters(string) {
  // FOR v2
  return string.replace(MATCH_NON_LETTERS_REGEX, '');
}

function buildNumCountObj(arrayOfLengths) {
  return arrayOfLengths.reduce((obj, currentLen) => {
    obj[currentLen] = (obj[currentLen] || 0) + 1;
    return obj;
  }, {});
}

console.log(wordSizes('Four score and seven.'));
// version 1: { "3": 1, "4": 1, "5": 1, "6":1 }
console.log(wordSizes2('Four score and seven.'));
// version 2: { "3": 1, "4": 1, "5": 2 }

console.log(wordSizes("What's up doc?"));
// version 1: { "6": 1, "2": 1, "4": 1 }
console.log(wordSizes2("What's up doc?"));
// version 2: { "5": 1, "2": 1, "3": 1 }

console.log(wordSizes('')); // {}
console.log(wordSizes2('')); // {}
