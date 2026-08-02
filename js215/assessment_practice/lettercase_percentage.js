'use strict';
/*
Write a function that takes a string and returns an object containing
 the following three properties:

the percentage of characters in the string that are lowercase letters
the percentage of characters that are uppercase letters
the percentage of characters that are neither
You may assume that the string will always contain at least one character.
*/
/*PEDAC:
- Problem:
 - in: string
 - out: object containing 3 properties:
    - percentage of characters in the string that are lowercase letters
    - percentage of characters that are uppercase letters
    - percentage of characters that are neither
 - ex:
  - string will always contain at least one character
 - imp:
  - not just alphabetical characters
  - may have 0 alphabetical characters
  - keys: lowercase , uppercase, neither
  - values: float, can be half?
    -- percentage formatted: #.## to the 2nd decimal place
    - if zero dont do math -> 0.00 (to avoid zero division error)
 - ?:
  - is it ok to not validate input since assuming input is always a string
  with atleast 1 char?


- Examples:

-- mix of lower, upper and neither:
abCdef 123 -> lower: 5 , upper: 1, neither: 4
- get total of all chars: 10
  lower: 5 * 10 = 50
  upper: 1 * 10 = 10
  neither: 4 * 10 = 40
lowercase: "50.00", uppercase: "10.00", neither: "40.00"

-- less than 10 char string: "AbCd +Ef"
  - lower: 3
  - upper: 3
  - neither: 2
  - total: 8 -> convert total to find difference to 100: 100 / total
  and use that to get percentages
    100 / 8 = 12.5
      char category * differenceTo100
        - 3 * 12.5 = 37.5
        - 3 * 12.5 = 37.5
        - 2 * 12.5 = 25

lowercase: "37.50", uppercase: "37.50", neither: "25.00"

-- some categories dont have any values "123"
  - lower: 0 -> 100 / 0 -- ERROR if value is 0 the value is 0.00
  - upper: 0
  - neither: 3
  lowercase: "0.00", uppercase: "0.00", neither: "100.00"


-Data structures:
  - identify if alphabetic char -> if upper | if lower
    - use regex to identify if alphabetic: /[a-zA-Z]/
  - identify if non alphabetic char -> "neither"

  - how to calculate percentage:
    - count total of lower, upper, neither
    - get difference to 100 from total (total / 100) and
    multiple to charCategories to get percentage
    - convert to 2 decimal places : percentage.toFixed(2)

- Algo:
  - for char in string:
    - get totals of lower, upper, neither
    - store in dict
  - get total of all chars - get difference to 100: total / 100
  - convert char category totals to percentage + proper 2 decimal place format

  - return dict
*/

function letterPercentages(string) {
  let letterCategoriesAndPercentages = {
    lowercase: 0,
    uppercase: 0,
    neither: 0,
  };

  [...string].forEach((char) => {
    if (/[a-zA-Z]/.test(char)) {
      // alphabetic char
      if (/[a-z]/.test(char)) {
        letterCategoriesAndPercentages['lowercase'] += 1;
      } else {
        letterCategoriesAndPercentages['uppercase'] += 1;
      }
    } else {
      // neither
      letterCategoriesAndPercentages['neither'] += 1;
    }
  });

  const totalChars = string.length;
  const differenceTo100 = 100 / totalChars;

  // convert each value in dict to proper format

  Object.keys(letterCategoriesAndPercentages).forEach((key) => {
    let value = letterCategoriesAndPercentages[key];
    let newValue = (value * differenceTo100).toFixed(2);
    letterCategoriesAndPercentages[key] = newValue;
  });

  return letterCategoriesAndPercentages;
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
