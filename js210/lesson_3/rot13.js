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
    // uppercase ascii range: 65-90
    const UPPERCASE_START = 65;
    const UPPERCASE_END = 90;
    //lowercase ascii range 97-122
    const LOWERCASE_START = 97;
    const LOWERCASE_END = 122;
    const CIPHER_OFFSET = 13;

    let rot13String = '';
    for (let i = 0; i < string.length; i++) {
        let currentChar = string[i]
        let asciiNumeric = currentChar.charCodeAt();
        let isLower = asciiNumeric >= LOWERCASE_START && asciiNumeric <= LOWERCASE_END;
        let isUpper = asciiNumeric >= UPPERCASE_START && asciiNumeric <= UPPERCASE_END;
        
        if (isLower) { // if lowercasechar
            let asciiNumericAdd13 = asciiNumeric += CIPHER_OFFSET;
            if (asciiNumericAdd13 > LOWERCASE_END) { // reassign to valid upper num
                asciiNumericAdd13 = (LOWERCASE_START - 1) + (asciiNumericAdd13 - LOWERCASE_END);
            }
            let newChar = String.fromCharCode(asciiNumericAdd13);
            rot13String += newChar;
        }
            
        else if (isUpper) {// if uppercase
            let asciiNumericAdd13 = asciiNumeric += CIPHER_OFFSET;
            if (asciiNumericAdd13 > UPPERCASE_END) { // reassign to proper upper num
                asciiNumericAdd13 = (UPPERCASE_START - 1) + (asciiNumericAdd13 - UPPERCASE_END);
            }
            let newChar = String.fromCharCode(asciiNumericAdd13);
            rot13String += newChar;
        } else {// non alpha char no need to change just add to string
            rot13String += currentChar;
        }
    }
    return rot13String;
}
console.log(rot13('Ter')); //Gre
console.log(rot13('Teachers ')); //Grnpuref 
console.log(rot13('Teachers open the door, but you must enter by yourself.'));
// logs: Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.
console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));
// logs:Teachers open the door, but you must enter by yourself.