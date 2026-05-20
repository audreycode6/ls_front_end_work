/*
Rot13 ("rotate by 13 places") is a letter-substitution cipher 
    that translates a String into a new String:

For each character in the original String:

If the character is a letter in the modern English alphabet, 
    change it to the character 13 positions later in the alphabet. 
    Thus, a becomes n. If you reach the end of the alphabet, 
    return to the beginning. Thus, o becomes b.
Letter transformations preserve case. A becomes N while a becomes n.
Don't modify characters that are not letters.
Write a Function, rot13, that takes a String and 
    returns that String transformed by the rot13 cipher. 
    
It's worth noting that rot13 applied twice results in the original string
    This happens since there are 26 characters in the modern English 
    alphabet: 2 sets of 13.
*/
function rot13(string) {
    const UPPERCASE_ASCII_START = "A".charCodeAt();
    const UPPERCASE_ASCII_END = "Z".charCodeAt();
    const LOWERCASE_ASCII_START = "a".charCodeAt();
    const LOWERCASE_ASCII_END = "z".charCodeAt();
    const CIPHER_OFFSET = 13;
    const ALPHABET_LEN = 26;

    let rot13String = '';
    for (let i = 0; i < string.length; i++) {
        let currentChar = string[i];
        let asciiNumeric = currentChar.charCodeAt();
        let isLower = asciiNumeric >= LOWERCASE_ASCII_START && asciiNumeric <= LOWERCASE_ASCII_END;
        let isUpper = asciiNumeric >= UPPERCASE_ASCII_START && asciiNumeric <= UPPERCASE_ASCII_END;
        
        if (isUpper || isLower) {
            asciiNumeric += CIPHER_OFFSET;
            if ( // If you reach the end of the alphabet, return to the beginning.
                (isLower && (asciiNumeric > LOWERCASE_ASCII_END)) || 
                (isUpper && (asciiNumeric > UPPERCASE_ASCII_END))
            ) {
                // you can “wrap around” by going back 26 positions
                asciiNumeric -= ALPHABET_LEN; 
            }
            currentChar = String.fromCharCode(asciiNumeric); // Convert asciinumeric to equivalent ascii char 
        }
        rot13String += currentChar;
    }
    return rot13String;
}
console.log(rot13('Ter')); //Gre
console.log(rot13('Teachers ')); //Grnpuref 
console.log(rot13('Teachers open the door, but you must enter by yourself.'));
// logs: Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.
console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));
// logs:Teachers open the door, but you must enter by yourself.
