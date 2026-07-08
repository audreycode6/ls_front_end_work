/*
Write a function that takes any two version numbers
in this format and compares them, with the result of
this comparison showing whether the first is less than,
equal to, or greater than the second version:

If version1 > version2, we should return 1.
If version1 < version2, we should return -1.
If version1 === version2, we should return 0.
If either version number contains characters other
than digits and the . character, we should return null.

*/

function compareVersions(version1String, version2String) {
  if (isValidVersion(version1String) && isValidVersion(version2String)) {
    let version1Digits = convertToArrayOfDigits(version1String);
    let version2Digits = convertToArrayOfDigits(version2String);

    return compareDigits(version1Digits, version2Digits);
  } else return null; // not valid version(s)
}

function isValidVersion(versionString) {
  const VALID_VERSION_FORMAT = /^\d+(\.\d+){0,3}$/;
  /*
  VALID_VERSION_FORMAT REGEX BREAKDOWN:
  ^\d+ : starts with one or more digits
  (\.\d+){0,3} : zero to three groups of a dot followed by digits
    (so each . is always sandwiched between digit sequences)
  $ : ends with a digit (the last group in \d+ or (\.\d+))
  */
  return VALID_VERSION_FORMAT.test(versionString);
}

function compareDigits(version1Digits, version2Digits) {
  // determine max len
  const maxDigitLength = Math.max(version1Digits.length, version2Digits.length);

  // iterate through longest array of digits and
  // compare each cooresponding digit
  for (let idx = 0; idx < maxDigitLength; idx += 1) {
    let v1CurrentDigit = version1Digits[idx];
    let v2CurrentDigit = version2Digits[idx];

    // if currentDigit is undefined (versions !== in len)
    if (v1CurrentDigit === undefined) {
      v1CurrentDigit = 0;
    }
    if (v2CurrentDigit === undefined) {
      v2CurrentDigit = 0;
    }

    if (v1CurrentDigit > v2CurrentDigit) {
      return 1;
    }
    if (v1CurrentDigit < v2CurrentDigit) {
      return -1;
    }
  }
  return 0;
}

function convertToNumbers(arrayOfDigits) {
  return arrayOfDigits.map((digit) => Number(digit));
}

function convertToArrayOfDigits(numberString) {
  let digits = numberString.split('.');
  return convertToNumbers(digits);
}

//TESTS
// *ver1 is less than ver2 returns -1:*
console.log(compareVersions('0.1', '1') === -1);
console.log(compareVersions('1.2.0.0', '1.18.2') === -1);

// *ver1 is greater than ver2 returns 1:*
console.log(compareVersions('1', '0.1') === 1);

// *ver1 and ver2 are equal return 0:*
console.log(compareVersions('1.0', '1.0') === 0);

// *invalid version input return null:*
console.log(compareVersions('.1', '1.0') === null); // starts with decimal
console.log(compareVersions('0.1', '1,0') === null);
// includes non decimal/digit char: ','
console.log(compareVersions('0.1', '1.a') === null);
// includes non decimal/digit char: 'a'
console.log(compareVersions('0.1.2.3.4', '1.0') === null); // more than 3 decimals

/*
PEDAC:
P:
- in: 2 numbers (?) or string of version
  -- has to be string bc javascript doesnt take number with more than 2 decimals
- out:
  - 1 if vers1 > vers2
  - -1 if vers1 < vers2
  - 0 if vers1 === vers2
  - null if either vers contains chars other than digits and .

- e:
  - determine if valid version num: (contains only digits and .)
  - compare if versions are equal to, less than, greater then each other
    - how to compare numbers
      - compare first arg against 2nd arg
- i:
  legal version numbers:
  - single int : 1
  - 1 - 3 decimals sperating numbs: 0.1, 1.0, 1.2.3, 3.0.0, 4.3.2.1
  - numbers being seperated by decimal points can be larger than 1 digit
    - max only 3 decimals
  - version can start with 0
  - must start and end with a digit
  - version must be non negative number
-?'s:
  - what makes a number a legal version number?
    - numbers being separated by decimal points can be how long (2 ...?)
    - no negative numbers?
    - at most 3 decimals (#.#.#)?
    - does it need to start and end with a number? -- assuming yes
  - are these numbers ===: 1.2 vs 1.2.0.0 ?

EXAMPLES:
*ver1 is less than ver2 returns -1:*
- 0.1 vs 1 returns -1 (0.1 is less than 1)
console.log(compareVersions(0.1, 1) === -1)
- 1.2.0.0 vs 1.18.2 -> -1

console.log(compareVersions(1.2.0.0, 1.18.2) === -1)

8ver1 is greater than ver2 returns 1:*
- 1 vs 0.1 returns 1 (1 is greater than 0.1)
console.log(compareVersions(1, 0.1) === 1)

*ver1 and ver2 are equal return 0:*
- 1.0 vs 1.0 returns 0
console.log(compareVersions(1.0, 1.0) === 0)

*invalid version input return null:*
- 1.a.0 -- has non digit and decimal char (alphabetical char)
- 1-1 -- has non digit and decimal char (dash)
- (?) .1, 1. starts or ends with decimal
- 1.1.1.1.1 more than 3 decimals
console.log(compareVersions(.1, 1.0) === null) // starts with decimal
console.log(compareVersions(0.1, 1,0) === null)
  // includes non decimal/digit char: ','
console.log(compareVersions(0.1, 1.a) === null)
  // includes non decimal/digit char: 'a'
console.log(compareVersions(0.1.2.3.4, 1.0) === null) // more than 3 decimals


0.1 < 1 = 1.0 < 1.1 < 1.2 = 1.2.0.0 < 1.18.2 < 13.37


DATASTRUCTURES
- split number by decimals -> compare each digit by corresponding idx:
digitsArray = String(1.2.3.4).split(".") -> [1, 2, 3, 4]

- loop through the longest digitsArray
  - longestLength = Math.max(digitsArray1.length, digitsArray2.length)
  - iterate by length: for (let idx = 0; digitsArray < longestLength; idx +=)
   - convert digit to number when comparing

ALGO:
- 1. determine if valid versions
  - isValidVersion() helper
  - if any verison is not valid -> return null
- 2. compare version1 to version2
  - split numbers by decimals
  - iterate through longest version length and
   compare version1's digits to version2's digits
    - if ver1 currdigt < ver2 currdigit -> return -1
    - if ver1 currdigt > ver2 currdigt -> return 1
  - if makes it to end of iteration and not < or >
  then ver1 === ver2 -> return 0


example: 1.2.0.0 vs 1.18.2 -> -1
[1, 2, 0, 0] vs [1, 18, 2]
for len of 4
  1st it: 1 vs 1 -> continue
  2nd it: 2 vs 18 -> 2 < 18 -> return -1

*/
