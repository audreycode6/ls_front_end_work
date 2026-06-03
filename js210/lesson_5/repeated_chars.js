/*
Implement a function that takes a String as an argument and 
returns an object that contains a count of the repeated characters.

Note that repeatedCharacters does a bit more than simply count the 
frequency of each character: it determines the counts, but only returns 
counts for characters that have a count of 2 or more. It also ignores 
the case.
 */

function repeatedCharacters(string) {
    let lowerString = string.toLowerCase();
    let stringsCharCount= {};

    // get char count for each char in string
    for (let index = 0; index < string.length; index++) {
        let currentChar = lowerString[index];

        if (!stringsCharCount[currentChar]) {
            stringsCharCount[currentChar] = 0;
        }

        stringsCharCount[currentChar] += 1;
    }

    // filter through stringsCharCount
    for (let key in stringsCharCount) {
        if (stringsCharCount[key] < 2) {
            delete stringsCharCount[key]
        }
    }
    return stringsCharCount;
}

console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }
console.log(repeatedCharacters('BaseBass'));       // { b: 2, a:2, s: 3}