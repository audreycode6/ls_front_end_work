/*
Write a function that takes one argument, a positive integer, 
and returns a string of alternating '1's and '0's, always starting 
with a '1'. The length of the string should match the given integer.
 */

function stringy(num) {;
    let newStr = '';
    let currentChar = '1';
    for (let i = 0;  i < num; i++) {
        newStr += currentChar;
        if (currentChar === "1") {
            currentChar = "0";
        } else { currentChar = "1"; }
    }
    return newStr;
}
stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"