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
    // loop through the string
    for (let i = 0; i < string.length; i++) {
        // convert char to #
        let currentChar = string[i]
        let asciiNumeric = currentChar.charCodeAt();
        console.log(`current char: ${currentChar} -> ${asciiNumeric}`)
        
        if (asciiNumeric >= LOWERCASE_START && asciiNumeric <= LOWERCASE_END) { // if lowercasechar
            console.log(`   is lower ${currentChar}`)
            let asciiNumericAdd13 = asciiNumer += CIPHER_OFFSET;
            // TODO finish lowercase converions --> maybe store lower and upper condition in variable ..?

            // add 13 to it
            // if it surpasses 122 need to restart at rangestart
                // e.g 124 -> 2 over so should be 98 (rangeStart + (excess - rangeEnd)
        }
        else if (asciiNumeric >= UPPERCASE_START && asciiNumeric <= UPPERCASE_END) {// if uppercase
            console.log(`   is upper ${currentChar}`)
  
                // add 13 to it
                // if it surpased 90 need to restart at rangestart
        } else {
            // non alpha char no need to change just add to string
            rot13String += currentChar;
        }
        console.log(`test final: ${rot13String}`)
    
        //
    }

        


        // convert newasciivalue to char
        // else just add char

}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));
// logs: Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.
// console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));
// logs:Teachers open the door, but you must enter by yourself.