/*
Write a function that takes an array of words and
 returns an array of groups, where each group
 contains words that are anagrams of each other.
 */

/*NOTES:
PROBLEM:
- in: array of words
- out: array with array elems -> that contain anagram groupings
- exp:
  - have same chars with same occurences
- imp:
  - if empty array input return empty array
  - case insensitive when checking for anagram: "Ana" === "ANA"
  - exact match only not if it has enough letters: "live" !=== "believe"


BRAINSTORM

isAnagram function that compares 2 words and returns bool
- true if anagrams
  - maybe have array of all its chars and sort and compare if === to other ?
  - maybe obj with char and counts and compare if they
   have same keys and same values

- maybe have array to track words that have been grouped
 in anagram and only check word for anagram if not in that group?

- create array to track words already processed: usedTracker

- for each word in array
  - if word not in the usedTracker:
    - start a new array to track anagram group: currentGroup
      - ends up with just the word if no anagrams

    - find all other words if they are anagram
      - slice from current elem to returns
        -- previous ones will have already been checked for anagram
      - if word is anagram add to that new array: currentGroup


EXAMPLE

['demo', 'none', 'tied', 'evil', 'dome', 'mode', 'live',
 'edit', 'tide', 'neon'] // [['demo', 'dome', 'mode'],
 // ['none', 'neon'], ['tied', 'edit', 'tide'], ['evil', 'live']]

anagramGroups = []
usedTracker = [];
forEach word, idx in inputArray
  - check if in usedTracker
    - demo -> no start newArray with word -> [demo]
    - none -> no -> currentArray = [none]
    - tied -> no -> [tied]
    - evil -> no -> [evil]
    - dome -> yes skip
    - mode -> yes skip
    - live -> yes skip
    - edit -> yes skip
    - tide -> yes skip
    - neon -> yes skip
  - build array of other words wordOptions: -- helperfunc getWordOptions
    word.slice(idx) and only words that dont exist in usedTracker
  - maybe helper func to return list of anagram words
    getAnagrams(idx, inputArray, wordOptions)
      - those words get merged into existing list currentArray

    - add currentArray to anagramGroups

- return anagramGroups


*/

function groupAnagrams(array) {
  let anagramGroups = array.reduce((groupsObj, word) => {
    // get key: sorted word lowercase
    let key = [...word.toLowerCase()].sort().join('');
    // add to groupsObj if doesnt exist then empty array else currentValue
    groupsObj[key] = groupsObj[key] || [];
    // exists reassign to current value or create and assign to empty array
    groupsObj[key].push(word); // add word to value: array of matches
    return groupsObj;
  }, {});
  console.log(Object.values(anagramGroups));
  return Object.values(anagramGroups);
}

groupAnagrams([
  'demo',
  'none',
  'tied',
  'evil',
  'dome',
  'mode',
  'live',
  'edit',
  'tide',
  'neon',
]);
// [
// ['demo', 'dome', 'mode'],
// ['none', 'neon'],
// ['tied', 'edit', 'tide'],
// ['evil', 'live']
// ]
groupAnagrams([
  'demo',
  'none',
  'tied',
  'evil',
  'Dome',
  'mode',
  'live',
  'edit',
  'tide',
  'neon',
]);
// [
//   ['demo', 'Dome', 'mode'],
//   ['none', 'neon'],
//   ['tied', 'edit', 'tide'],
//   ['evil', 'live'],
// ];
groupAnagrams([]);
// []
groupAnagrams(['demo', 'demo']);
