/*
Write a function that takes two arguments:
    a string to be split
    a delimiter character
The function logs the split strings to the console,

You may use the square brackets ([]) to access a character by 
index (as shown below), and the length property to find the 
string length. However, you may not use any other properties 
or methods from JavaScript's built-in String class.
*/

function splitString(string, delimiter) {
    if (delimiter === undefined) {
        console.log('ERROR: No delimiter');
        return;
    }
    else if (delimiter === '') {
        for (let i = 0; i < string.length; i++) {
            console.log(string[i]);
        }
        return;
    } 
    else {
        let newString = '';
        for (let i = 0; i < string.length; i++) {
            if (string[i] === delimiter) { // delimiter found: split word
                console.log(newString);
                newString = "";}
            else if (i === (string.length - 1)) { // last character                      
                if (string[i] !== delimiter) {
                    newString += string[i];
                }
                console.log(newString);
            } else newString += string[i];
        }
    }
}


splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello