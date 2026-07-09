/* PROBLEM:
A distinct string is a string that is present only once in an array.

Given an array of strings, `arr`, and an integer,`k`,
return the `k`th distinct string present in `arr`.
If there are fewer than `k` distinct strings,
return an empty string`""`.


Note that the result string is the one encountered earliest in the array.
*/

/*
ALGO:
1. get count of each string's occurrence in arr
    - elemCount obj: uniqueElem: count of occurence
    - for each elem in arr
        - if elem isnt in elemCount add to dict as key → elem and value = 0
        - += 1 keys value
2. distinctStrings arr: filter elemCount by keys that have value (count) of 1
3. check if distinctStrings length ≥ `k` arg
    1. if true → return element at index `k - 1`
    2. else → return empty string
 */

function distinctString(arr, k) {
  // 1. get count of each string's occurrence in arr
  let uniqueStringCount = {};
  arr.forEach((string) => {
    if (!(string in uniqueStringCount)) {
      uniqueStringCount[string] = 0;
    }
    uniqueStringCount[string] += 1;
  });

  // 2. filter uniqueStringCount by keys that have value (count) of 1
  const distinctStrings = Object.keys(uniqueStringCount).filter(
    (key) => uniqueStringCount[key] === 1,
  );

  // 3. check if distinctStrings length ≥ `k` arg
  if (distinctStrings.length >= k) {
    return distinctStrings[k - 1];
  }
  return '';
}

console.log(distinctString(['d', 'b', 'c', 'b', 'c', 'a'], 2)); // "a" : has exactly `k` amount of distinct strings [”d”, “a”] → “a”)
console.log(distinctString(['d', 'b', 'c', 'b', 'c', 'a'], 3)); // "" : has fewer than `k` distinct strings)
console.log(distinctString(['d', 'b', 'c', 'b', 'c', 'a'], 1)); // “d” : has more than `k` amount of distinct)
console.log(distinctString(['b', 'c', 'b', 'c'], 1)); // "" : has no distinct strings)
