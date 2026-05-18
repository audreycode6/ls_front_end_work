/*
Write a function that takes a string as an argument, and returns 
the string stripped of spaces from both ends. Do not remove or 
alter internal spaces.

You may use the square brackets ([]) to access a character by index
, and the length property to find the string length. 
However, you may not use any other properties or methods 
from JavaScript's built-in String class.
 */

function trim(str) {
    let firstCharFound = false;
    let firstCharIdx = undefined;
    let lastCharIdx = undefined;

    for (let i = 0; i <= (str.length - 1); i++) {
        // find first nonspace char and store index
        if (!firstCharFound && str[i] !== ' ') {
            firstCharFound = true;
            firstCharIdx = i;
        }
        // after first char is found save the current non space char as last char
        else if (firstCharFound && str[i] !== ' ') {
            lastCharIdx = i;
        }
    }

    if (firstCharIdx != undefined && lastCharIdx != undefined) {
        return str.slice(firstCharIdx, (lastCharIdx + 1))
    }
    else if (lastCharIdx === undefined) {
        return str[firstCharIdx]
    } else return ""   
}


console.log(trim('   a   ')); // "a"
console.log(trim('  abc  '));  // "abc"
console.log(trim('abc   '));   // "abc"
console.log(trim(' ab c'));    // "ab c"
console.log(trim(' a b  c'));  // "a b  c"
console.log(trim('      '));   // ""
console.log(trim(''));         // ""