/*
Write a function that takes a string, doubles every 
consonant character in the string, and returns the 
result as a new string. The function should not double 
vowels ('a','e','i','o','u'), digits, punctuation, or 
whitespace.
 */

function doubleConsonants(string) {
    const CONSONANTS =  ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm',
                  'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

    const newStringArray = [...string].map((char) => {
        // case insensitve check for consonant char
        if (CONSONANTS.includes(char.toLowerCase())) {
            return char += char;
        } else {
            return char;
        }
    });

    return newStringArray.join("");
}
if (require.main === module) {
    console.log(doubleConsonants('String')); // "SSttrrinngg"
    console.log(doubleConsonants('Hello-World!')); // "HHellllo-WWorrlldd!"
    console.log(doubleConsonants('July 4th')); // "JJullyy 4tthh"
    console.log(doubleConsonants('')); // ""
};

module.exports = doubleConsonants;