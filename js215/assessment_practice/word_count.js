/*
Write a function that takes a non-empty string and
 returns an object with the percentage of characters that are
  lowercase letters, uppercase letters, and neither. Round to one decimal place.
 */

/* NOTES

PROB:
- in: non empty string
- out: returning" obj with % of lowerCase, upperCase, neither
  - percentage rounded to 1 decimal place
  - obj has 3 keys:
    - lowercase , uppercase, neither
    - there values are string corresponding of percetange of
     chars within the total string
  - if none in category: its value is 0.0
- exp:
  - get percentage of different charecteristics of chars in string:
    - lowercase (a-z)
    - uppercase (A-Z)
    - neither (not A-Za-z)
  - percentage is rounded by 1 decimal place and is string
- ?:
  - can i expect valif input of string with some chars
    -YES STRING NO might be empty stirng too
  - for 0 percentage do i also round to 1 decimal place?
    YES -> 0.0
  - white space counts in neither category? YES //CHECK
  - round to one decimal place. -- round up or down?
    -- up

EXAMPLES:
-- string with some chars in each category
letterPercentages('abCdef 123');
// { lowercase: "50.0", uppercase: "10.0", neither: "40.0" }
  - string: 'abCdef 123'
    - lower: "abdef" -> 5
    - upper: "C" -> 1
    - neither: " 123" -> 4
  -- totalStringLen : 10

  get percentage:
  IF wordlen or categorytotsl is empty the percentages are empty
    difference: 100 / total
    percent: (categoryTotal * difference)

    - string: 'abCdef 123'
      - lower: "abdef" -> 5
      - upper: "C" -> 1
      - neither: " 123" -> 4
    -- totalStringLen : 10
    diff : 100 / 10 : 10
    lowerPercent: diff * 5 -> 50
    upperP : diff * 1 -> 10
    neither: diff * 4 -> 40


-- letterPercentages('AbCd +Ef') // test totallen less than 10
{ lowercase: "37.5", uppercase: "37.5", neither: "25.0" }
  difference: 100 / 8 : 12.5
  lowerPercent 3: 3 * diff -> 37.5
  upperPercent 3: 3 * diff) -> 37.5
  neitherPercent 2: 2 * diff -> 25


-- "" // test empty string

letterPercentages('') // { lowercase: "0.0, uppercase: "0.0", neither: "0.0" }

-- "abCD" // test empty category
// { lowercase: "50.0, uppercase: "50.0", neither: "0.0" }

BRAINSTORM:
-- helper func: return totals for upper lower neither

- get len of whole string
- get len of lower chars in string
- get len of upper chars in string
- get len of neither in string

- get percentages:
  - diff to multiply to total of upper/lower/neither lens
  - make rounded to 1 decimal: -- number.toFixed(1)

- build obj for lower, upper and neither

- getUpperLowerNeitherTotals(stirng)
 -> returns array of upperTotal, lowerTotal, getUpperLowerNeitherTotals

- need to convert all totals to proper percent format
    -- helper func convertToFormattedPercent
     // take in number and difference
     // return number as percent rounded to 1 decimal place converted to string

- then build obj using the percentages


ALGO:
- take in stirng and get the totals of categories:
- map in obj
  - for each key in obj convert its value to proper percentages
*/

function letterPercentages(string) {
  let characterPercentages = getLowerUpperNeitherObj(string);

  // difference for converting percentage
  let difference = 0;
  if (string.length > 0) {
    difference = 100 / string.length;
  }
  Object.keys(characterPercentages).forEach((characterType) => {
    let value = characterPercentages[characterType];
    characterPercentages[characterType] = convertToFormattedPercent(
      value,
      difference,
    );
  });
  return characterPercentages;
}

function getLowerUpperNeitherObj(string) {
  let upperCharCount = 0;
  let lowerCharCount = 0;
  let neitherCharCount = 0;

  [...string].forEach((char) => {
    if (char.match(/[a-z]/)) {
      lowerCharCount += 1;
    } else if (char.match(/[A-Z]/)) {
      upperCharCount += 1;
    } else {
      neitherCharCount += 1;
    }
  });
  return {
    lowercase: lowerCharCount,
    uppercase: upperCharCount,
    neither: neitherCharCount,
  };
}

function convertToFormattedPercent(total, difference) {
  // take in number and difference
  // return number as percent rounded to 1 decimal place converted to string
  return String((total * difference).toFixed(1));
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.0", uppercase: "10.0", neither: "40.0" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.5", uppercase: "37.5", neither: "25.0" }
console.log(letterPercentages('')); //FIX
// { lowercase: "0.0, uppercase: "0.0", neither: "0.0" }

console.log(letterPercentages('abCD')); // { lowercase: "50.0, uppercase: "50.0", neither: "0.0" }
