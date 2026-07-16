/*
Write a function that takes a two-dimensional array as the argument and
turns it into a flat array with all duplicated elements removed. Treat
numbers and number strings (e.g., 1 and '1') as duplicates, and
keep the one that comes first in the result.
 */

/*PEDAC:
P:
- in: 2 dimensional array (array with array elements)
- out: single array with all "duplicated elems" removed, empty array if no elems
- e:
  - build new array with all duplicated elems removed
  - "duplicated elems":
    - numbers and number strings (e.g., 1 and '1') as duplicates, and
    keep the one that comes first in the result.
- i:
  - build new array from unique elements in order of appearance in input arg
   i.e start from first array element then look at next array element
   - return empty
- ?:
  - re -- "keep the one that comes first in the result.",
    does the order start from first elem (array) in input arg
  - re -- "two-dimensional array", does that mean it will always
      only have 1 array containing only 2 elements which are arrays?
      Or can there be more than 2 elements or elements other than array?
  - will the inner arrays always only ever have primitive values?
    - if not, do their inner obj elements each
      indivually count as an element viable for duplication?
      e.g [
      [[1, 2, 3], 3, 4],
      [{a : "foo", "b" : "bar"}, 2, [12, 34]]
      ] -> [1, 2, 3], 3, 4, {a : "foo", "b" : "bar"}, 2, [12, 34]?
  - is duplicate in regards to each inner array to one another?
      e.g [1, 2, 3, 3] vs ["bye", "hi"],
      does the dupe 3 count as duplicate
      or just if it is duplicated in other array?
  - are all elems that have the same string value to be treated equal?
    - e.g true boolean value and "true" string
    - undefined value and "undefined" string
  - OR is it just tied to loose equality:
    does a falsy eval mean all falsy values are to be treated as duplicates?
      - "", 0, false, null, undefined, NaN?
  - does case matter for duplicates?: e.g "A" and "a"?


E:
-- has empty array input:
flattenAndUnique([]) -> []

-- has 2 elems that are arrays containing number or string values,
  with a string and number type duplicate
flattenAndUnique([[1, 2, 3], ['3', 4, 5, 'a']]) -> [1, 2, 3, 4, 5, 'a']

-- has only 1 array
flattenAndUnique([1, 2, "3", "45"]) -> [] empty array for invalid input types

-- has 3 arrays
flattenAndUnique([[1, 2, 3], ['3', 4, 5, 'a'], ['3', 10, 9, 'ab']])
-> [1, 2, 3, 4, 5, 'a', 10, 9, 'ab'] returns flat array with dupes removed

-- has some arrays and some no array
flattenAndUnique([[1, 2, 3], ['3', 4, 5, 'a'], "hello"])
-> [], log invalid input

-- has 2 elems that are arrays containing number or string values,
 with duplicate string values that differ in case
flattenAndUnique([[1, 2, "a"], ['3', 4, 5, 'A']]) -> [1, 2, "a", "3", 4, 5 "A"]
  case matters : "a" != "A"

-- one of the array elements has dupes itself
flattenAndUnique([[1, 2, 3, 3], ['3', 4, 5, 'a']]) -> [1, 2, 3, 4, 5, 'a']
 assuming : doesnt matter where it happens

-- order matters of what dupe is kept:
flattenAndUnique([[1, 2, "3"], [3, 4, 5, 'a']]) -> [1, 2, '3', 4, 5, 'a']

--  values count as duplicate if their string value are ===
  e.g is dupe: true, "true"
  e.g not dupe: 0, false

flattenAndUnique([[true, 2, "3", false], ["true", 0, 4, 5, 'a']])
-> [true, 2, "3", false, 0, 4, 5, 'a']


D:
- identify duplicates:
  - add all unique elements from order of elements
   (array1 elems, then array2 elems ...)
    - unique -> loose equality:
    - some() method tests whether at least one element in
     the array passes the test implemented by your provided function.
      By passing a callback with the loose equality operator (==),
       JavaScript will perform type coercion.

    - maybe everytime we check element for dupe
    compare elem against every value in uniqueArr
    using some to check if element is match (dupe)
     -- if never returns true during loop over uniqueElems
     than it is not a dupe and gets added to uniqueArr
     OR - convert both to string when comparing and if equal in value keep(?)

- helper func: isDuplicate(elemToCheck, arrayToCheckAgainst)
  -> takes in elem to check and array of values to check against
  -> iterates through arrayToCheckAgainst and pass
  each elem in arrayToCheckAgainst with the elemToCheck to
  arr.some(elem => String(elem) == String(elemToCheck))
  -> returns bool of if dupe is or isnt found

  - use to build array of uniqueArr one elem at a time


A:
- define empty array to hold results: uniqueArray
- iterate over every elem (arrayElem) in twoDimensionalArray
  - iterate over every elem (value) with arrayElem
  - if ( uniqueArray.length === 0) or if (!isDuplicate(elem, uniqueArray))
    - add elem to uniqueArray
  - else is duplicate continue

- return uniqueArray by end of iterating over each arrays elems
within twoDimensionalArray

 */

function flattenAndUnique(twoDimensionalArray) {
  let uniqueElements = [];
  if (
    // valid input
    twoDimensionalArray.length > 0 &&
    hasOnlyArrayElements(twoDimensionalArray)
  ) {
    twoDimensionalArray.forEach((arrayElem) => {
      arrayElem.forEach((elem) => {
        if (uniqueElements.length === 0 || !isDuplicate(elem, uniqueElements)) {
          uniqueElements.push(elem);
        }
      });
    });
  } else console.log('  Invalid input data.');

  return uniqueElements;
}

function isDuplicate(elemToCheck, arrayToCheckAgainst) {
  for (let idx = 0; idx < arrayToCheckAgainst.length; idx += 1) {
    let currentElemToCheckAgainst = arrayToCheckAgainst[idx];
    if (String(elemToCheck) === String(currentElemToCheckAgainst)) {
      return true;
    }
  }
  return false;
}

function hasOnlyArrayElements(array) {
  return array.every((elem) => Array.isArray(elem));
}

console.log(flattenAndUnique([])); // []

console.log(
  flattenAndUnique([
    [1, 2, 3],
    ['3', 4, 5, 'a'],
  ]),
); // [1, 2, 3, 4, 5, 'a']

console.log(flattenAndUnique([1, 2, '3', '45'])); // [], logs invalid input

console.log(
  flattenAndUnique([
    [1, 2, 3],
    ['3', 4, 5, 'a'],
    ['3', 10, 9, 'ab'],
  ]),
);
// -> [1, 2, 3, 4, 5, 'a', 10, 9, 'ab'] more than 2 arrays inside works

// -- has some arrays and some no array
console.log(flattenAndUnique([[1, 2, 3], ['3', 4, 5, 'a'], 'hello']));
// -> [], log invalid input

// -- has 2 elems that are arrays containing number or string values,
// with duplicate string values that differ in case
console.log(
  flattenAndUnique([
    [1, 2, 'a'],
    ['3', 4, 5, 'A'],
  ]),
);
// -> [1, 2, "a", "3", 4, 5 "A"] case matters : "a" != "A"

//-- one of the array elements has dupes itself
console.log(
  flattenAndUnique([
    [1, 2, 3, 3],
    ['3', 4, 5, 'a'],
  ]),
);
// -> [1, 2, 3, 4, 5, 'a'] assuming : doesnt matter where it happens

// -- order matters of what dupe is kept:
console.log(
  flattenAndUnique([
    [1, 2, '3'],
    [3, 4, 5, 'a'],
  ]),
);
//-> [1, 2, '3', 4, 5, 'a']

// --  values count as duplicate if their string value are ===
//   e.g is dupe: true, "true"
//   e.g not dupe: 0, false
console.log(
  flattenAndUnique([
    [true, 2, '3', false],
    ['true', 0, 4, 5, 'a'],
  ]),
); // -> [true, 2, "3", false, 0, 4, 5, 'a']
