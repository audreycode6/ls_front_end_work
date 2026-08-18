'use strict';
/*
take in 2d array and subarray and
return count of instances of subarray found in 2d array
*/

/*
NOTES:
 -- need to compare each inner arry and see if subarray exists within
  - i.e saem elements found in same order


foreach elem in innerArray:
  - check is elem match for firstelem in subArray
  - if t: get idx and slice
    - extract slice and pass to helper func
    which will compare if each elem in subarray is match for slice


ALGO:
set counter to 0
for each inner array in 1starg
  - helperFunc checkInnerArrayHasMatch(innerArray)
    - returns true if Subaarray found -> increase counter
    - false do nothing

return counter

*/
function subArrayCount(twoDArray, subArray) {
  let subArrayMatchCount = 0;
  twoDArray.forEach((innerArray) => {
    if (innerArrayHasMatch(innerArray, subArray)) {
      subArrayMatchCount += 1;
    }
  });
  return subArrayMatchCount;
}

console.log(
  subArrayCount(
    [
      [1, '2', '3'],
      [1, 2, 3],
    ],
    ['2', '3'],
  ),
); // 1
console.log(
  subArrayCount(
    [
      [1, '2', '3'],
      [1, '2', '3'],
    ],
    ['2', '3'],
  ),
); // 2
console.log(
  subArrayCount(
    [
      [1, 2, '3'],
      [1, 2, 3],
    ],
    ['2', '3'],
  ),
); // 0

function innerArrayHasMatch(innerArray, subArray) {
  // use len to increase slice by 1 until match found -> T or empty -> F
  let arrLen = innerArray.length;
  for (let idx = 0; idx < arrLen; idx += 1) {
    let currentSlice = innerArray.slice(idx);
    if (isSubArrayMatch(subArray, currentSlice)) {
      return true;
    }
  }
  return false;
}

// console.log(innerArrayHasMatch([1, '2', 3], [1, '2'])); //tru
// console.log(innerArrayHasMatch([0, 'hi', 1, '2', 3], [1, '2'])); //tru
// console.log(innerArrayHasMatch([0, 'hi', 1, '2', 3], [])); //tru
// console.log(innerArrayHasMatch([0, 'hi', 1, '2', 3], ['hit', 1])); //false

function isSubArrayMatch(subArray, slice) {
  for (let idx = 0; idx < subArray.length; idx += 1) {
    let currentElem = subArray[idx];
    let currentSliceElem = slice[idx];
    if (currentElem !== currentSliceElem) {
      return false;
    }
  }
  return true;
}

// console.log(isSubArrayMatch([1, '2'], [1, '2', 3])); // true
// console.log(isSubArrayMatch([1, '2'], [])); // false
// console.log(isSubArrayMatch([1, '2'], [1, 2, 3])); // false
// console.log(isSubArrayMatch([1, '2'], [1])); // false
// console.log(isSubArrayMatch([], [])); // true
