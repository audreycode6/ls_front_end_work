/*
Write a function that takes an array of strings and returns a new array
 sorted by string length, shortest first. Strings of the same length
  should be in alphabetical order. Do not mutate the input array.
 */

/*
NOTES:
** PROB
- in: array of strings
- out:
  - return new array sorted by string length (shortest to longest)
   -- if strings of same length short by alphabetical order;
  - if empty array return empty array
- exp:
  - do not mutate input
  - sort first by string len (shortest to longest) then alphabetical
- ?:
  - will input always be array of strings or should i validate input
    -- expect valid array input and if elements it would be stirng
     -- no need to validate
  - if empty array what to return?
    -- empty array

**EXAMPLES:
-- has some same len stringd --need to also sort alphabetically
sortStrings(['banana', 'kiwi', 'fig', 'apple', 'date']);
// ['fig', 'date', 'kiwi', 'apple', 'banana']

-- empty array passed input
sortStrings([]); // []

-- test original is not mutated

let array = ['bb', 'aa', 'c']
console.lg(sortStrings(array)); // ['c', 'aa', 'bb']
console.log(array); // ['bb', 'aa', 'c']

** BRAINSTORM
- use sort with custom func that compares string len


** ALGO
- make copy of input -- structuredClone
- validate not empty // TODO test if sort would just return empty array
- sort inputCopy with custome func: sortByLenThenAlphabetical
- return result:

 */

function sortStrings(array) {
  let sortedArray = structuredClone(array);

  sortedArray.sort(sortByLenThenAlphabetical);
  return sortedArray;
}

function sortByLenThenAlphabetical(a, b) {
  let result = a.length - b.length;
  if (result === 0) {
    return a.localeCompare(b, undefined, { sensitivity: 'base' });
  }
  return result;
}

console.log(sortStrings(['banana', 'kiwi', 'Fig', 'fig', 'apple', 'date']));
// ['fig', "Fig", 'date', 'kiwi', 'apple', 'banana']

console.log(sortStrings(['bb', 'aa', 'c']));
// ['c', 'aa', 'bb']

// -- empty array passed input
console.log(sortStrings([])); // []

// test non mutating original
let array = ['bb', 'aa', 'c'];
console.log(sortStrings(array)); // ['c', 'aa', 'bb']
console.log(array); // ['bb', 'aa', 'c']
