/*
Given an array of integers, `nums`, return the third largest
number in the array. If the third largest number does not exist,
return the greatest number.

You are not allowed to sort the array.
 */

/*
PEDAC:

P
in: array of integers
out: if exisits: 3rd largest number ; else: largest number
e:
- not allowed to sort
- identify the numbers from least to greatest
i:
- identify if atleast 3 elements
- assuming no dupes and no non int elements
- assuming i can sort but just not mutate original array
?:
- can there be duplicate values?
- what if there are multiple values that match the 3rd greatest value?
-   has duplicate values: [3, 2, 2, 1]:
    would it only be identifying the 3 largest unique number or
    just whatever is 3rd number from greatest to least?
- will there always be atleast 1 integer?
- will it always only be integer elements?
- not allowed to sort -> does that mean don't mutate original
      but can i still sort copy to order from greatest to least?

E:
- has 3 elements: thirdMax([3, 2, 1]) === 1
- less than 3 elements, return greatest number: thirdMax([3, 2]) === 3

D:
- sorting the list from greatest to least
  - copy array and sort ->
  - without a comparison function, sort() treats numbers like text
  - pass sorting callback for comparing number:
     => b - a to have greatest to least

  - check len with length property -> check if array >= 3
  - can use max to return max num
    - if cant use sort:
     can use max 3 times and first 2 times pop value and 3rd time return

A:

- determine len of input arr
- if >= 3 then identify 3rd largest number
- else: return Math.max(arr...)

identify 3rd largest number:
- make copy of array and iterate over /mutate to pop the first 2 max numbers
  - for (count = 1; count <= 3; count += 1)
    - identify max: maxNum
    - if count === 3: return maxNum
    - else:
      - find maxNums idx: arrCopy.indexOf(maxNum) -> maxNumIdx
      - splice (remove the maxNum: arrCopy.splice(maxNumIdx, 1) )
 */

function thirdMax(arrayOfIntegers) {
  if (arrayOfIntegers.length >= 3) {
    let arrayCopy = arrayOfIntegers.slice();

    for (let count = 1; count <= 3; count += 1) {
      let currentMax = Math.max(...arrayCopy);
      if (count === 3) {
        return currentMax;
      } else {
        let maxNumIdx = arrayCopy.indexOf(currentMax);
        arrayCopy.splice(maxNumIdx, 1);
      }
    }
  }
  return Math.max(...arrayOfIntegers);
}

console.log(thirdMax([3, 2, 1]) === 1);
console.log(thirdMax([3, 2]) === 3);
