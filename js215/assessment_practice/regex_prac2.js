'use strict';

/*
Write a regex that matches any sequence of three characters
delimited by whitespace characters (the regex should match
both the delimiting whitespace and the sequence of 3 characters).
Test it with these strings:
  reds and blues
  the lazy cat sleeps
  Doc in a big red box.
  Hup! 2 3 4
 */
const whitespaceSurrounding3Chars = /\s...\s/;
// console.log('reds and blues'.match(whitespaceSurrounding3Chars));
// console.log('the lazy cat sleeps'.match(whitespaceSurrounding3Chars));
// console.log('Doc in a big red box.'.match(whitespaceSurrounding3Chars));
// console.log('Hup! 2 3 4'.match(whitespaceSurrounding3Chars)); // " 2 3 " -> `.` matches whitespace too

/*
Write a regex that matches any four digit hexadecimal number
that is both preceded and followed by whitespace. Note that 0x1234
is not a hexadecimal number in this exercise
there is no space before the number 1234.

hexadecimal: 0-9 or A-F

Hello 4567 bye CDEF - cdef
0x1234 0x5678 0xABCD
1F8A done
*/

const whitespaceSurrounding4DigitHexadecimal =
  /\s[\dA-F][\dA-F][\dA-F][\dA-F]\s/;
// console.log(
//   'Hello 4567 bye CDEF - cdef'.match(whitespaceSurrounding4DigitHexadecimal),
// ); // matches: 4567, CDEF
// console.log(
//   '0x1234 0x5678 0xABCD'.match(whitespaceSurrounding4DigitHexadecimal),
// ); // null
// console.log('1F8A done'.match(whitespaceSurrounding4DigitHexadecimal)); // null

/*
Write a regex that matches any sequence of three letters.
Test it with these strings:
  The red d0g chases the b1ack cat.
  a_b c_d
*/

const threeLetters = /[a-z][a-z][a-z]/i;
// console.log('The red d0g chases the b1ack cat.'.match(threeLetters));
// matches: "The", red, cha, ses the, ack, cat
// console.log('a_b c_d'.match(threeLetters)); // null
