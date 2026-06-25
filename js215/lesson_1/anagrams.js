/*
Write a Function named anagram that takes two arguments:
a word and an array of words. Your function should return an
array that contains all the words from the array argument that
are anagrams of the word argument. For example, given the word
"listen" and an array of candidate words like "enlist", "google",
"inlets", and "banana", the program should return an array that
contains "enlist" and "inlets".
 */

'use strict';

function isAnagram(word, wordToMatch) {
  if (word.length !== wordToMatch.length) {
    return false;
  }

  const sortedWordChars = [...word].sort();
  const sortedWordToMatchChars = [...wordToMatch].sort();

  for (let idx = 0; idx < sortedWordToMatchChars.length; idx += 1) {
    if (sortedWordChars[idx] !== sortedWordToMatchChars[idx]) {
      return false;
    }
  }
  return true;
}
function anagram(word, list) {
  return list.filter((currentWord) => isAnagram(currentWord, word));
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana'])); // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana'])); // [ "enlist", "inlets" ]
