'use strict';

/*
A triangle is classified as follows:

Equilateral: All three sides are of equal length.
Isosceles: Two sides are of equal length, while the third is different.
Scalene: All three sides are of different lengths.
To be a valid triangle, the sum of the lengths of the two
shortest sides must be greater than the length of the longest
side, and every side must have a length greater than 0. If
either of these conditions is not satisfied, the triangle is invalid.

Write a function that takes the lengths of the three sides of
a triangle as arguments and returns one of the following
four strings representing the triangle's classification:
'equilateral', 'isosceles', 'scalene', or 'invalid'.
 */

/* NOTES:

Problem:
- input: lengths of the 3 sides of a triangle
- output: string classifying trianlge:
returns one of the following
four strings representing the triangle's classification:
'equilateral', 'isosceles', 'scalene', or 'invalid'.
- exp:
  Equilateral: All three sides are of equal length.
  Isosceles: Two sides are of equal length, while the third is different.
  Scalene: All three sides are of different lengths.
  To be a valid triangle, the sum of the lengths of the two
    shortest sides must be greater than the length of the longest
    side, and every side must have a length greater than 0.
  If either of these conditions is not satisfied, the triangle is invalid.
- imp:
  - args can be a number 0 or more and can be floats
  - identify the longest side in order to check shorter sides are >
  ( valid triangle) -- might have multiples of the max angle
- ?:
  - can i expect always 3 numbers as input?
  - should i handle/expect bad input?

Examples / usage:
triangle: sum of the lengths of the two
    shortest sides must be greater than the length of the longest
    side, and every side must have a length greater than 0.

-- equilateral: all 3 angles are equal in len
  -- (and shorter sides sum > than longest side && all angles > 0)
triangle(3, 3, 3); // "equilateral"
  - all equal in size && all angles > 0

-- isosceles: Two sides are of equal length, while the third is different
  -- (and shorter sides sum > than longest side && all angles > 0)
triangle(3, 3, 1.5); // "isosceles"
 - all sides > 0
 - 2 sides equal
 - retreive the first max value and the other 2 become the shorter sides
  - max 3, shorters [ 3, 1.5] -> shorters (4.5) > than max

-- scalene: All three sides are of different lengths.
  -- (and shorter sides sum > than longest side && all angles > 0)
triangle(3, 4, 5); // "scalene"
  - 3 difference lengths
  - all angles. > 0
  - identify max: 5
  - sum shorter: [3, 4] -> 7 > max

-- invalid: sum of lengths of 2 shortest sides is less than longest side
triangle(3, 1, 1);        // "invalid"
  - all angles > 0
  - 2 angles same size
  - 1 and 1 are shorter sides and sum (2) is less than longest side (3)

-- invalid every side must have length greater than 0
triangle(0, 3, 3);        // "invalid"
 -- 0 angle -> invalid


Data Structures:

-- helper func that takes in the 3 angles
  - identifies the max
    (may have double max but just need one removed from angles)
        - maybe use Math.max && indexOf to remove and store in var
  - and the 2 shorter angles
  - returns bool: true if sum of 2 "shorter" numbers is > than maxNumber;
   else false

Algorithm:

- first check that there are 3 args and all args > 0
  - false -> "invalid"
  - true -> identify possible triangle type:
    - all different (scalene)
      - helperfunc shorterAnglesGreaterThanMax
        - true -> return "scalene"
        - false -> return " invalid"
    - all same (equliateral) -> return "equilateral"
    - 2 same (iosceles)
      - helperfunc shorterAnglesGreaterThanMax
         - true -> return "isoceles"
        - false -> return " invalid"

*/

function triangle(side1, side2, side3) {
  const sides = [side1, side2, side3];
  if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
    // side <= 0 is invalid
    return 'invalid';
  }
  if (side1 === side2 && side2 === side3) {
    // sides all equal may be equalateral
    return 'equilateral';
  } else if (side1 !== side2 && side1 !== side3 && side2 !== side3) {
    // sides all different may be scalene
    if (shorterSidesGreaterThanMax(sides)) {
      return 'scalene';
    } else return 'invalid';
  }
  // 2 side are equal to one another and 1 different may be isosceles
  if (shorterSidesGreaterThanMax(sides)) {
    return 'isoceles';
  } else return 'invalid';
}

function shorterSidesGreaterThanMax(anglesArray) {
  /*
  - identifies the maxside and the 2 shorter sides
  - returns bool: true if sum of 2 "shorter" numbers is > than maxNumber
  ; else false
 */

  let maxSide = Math.max(...anglesArray);
  let indexOfMax = anglesArray.indexOf(maxSide);
  const shorterSides = anglesArray.filter((_, idx) => idx !== indexOfMax);
  let shorterSum = shorterSides[0] + shorterSides[1];
  return shorterSum > maxSide;
}

console.log(triangle(3, 3, 3)); // "equilateral"
console.log(triangle(3, 3, 1.5)); // "isosceles"
console.log(triangle(3, 4, 5)); // "scalene"
console.log(triangle(0, 3, 3)); // "invalid"
console.log(triangle(3, 1, 1)); // "invalid"
