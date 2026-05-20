/*
Given a string that consists of some words and an 
assortment of non-alphabetic characters, write a 
function that returns that string with all of the 
non-alphabetic characters replaced by spaces. If 
one or more non-alphabetic characters occur in a 
row, you should only have one space in the result 
(i.e., the result string should never have consecutive spaces).
 */
function isAlpha(character) {
    return /^[A-Za-z]+$/.test(character)
}

function cleanUp(string) {
    let cleanString = '';

    for (let idx = 0; idx < string.length; idx++) {
        let currentChar = string[idx];
        if (!isAlpha(currentChar)) {
            if ((cleanString.length === 0) || cleanString[-1] !== " ") {
                cleanString += ' ';
            } else { continue; } // the result string should never have consecutive spaces
        } else {
            cleanString += currentChar;
        }
    }
    console.log(`final: "${cleanString}"`)
    return cleanString;
    
}   
console.log(cleanUp("---what's my +*& line?"));    // " what s my line "