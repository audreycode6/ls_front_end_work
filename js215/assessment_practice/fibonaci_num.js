'use strict';

/*
The Fibonacci series is a series of numbers (1, 1, 2, 3, 5, 8, 13, 21, ...)
 such that the first two numbers are 1 by definition, and each subsequent number
  is the sum of the two previous numbers. Fibonacci numbers often appear in
   mathematics and nature.

Computationally, the Fibonacci series is a simple series, but the results grow
 at an incredibly rapid rate. For example, the 100th Fibonacci number is
  354,224,848,179,261,915,075—that's enormous, especially considering that
   it takes six iterations just to find the first 2-digit Fibonacci number.

Write a function that calculates and returns the index of the first Fibonacci
 number that has the number of digits specified by the argument. (The first
  Fibonacci number has an index of 1.)

You may assume that the argument is always an integer greater than or
 equal to 2.
 */

/*
JavaScript's normal Number type can represent integers accurate
up to the value of Number.MAX_SAFE_INTEGER, which is the 16-digit value
9007199254740991. Any integer larger than that value loses accuracy.
  For instance, the following code outputs 1, not 2 as you may expect:

console.log(Number.MAX_SAFE_INTEGER + 2 - Number.MAX_SAFE_INTEGER);
We'll be working with much larger numbers in this problem. Fortunately,
JavaScript now supports a BigInt type that lets you work with massive
integers, limited only by the amount of memory available to your program,
  and the time you can devote to waiting for an answer.

To use BigInt integers in your solution, simply append the letter n to any
numbers you use in your solution: 1n,
1234567890123456789012345678901234567890n,
and so on. JavaScript will take care of the rest.
*/

/*
PEDAC:

P:
- in: big int number: int with n at the end
number represents the amount of digits to find
- out: big int number: int with n at the end :
 number represents the index of the 1st fibonacci
  number with the amount of digits (provided in arg)
- ex:
 - calculates and returns the index of the first Fibonacci
 number that has the number of digits specified by the argument
 - Fibonacci series is a series of numbers (1, 1, 2, 3, 5, 8, 13, 21, ...)
 such that the first two numbers are 1 by definition, and each subsequent number
  is the sum of the two previous numbers.
 - The first Fibonacci number has an index of 1.
 -  assume that the argument is always an integer greater than or
 equal to 2.
- im:
  - fib numbers will go over the maxSafeInteger:
  16-digit value : 9007199254740991
  - use BigInt integers in your solution, simply append the letter n to any
 numbers you use in your solution: 1n,
- ?:
  - why is there an "n" appended to the arg and return value? --big int
  - can i assume that they will always have proper input:
   following big int format & <= 2?
  do i need any input validation for other types or values?

E:
--- 2 digit number
console.log(findFibonacciIndexByLength(2n) === 7n); // 1 1 2 3 5 8 13

-- 3 digit number
findFibonacciIndexByLength(3n) === 12n; // 1 1 2 3 5 8 13 21 34 55 89 144
-- 10 digit number

-- 16 digit number
-- 10000 digit number : number is over maxsafe integer


D:
-- build fibonacci numbers until number with arg digits is found
  - start with 1 and next element is sum of current elements
  - since arg will always be for digits 2 and greater can store starting
  fib and just build on: fibNumbers =  [1 1 2 3 5 8 13]
  - iterate through fibNumbers:
    - if String(number).length === argInput:
      return that numbers idx from within fibNumbers
    - else (not found yet): keep adding new element
       to fibNumbers and checking that elements length

-- to get next elem in fibnumbers: -- helper func
  - use reduce func to get sum of all current elems

-- track the index of the fibonacci numbers to return corressponding idx
  - store in array and can add 1 to corresponding idx in order to match
   startiung idx of 1

-- helper func to check length of currentElement:
  - takes in the functions arg and compares currentElements length:
  inputArg === String(currentElem).length
  return bool


A:

- define starting array of fibNumbers: [1 1 2 3 5 8 13]
- iterate through fubNumbers to see if matching digit length found --helper func
    - true: return idx of corresponding elem
    - false: while lastElems length != arginput
      - add new elem (get sum of all elems in array) -- helper func
 */

function findFibonacciIndexByLength(totalDigitsToFind) {
  let fibNumbers = [1n, 1n, 2n, 3n, 5n, 8n, 13n];

  while (
    !isMatchForDigits(fibNumbers[fibNumbers.length - 1], totalDigitsToFind)
  ) {
    let nextFibNumber = getNextFibNumber(fibNumbers);
    fibNumbers.push(nextFibNumber);
  }

  return BigInt(fibNumbers.length);
}

function isMatchForDigits(currentElem, digitsToMatch) {
  return BigInt(String(currentElem).length) === digitsToMatch;
}

function getNextFibNumber(fibNumbers) {
  let fibNumberLength = fibNumbers.length;
  let lastFibNumber = fibNumbers[fibNumberLength - 1];
  let secondToLastFibNumber = fibNumbers[fibNumberLength - 2];

  return lastFibNumber + secondToLastFibNumber;
}

console.log(findFibonacciIndexByLength(2n) === 7n); // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n); // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.
