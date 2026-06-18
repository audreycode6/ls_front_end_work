/*
Write a function that takes a string as an
argument and returns that string with every
lowercase letter changed to uppercase and every
uppercase letter changed to lowercase. Leave
all other characters unchanged.
 */

function swapCase(string) {
  let newString = '';

  [...string].forEach((char) => {
    if (/^[A-Za-z]$/i.test(char)) {
      // alphabetical char
      if (char === char.toLowerCase()) {
        newString += char.toUpperCase();
      } else {
        newString += char.toLowerCase();
      }
    } else {
      // non alphabetical char
      newString += char;
    }
  });
  return newString;
}

console.log(swapCase('CamelCase')); // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV')); // "tONIGHT ON xyz-tv"
