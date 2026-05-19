/*
Write a function that takes two strings as arguments, determines the 
length of the two strings, and then returns the result of concatenating 
the shorter string, the longer string, and the shorter string once 
again. You may assume that the strings are of different lengths.
*/

function shortLongShort(string1, string2) {
    if (string1.length > string2.length) { // string1 is longer
        return string2 + string1 + string2
    } else { // string2 is longer
        return string1 + string2 + string1
    }
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"