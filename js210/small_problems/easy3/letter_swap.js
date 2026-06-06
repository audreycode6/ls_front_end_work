/*
Given a string of words separated by spaces, write a function that 
swaps the first and last letters of every word.

You may assume that every word contains at least one letter, and that 
the string will always contain at least one word. You may also assume 
that each string contains nothing but words and spaces, and that there 
are no leading, trailing, or repeated spaces.
 */

function swap(string) {
    const stringsArray = string.split(" ");// get list of all words in string

    let swappedStrings = [];
    stringsArray.forEach((word) => {
        let wordLength = word.length;

        if (wordLength > 1) { // swap chars
            let firstChar = word[0];
            let lastChar = word[wordLength - 1];
            let middleChars = word.slice(1, wordLength - 1);

            word = lastChar + middleChars + firstChar;
        }  
        swappedStrings.push(word);
    })
    return swappedStrings.join(" ");
}
swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"

module.exports = { swap };