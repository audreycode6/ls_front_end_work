/*
Write a function named wordCount that takes a single String 
as an argument. The function should return an Object that 
contains the counts of each word that appears in the provided 
String. In the returned Object, you should use the words as 
keys, and the counts as values.
*/


function wordCount(string) {
    let stringsLengths = {};
    let words = string.split(" ");

    for (let index = 0; index < words.length; index++) {
        let currentString = words[index];

        if (stringsLengths[currentString]) { // if current string exists
            stringsLengths[currentString] += 1;
        }
        else {
            stringsLengths[currentString] = 1;
        }
    }
    return stringsLengths;
}

console.log(wordCount('box car cat bag box'));  // { box: 2, car: 1, cat: 1, bag: 1 }