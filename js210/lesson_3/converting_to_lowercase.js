/*
Write a function that returns a string converted to lowercase.

To convert a single uppercase character to a lowercase character, 
get its ASCII numeric representation from the ASCII table, add 
32 to that number, then convert the number back to a character 
using the same ASCII table. You can use the String.fromCharCode 
and the String.charCodeAt methods for these operations. 

You may use the square brackets ([]) to access a character by 
index, and the length property to find the string 
length. However, you may not use any other properties or 
methods from JavaScript's built-in String class.
*/

function toLowerCase(string) {
    const UPPERCASECHAR_START = 65;
    const UPPERCASECHAR_END = 90;
    const CONVERSION_OFFSET = 32;

    let lowerString = '';
    for (let charIndex = 0; charIndex < string.length; charIndex++) {
        let asciiNumeric = string[charIndex].charCodeAt();
        if (asciiNumeric >= UPPERCASECHAR_START && asciiNumeric <= UPPERCASECHAR_END) { // is uppercase char
            //convert to lower char and add to string
            asciiNumeric += CONVERSION_OFFSET;
            let lowerChar = String.fromCharCode(asciiNumeric);
            lowerString += lowerChar;
        } else lowerString += string[charIndex]
    }
    console.log(`returns: ${lowerString}`);
    return lowerString;
}

toLowerCase('ALPHABET');    // "alphabet"
toLowerCase('123');         // "123"
toLowerCase('abcDEF');      // "abcdef"