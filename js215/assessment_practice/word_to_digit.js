'use strict';

/*

Write a function that takes a sentence string as an argument
and returns that string with every occurrence of a "number word"
— 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'
— converted to its corresponding digit character.
*/

/*PEDAC:
P:
- in: sentence string
- out: string with every digit word (zero - nine)
replaced with its corresponding char
- ex:
  - if number word encountered replace it in string with its digit
  - leave everything else the same
- im:
  - can have a symbol attached to word but not other word chars A-Z
    -- i.e end of sentence (four.) or comma (four, )
    -- not including words with other letters around the
    numberword: "phone" -> one

- ?:
  - is it only going to be those 10 words in isolation
  or can it be any numeric word: e.g ninety-three? -> ninety-3 (?)
    -- ASSUME interviewer said only those 10 words not other numeric words
  - do i return string unchanged if no number words?
    -- ASSUME interviewer said just return it unchanged

  - Do i exclude words that contain number words but isnt numeric word:
  "Lone" -> one -- Assume interviewer said yes exclude if part of a larger word
  - can i assume words are split by a single whitespace?
    -- assumer interviewer said yes

E:
-- sentence with number words
wordToDigit('Please call me at five five five one two three four. Thanks.');
//  "Please call me at 5 5 5 1 2 3 4. Thanks."

-- sentence has punctuations/ symbols attached to numberword
wordToDigit("One: is it ok? Two!") // "1: is it ok? 2!"

-- sentence missing number word: remain unchanged
wordToDigit("hey im forty"); // "hey im forty"

-- sentence includes non specified number word and numberword
wordToDigit("I'm actually forty-three.") // "I'm actually forty-3."

--case insensitive
wordToDigit("One one fouR"); // "1 1 4"

-- exclude words containing numberword:
wordToDigit("I am not lonely. I have four friends.")
// "I am not lonely. I have 4 friends"

D:
- extract words from sentence to check if it is numberword match
  - extract with split by whitespace

- have array of the number words to check against: all lower case

- convert word to same case as list of number words before comparing

- first check if a number word is inside the word before stripping more:
  - if contains number word:
    - intialize empty string `newWord` to build alphabetic words
    - for char in word:
      - if char is non alphabetical char add to sentence
        - check that newWord is not empty   TODO helper func
          - if not empty then word was created
            - check if word is numberword
              (yes, replace and add digit to sentence)
              (no, add newWord to sentence)
              (reassign newWord to emty string and
              continue process until no more char)
      - if alphabetic char add char to newWord
      - if end of chars then check newWord -- same helper func
        if needs to be replaced with digit or just added to sentece


  - else (word doesnt contain number word): add word to sentence


  -- use indexOf to extract digit to corresponding numberword

A:
- intialize numberWords array:
['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

- split words up by whitespace to get words in sentnece: words
sentence.split(" ");

- intialize empty string to build new sentence

- for each word in words:
  - check if word contains numberword : helper func
    - for each numberWord in numberWords
    if numberword in currentWord return true
    - else if by end of iteration return false

  - if doesnt contain numberowrd, add word unchanged to sentence

  - if does contain numberword: helper func
  build new word from chars
  while alphabeticChar build alphabeticString
  if char is not alphabetic  OR char is last in word
    - check if NumberWORDS array includes alphabeticString lowercased
      - yes : replace current alphabeticStirng with digit:
      numberWords.indexOf(mathcingNumberWord)
      - no (no match): add alphabeticStirng sentence
      - reinitalize newword to empty string


*/

const NUMBER_WORDS = [
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
];

function wordToDigit(sentence) {
  let words = sentence.split(' ');
  let newSentence = [];

  words.forEach((word) => {
    if (containsNumberWord(word)) {
      let newWord = parseAndUpdateWord(word);
      newSentence.push(newWord);
    } else {
      newSentence.push(word);
    }
  });
  return newSentence.join(' ');
}

function containsNumberWord(word) {
  for (let i = 0; i < NUMBER_WORDS.length; i += 1) {
    let currentNumberWord = NUMBER_WORDS[i];
    if (word.toLowerCase().includes(currentNumberWord)) {
      return true;
    }
  }
  return false;
}

function parseAndUpdateWord(word) {
  // take in word and return new word
  //  if had number word it will be replaced with digit
  //  else returns unchanged

  let newWord = '';
  let alphabeticWord = '';
  let maxIdx = word.length - 1;

  [...word].forEach((char, idx) => {
    if (idx === maxIdx) {
      if (/[A-Za-z]/.test(char)) {
        alphabeticWord += char;
        if (isNumberWord(alphabeticWord)) {
          newWord += getDigitForm(alphabeticWord);
        } else {
          newWord += alphabeticWord;
        }
      } else {
        if (isNumberWord(alphabeticWord)) {
          newWord += getDigitForm(alphabeticWord);
        } else {
          newWord += alphabeticWord;
        }

        newWord += char;
      }
    } else {
      // not last char
      if (/[A-Za-z]/.test(char)) {
        alphabeticWord += char;
      } else {
        if (isNumberWord(alphabeticWord)) {
          newWord += getDigitForm(alphabeticWord);
        } else {
          newWord += alphabeticWord;
        }
        alphabeticWord = '';
        newWord += char;
      }
    }
  });

  return newWord;
}

function getDigitForm(word) {
  return String(NUMBER_WORDS.indexOf(word.toLowerCase()));
}

function isNumberWord(word) {
  return NUMBER_WORDS.includes(word.toLowerCase());
}

console.log(
  wordToDigit('Please call me at five five five one two three four. Thanks.'),
); // "Please call me at 5 5 5 1 2 3 4. Thanks."

// -- sentence has punctuations/ symbols attached to numberword
console.log(wordToDigit('One: is it ok? Two!')); // "1: is it ok? 2!"

// -- sentence missing number word: remain unchanged
console.log(wordToDigit('hey im forty')); // "hey im forty"

// -- sentence includes non specified number word and numberword
console.log(wordToDigit("I'm actually forty-three.")); // "I'm actually forty-3."

// --case insensitive
console.log(wordToDigit('One one fouR')); // "1 1 4"

// -- exclude words containing numberword:
console.log(wordToDigit('I am not lonely. I have four friends.'));
// "I am not lonely. I have 4 friends"
