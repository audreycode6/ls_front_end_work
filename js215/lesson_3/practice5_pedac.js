/*
Problem Description
Write a program that cleans up user-entered phone numbers so
that they can be sent as SMS messages. Other than digits, the
number may also contain special character such as spaces,
dash, dot, and parentheses that should be ignored.

The rules are as follows:

If the phone number is less than 10 digits, assume that it is a bad number.
If the phone number is 10 digits, assume that it is good.
If the phone number is 11 digits and the first number is 1,
   trim the 1 and use the last 10 digits.
If the phone number is 11 digits and the first number
  is not 1, then it is a bad number.
If the phone number is more than 11 digits, assume that it is a bad number.
For bad numbers, just a return a string of 10 0s.
*/

/*
PEDAC:
P:
- in:
  string representing user-entered phonenumber
  - contains digits
  - may also contain spaces, dash, dot, parentheses -- should be ignored
- out:
  - return string of cleaned up phonenumber -- 10 digits
  if valid: "##########" if len 10 or len 11 and char idx 0 is 1
  if invalid: "0000000000"
- e:
  - valid input: has 10 digits OR 11 digits and starts with 1
   all other strings invalid
- i:
  - return string representation of the phone numner cleaned up:
   if valid: "##########" OR "1##########"
   if invalid: "0000000000"
- ?:


E:
-- valid input of 10 digits:
"1234567890" -> "1234567890"
-- valid input including special ignore chars:
  - has parentheses, spaces, dots, dashes:
  "(123).456 - 7890" -> "1234567890"
-- valid input of 11 digits and starting with 1:
"1(234)456-7890" -> "2344567890"
-- invalid input of more than 10 digits but doesnt start with 1:
  "2.345.345.3456" -> "0000000000"
-- invalid input of non valid chars
(other special chars and non digit chars: _ & a):
  "1_234a_5678" -> "0000000000"
-- invalid input --not string type input:
  [1,2,3,4,5,6,7,8,9,0] -> "0000000000"
-- invalid input: less than 10 digits:
  "123456789" -> "0000000000"

D:
for loop to iterate over chars in input string
  - check that char is accepted char: digits, " ", ".", "-", "(", ")"

if valid string need to filter through special chars and extract digits
  - filter to extract digits and includes to determine if is a digit (or regex)
  [...string].filter(char => [..."0123456789"].includes(char))


length property to determine if proper length:
  newString.length === 10 || newString.length === 11
  index to check first digit is 1 if len 11. newString[0] === "1"

A:
- determine if valid input string -> helper func isValidPhoneString
  - take in string and return bool, true if only validchars else false
  - check char against array of valid chars  (or regex)
    VALID_CHARS = [..."0123456789 .-()"]
    VALID_CHARS.includes(char) -- if false return invalid result "0000000000"
    - if finishes iterating over string and
     no early return -> true (valid string)

- if valid string:
  - extract digits from string
  - check if filteredDigts len:
    - if === 10:
      return filteredDigits
    - if === 11 & first digit is "1":
      return filteredDigits.slice(1)
    - else return invalid result string
*/

function cleanUpPhoneNumberString(userInputPhoneNumber) {
  const INVALID_PHONE_NUMBER_RESULT = '0000000000';

  if (
    typeof userInputPhoneNumber === 'string' &&
    isValidPhoneString(userInputPhoneNumber)
  ) {
    let digitsString = extractDigits(userInputPhoneNumber);
    let digitsCount = digitsString.length;

    if (digitsCount === 10) {
      return digitsString;
    } else if (digitsCount === 11 && digitsString[0] === '1') {
      return digitsString.slice(1);
    } else return INVALID_PHONE_NUMBER_RESULT;
  } else return INVALID_PHONE_NUMBER_RESULT;
}

function isValidPhoneString(string) {
  const VALID_CHARS = [...'0123456789 .-()'];
  return [...string].every((char) => VALID_CHARS.includes(char));
}

function extractDigits(string) {
  return [...string]
    .filter((char) => [...'0123456789'].includes(char))
    .join('');
}
// TEST:
// -- valid input of 10 digits:
console.log(cleanUpPhoneNumberString('1234567890') === '1234567890');

// -- valid input including special ignore chars:
//   - has parentheses, spaces, dots, dashes:
console.log(cleanUpPhoneNumberString('(123).456 - 7890') === '1234567890');

// -- valid input of 11 digits and starting with 1:
console.log(cleanUpPhoneNumberString('1(234)456-7890') === '2344567890');

// -- invalid input of more than 10 digits but doesnt start with 1:
console.log(cleanUpPhoneNumberString('2.345.345.3456') === '0000000000');

// -- invalid input of non valid chars
// (other special chars and non digit chars: _ & a):
console.log(cleanUpPhoneNumberString('1_234a_5678') === '0000000000');

// -- invalid input --not string type input:
console.log(
  cleanUpPhoneNumberString([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) === '0000000000',
);

// -- invalid input: less than 10 digits:
console.log(cleanUpPhoneNumberString('123456789') === '0000000000');
