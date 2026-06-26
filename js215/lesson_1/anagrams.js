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
    // check equal in length
    return false;
  }

  // make words into sorted array of its chars
  const sortedWordChars = [...word].sort();
  const sortedWordToMatchChars = [...wordToMatch].sort();

  return compareArrays(sortedWordChars, sortedWordToMatchChars);
}

function compareArrays(arr1, arr2) {
  return arr1.every((elem, idx) => {
    return elem === arr2[idx];
  });
}

function anagram(word, list) {
  return list.filter((currentWord) => isAnagram(currentWord, word));
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana'])); // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana'])); // [ "enlist", "inlets" ]
