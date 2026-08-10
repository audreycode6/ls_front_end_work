/*
Write a function that takes a non-negative integer and
 returns the largest number that can be formed by rearranging its digits.
 */

/* NOTES

** PROB
- in: non negative integer
- out: returns largest num that can be formed by rearranging its digits
- exp:
  - use all digits to create largest number possible
- imp:
  - digits should go from greatest to least in order to build biggest number
- ?:
  - can i expect valid input: non negative integer
    -- or should i validate input?

** EXAMPLES
519202 -> 952210


** BRAINSTORM
-- seems like sort digits from greatest to least and then
 join for the new stirng
-- extract each digit into an array of numbers
-- sort from greatest to least: custom sort
- join the numbers into 1 final number and return


-- convert the total number into array of individual digits
[...String(number)] -> [...String(numberString)].map(string => Number(string))

** ALGO:
- if single digit num return itself
- else:
  - convert number to arrayOfDigits
  - sort with custom sortGreatestToLeast
  -join sortedDigits and conver to number

*/

function sortGreatestToLeast(numA, numB) {
  return numB - numA;
}

function maxRearrange(number) {
  let arrayOfDigits = [...String(number)].map((string) => Number(string));
  arrayOfDigits.sort(sortGreatestToLeast);

  return Number(arrayOfDigits.join(''));
}

console.log(maxRearrange(519202)); // 952210
console.log(maxRearrange(90)); // 90
console.log(maxRearrange(7)); // 7
