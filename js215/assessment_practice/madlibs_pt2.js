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

*/

const VALID_PART_OF_SPEECH_AND_WORDS = {
  adjective: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
  adverb: ['easily', 'lazily', 'noisily', 'excitedly'],
  noun: ['fox', 'dog', 'head', 'leg', 'tail', 'cat'],
  verb: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
};

function madlibs(template) {
  const regexForInput = /!{([a-z]+)}/g; // matches format: "!{" + <partOfSpeech> + "}"
  return template.replace(regexForInput, getRandomReplacementWord);
}

function getRandomNumber0toMax(maxNumber) {
  return Math.floor(Math.random() * (maxNumber + 1));
}

function getRandomReplacementWord(match, partOfSpeech) {
  /* callback for template.replace(regexForInput, ..):
     regexForInput : /!{([a-z]+)}/g
     regexForInput results get passed as args:
      - match : whole matching string
      - partOfSpeech :capture group
  */
  const partOfSpeechWords = VALID_PART_OF_SPEECH_AND_WORDS[partOfSpeech];
  const randomIdx = getRandomNumber0toMax(partOfSpeechWords.length - 1);
  return partOfSpeechWords[randomIdx];
}

const myNewTemplate =
  `The !{adjective} brown !{noun} !{adverb}` +
  ` !{verb} the !{adjective} yellow !{noun}, who !{adverb}` +
  ` !{verb} his !{noun} and looks around.`;
const myNewTemplate2 = `The !{noun} !{adverb} the !{noun}'s !{noun}.`;

console.log(madlibs(myNewTemplate));
console.log(madlibs(myNewTemplate2));
