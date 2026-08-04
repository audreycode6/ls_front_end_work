'use strict';
/*
Build a madlibs program that takes a text template as input,
plugs in a selection of randomized nouns, verbs, adjectives,
and adverbs into that text, and then returns it. You can build your
lists of nouns, verbs, adjectives, and adverbs directly into your program.
Your program should read this text and, for each line, place random words
of the appropriate types into the text and return the result.

The challenge of this program isn't just about writing your solution—it's about
choosing the structure of the text template. Choose the right way to structure
your template and this problem becomes much easier. Consequently,
this exercise is a bit more open-ended since the input is also
something that you'll be defining.

Note: The quotes in the example strings returned by the madlibs
function are only shown for emphasis. These quotes are not present
in the actual output strings. The words in quotes come from the list
of texts and it is the madlibs function that puts them in.
*/

/* NOTES:
Problem:
- in: template of text with missing text for input of
  adjectives, nouns, verbs, adverbs
- out: all the text + the input spaces filled out with random selection
   from corresponding word types [adjective, noun, verb, adverb]

- exp:
  - decide what structure to use for template in order to
  efficiently add in corresponding wordType
- imp:
  - template has normal text AND needs spot labeled for appropiate input
  - need to distinguish normal text from input spot
  - need to distinguish what type of input spot
  - need to randomly insert corresponding wordType form wordType lists
  (adj, adv...)

- Brainstorm:
  - need a way to retrieve random word from replacementWordCategory
    - helper func: take in replacementWordCategory
      - return random word from that list

  - need a way to identify input sections within the template
    - have multiple inputTypes: (adj, adverb, noun, ...)
    - will need to replace input within template with relevant randomword
      - maybe use pattern within template:
        - template could be a string
        - split string by whitespace, arrayOfStrings ->
         check each string in template
          - if string matches patten: (e.g input:<wordType> -> input:...)
            - could use regex and reference list of possible wordTypes
              scalable validWordTypes = ["adjective", "adverb", "noun", "verb"]
          - identify wordType
          - get randomReplacementWord -- helperfunc
          - can use currentIndex to remove input string and add new word
            - reassign current string array [currentIndex] to random word

- Example:

let myTemplate = "The input:adjective brown input:noun"
" input:abverb input:verb the input:adjective yellow"
" input:noun, who input:abverb input:verb "
"his input:noun and looks around."

- Data structure:
  - use regex pattern to match
  if (regexPattern.match(currentWord))

    regexPattern: "input:..."" -> the ... will be any of the words in validWordCategory
    VALID_WORD_CATEGORY = ["adjective", "adverb", "noun", "verb"]
    - can i use javascript within regexPattern: VALID_WORD_CATEGORY.join("|")
    const regexPattern = new RegExp(`\\binput:(${VALID_WORD_CATEGORY.join("|")})\\b`);
    currentWord.match(regexPatten) -> true if match; else false

  - need to identify the input type:
    -helper func: pass in regexPatternMatch and return inputType
      ex: "input:noun" -> "noun"
      - split by ":"
      - access 2nd elem from the split and that will be the inputType

  - randomly grab a word from a list
    helper func: take in regexPatternMatch and return random word from
    corresponding wordReplacements list
    - the wordReplacements will be in list form
      adjectives = [quick, lazy, sleepy, noisy, hungry]
      ...
    - generate random number 0 - (len of corresponidngWordList - 1) -- helper func
      Math.floor(Math.random(wordReplacements.length)) -- TODO test
      - using floor makes it within range (stop before len bc 0 index)


- Algorithm:

// split template (string) by whitespace

// iterate through (trakcing currentWord and idx)

// if word matches pattern -- helper func (return bool if match)
  // extract inputType -- helper func
  //  (return string of input type when passed in patternMatch)
  // get randomWordMatch -- helperfunc return random word when passed inputType
    // get random word  -- random number generator helper func
    // return random number that will be used (as index) to extract
    //  a random word from inputList


  // replace word at currentIdx with newReplacmeentWord

// join string at end by whitespace and return the filled out template

 */

const VALID_PART_OF_SPEECH_AND_WORDS = {
  adjective: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
  adverb: ['easily', 'lazily', 'noisily', 'excitedly'],
  noun: ['fox', 'dog', 'head', 'leg', 'tail', 'cat'],
  verb: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
};

function madlibs(template) {
  let wordsInTemplate = template.split(' ');

  wordsInTemplate.forEach((word, idx) => {
    if (isInputPatternMatch(word)) {
      wordsInTemplate[idx] = getRandomWordMatch(word);
    }
  });
  return wordsInTemplate.join(' ');
}

function getRandomWordMatch(input) {
  const [partOfSpeech, ending] = getPartOfSpeechAndPotentialEnding(input);
  const partOfSpeechWords = VALID_PART_OF_SPEECH_AND_WORDS[partOfSpeech];
  const randomIdx = getRandomNumber0toMax(partOfSpeechWords.length - 1);

  return partOfSpeechWords[randomIdx] + ending;
}

function getRandomNumber0toMax(maxNumber) {
  return Math.floor(Math.random() * (maxNumber + 1));
}

function isInputPatternMatch(wordToCheck) {
  /*regexPattern returns true if wordToCheck matches pattern:
   - starts with: "input:"
   - and is followed by one of the VALID_PART_OF_SPEECH_AND_WORDS keys
  */
  const regexPattern = new RegExp(
    `\\binput:(${Object.keys(VALID_PART_OF_SPEECH_AND_WORDS).join('|')})\\b`,
  );
  return regexPattern.test(wordToCheck);
}

function getPartOfSpeechAndPotentialEnding(input) {
  /*
  regexPattern matches by 3 parts:
   - "input:"
   - "<one of the VALID_PART_OF_SPEECH_AND_WORDS keys>""
   - "<any remaining characters>"

  e.g  "input:adjective", "input:verb,", "input:noun's"
  */
  const regexPattern = new RegExp(
    `^input:(${Object.keys(VALID_PART_OF_SPEECH_AND_WORDS).join('|')})(.*)$`,
  );
  const [, partOfSpeech, ending] = input.match(regexPattern);
  return [partOfSpeech, ending];
}

const myTemplate =
  `The input:adjective brown input:noun input:adverb` +
  ` input:verb the input:adjective yellow input:noun, who input:adverb` +
  ` input:verb his input:noun and looks around.`;
const myTemplate2 = `The input:noun input:adverb the input:noun's input:noun.`;

console.log(`BEFORE: ${myTemplate}`);
console.log(`AFTER:  ${madlibs(myTemplate)}`);
// EXAMPLE OUTPUT:
// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.

console.log(`\nBEFORE 2: ${myTemplate2}`);
console.log(`AFTER 2:  ${madlibs(myTemplate2)}`);
// EXAMPLE OUTPUT:
//The "fox" "bites" the "dog"'s "tail".
