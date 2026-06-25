/*
Write a Function named octalToDecimal that performs
octal to decimal conversion. When invoked on a String
that contains the representation of an octal number,
the Function returns a decimal version of that value as
a Number. Implement the conversion yourself: do not use
something else to perform the conversion for you.

  233                          // octal
= 2*8^2 + 3*8^1 + 3*8^0
= 2*64  + 3*8   + 3*1
= 128   + 24    + 3
= 155                          // decimal
 */

function octalToDecimal(numberString) {
  // map each digits octal value:
  const OCTAL_POWER = 8;
  let subtractor = 1;
  let digitsOctalValues = [...numberString].map((digit, _, arr) => {
    let digitsPlaceValue = arr.length - subtractor;
    let octalValue = Number(digit) * Math.pow(OCTAL_POWER, digitsPlaceValue);
    subtractor += 1;
    return octalValue;
  });

  // reduce get sum of all digitOctalValues
  let decimalValue = digitsOctalValues.reduce((accum, value) => accum + value);

  return decimalValue;
}

console.log(octalToDecimal('1')); // 1
console.log(octalToDecimal('10')); // 8
console.log(octalToDecimal('130')); // 88
console.log(octalToDecimal('17')); // 15
console.log(octalToDecimal('2047')); // 1063
console.log(octalToDecimal('011')); // 9
