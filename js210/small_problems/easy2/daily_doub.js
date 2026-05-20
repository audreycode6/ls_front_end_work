/*
Write a function that takes a string argument and 
returns a new string that contains the value of the 
original string with all consecutive duplicate characters 
collapsed into a single character. */

function crunch(string) {
    // track the past char if current char == last char then skip
    let crunchedString = "";
    let pastChar = undefined;
    for (let idx = 0; idx < string.length; idx++) {
        if (idx === 0) { // first char will not have past char to compare to
            pastChar = string[idx];
            crunchedString += pastChar;
            continue;
        }
        let currentChar = string[idx];
        if (currentChar === pastChar) {
            pastChar = currentChar;
            continue;
        }
        crunchedString += currentChar;
        pastChar = currentChar;
    }
    return crunchedString;
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""