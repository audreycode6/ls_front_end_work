/*
Write a function that takes an array of strings and
returns an array of the same string values, but with
all vowels (a, e, i, o, u) removed.
 */

function removeVowels(array) {
  const VOWELS = ['a', 'e', 'i', 'o', 'u'];

  const removedVowelsArray = array.map((string) => {
    let newString = '';
    [...string].forEach((char) => {
      if (!VOWELS.includes(char.toLowerCase())) {
        newString += char;
      }
    });
    return newString;
  });
  return removedVowelsArray;
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz'])); // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white'])); // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ'])); // ["BC", "", "XYZ"]
