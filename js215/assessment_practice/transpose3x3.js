'use strict';
/*

A 3x3 matrix can be represented by an array of arrays: an outer
 array containing three subarrays that each contain three elements
e.g.  the 3x3 matrix shown below:
1  5  8
4  7  2
3  9  6
is represented by the following array of arrays:
const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

The transpose of a 3x3 matrix is the matrix that results from exchanging
the rows and columns of the original matrix. For example,
the transposition of the matrix shown above is:
1  4  3
5  7  9
8  2  6

Write a function that takes an array of arrays that represents a
 3x3 matrix and returns the transpose of the matrix. You should
 implement the function on your own, without using any external libraries.

Take care not to modify the original matrix — your function
 must produce a new matrix and leave the input matrix array unchanged.
*/

/* NOTES:

**Problem:
- input: array of arrays - represents a 3 x 3 matrix
  1 array with 3 inner arrays , each inner array has 3 elems
  e.g [[0a, 1a, 2a],[0b, 1b, 2b], [0c, 1c, 2c]]
- ouput: return transpose of the matrix: new array of array
  - still 3x3
  - do not modify original matrix
  - transposed: [[0a, 0b, 0c], [1a, 1b, 1c], [2a, 2b, 2c]]
- exp:
  - transponse: take all of the elements from same idx and put in array :
  [[idx0, idx0, idx] [idx1, idx1 ...]]
  - do not mutate original
- imp:
  - may be array matrix but missing all elems
    -- validate and return error message if missing:
      ensure len of input matrix is 3
      and all elems are array type and have len of 3
- ?:
  - will all elements within inner arrays be numbers?
    - if not will it be all primitive values?
    - assuming will only be primitive values
  - can i expect input to be a 3X3 matrix array:
    1 array with 3 inner arrays that all contain 3 elems?
    - or do i need validate input?
    ASSuming interviewer said no need to validate.

**Examples/ usage:
-- test non mutating orginal matrix
const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];
console.log(newMatrix); // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(transpose(matrix)); // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

-- test matrix missing values:
const testMatrix = [[1, 2, 3], [4, 5, 6], [7, 8]]
  -- need to ensure len of input matrix is 3
   and all elems are array type and have len of 3
console.log(transpose(testMatrix)); // "ERROR: input was not 3x3 matrix."

** Brainstorm:
- validate input is 3X3 matrix
  - input is array
  - input has len of 3
  - each element in input is an array && and that array has 3 elements

- build new transposed array:
  can start with 3X3 empty arrays: [[], [], []]
    - for each array in inputMatrix
      - get elem at idx 0, 1, 2
      - add elem0 to transponsed[0]
      - add elem1 to transposed[1],
      - add elem2 to transposed[2]

    [[1, 5, 8], [4, 7, 2], [3, 9, 6]]
    [[],[],[]]

    [1, 5, 8] -> elem0 : 1, elem1 : 5, elem2: 8
    add to transponsed: [[1][5][8]]
    [4, 7, 2] -> elem0 : 4, elem1 : 7 elem2: 2
    add to transponsed: [[1, 4][5, 7][8, 2]]
    [3, 9, 6] -> elem0 : 3, elem1 : 9 elem2: 6
    add to transponsed: [[1, 4, 3][5, 7, 9][8, 2, 6]]


** Data Structures
- deep copy input
  - use struturedClone(input) to deepcopy
  - to ensure original doesnt get altered

- for loop through inputMatrix's inner arrays
  - extract the elements for idx 0 -2
  - add extractions to newArrays inner array's 0 -3
    use .push, elemX goes to innerArrayX (elem0 -> array[0])

- validate input is 3x3 matrix -> helper fun
  - return true if it is; else false

** Algorithm:
- deep copy input
- validate input -- helper func
- create empty 3x3 array
- build transposed by iterating through deepcopy's innerArray
  - extract elems 0-2 in vars and store in corresponding transposedInnerArrays

- return transposedArray
*/

/* REFACTOR:
make it dynamic to any size square matrix, [5x5] [2, 2] etc

- validate input array has all array elements
 and all array elems  + equal elems as input's len

- use inputArrays len to build transposed array
  - for each inner array:
    for each elem, idx in innerArray
    - transponsed[idx] = elem

input: [[1, 2], [1, 2]]
transposed: [[], []]
[1, 2]
-> 1, 0 : transposed[idx].push(elem)
-> 2, 1 : tranposed[idx].push(elem)
transposed: [[1][2]]
[1, 2]
-> 1, 0 : transposed[idx].push(elem)
-> 2, 1 : tranposed[idx].push(elem)
transposed final: [[1, 1][2, 2]]
*/

function transpose(squareMatrix) {
  const matrixCopy = structuredClone(squareMatrix);

  if (isSquareMatrix(matrixCopy)) {
    let transposedArray = getXbyXemptyArray(matrixCopy.length);

    matrixCopy.forEach((innerArray) => {
      innerArray.forEach((elem, idx) => {
        transposedArray[idx].push(elem);
      });
    });
    return transposedArray;
  }
  return 'ERROR: input was not a square matrix.';
}

function getXbyXemptyArray(length) {
  let xByX = [];
  while (xByX.length < length) {
    xByX.push([]);
  }
  return xByX;
}

function isSquareMatrix(input) {
  /*
  validate input array has all array elements
  and all elems are arrays +
  equal in len to inputArray
  */
  if (Array.isArray(input)) {
    const inputLen = input.length;
    if (
      input.every((elem) => Array.isArray(elem) && elem.length === inputLen)
    ) {
      return true;
    }
  }
  return false;
}

// TESTS:
const matrix = [
  [1, 5],
  [3, 9],
];

const newMatrix = transpose(matrix);

console.log(newMatrix); // [[1, 3], [5, 9]]
console.log(matrix); // [[1, 5], [3, 9]]

const matrix2 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

const newMatrix2 = transpose(matrix2);

console.log(newMatrix2); // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix2); // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

const testMatrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8],
];
console.log(transpose(testMatrix)); // "ERROR: input was not 3x3 matrix."

console.log(transpose([])); // []
