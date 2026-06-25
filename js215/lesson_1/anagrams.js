/*
Write a Function named anagram that takes two arguments:
a word and an array of words. Your function should return an
array that contains all the words from the array argument that
are anagrams of the word argument. For example, given the word
"listen" and an array of candidate words like "enlist", "google",
"inlets", and "banana", the program should return an array that
contains "enlist" and "inlets".
 */

function isAnagram(word, wordToMatch) {
  if (word.length === wordToMatch.length) {
    let sortedWordChars = [...word].sort();
    let sortedWordToMatchChars = [...wordToMatch].sort();

    for (let idx = 0; idx < sortedWordToMatchChars.length; idx += 1) {
      if (sortedWordChars[idx] !== sortedWordToMatchChars[idx]) {
        return false;
      }
    }
    return true;
  }
  return false;
}
function anagram(word, list) {
  // filter list if currWord is anagram
  let anagrams = list.filter((currentWord) => isAnagram(currentWord, word));
  return anagrams;
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana'])); // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana'])); // [ "enlist", "inlets" ]
