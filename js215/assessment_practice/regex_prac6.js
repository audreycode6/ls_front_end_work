/*
Write a function that takes a string and returns
 it with every sequence of non-alphabetic characters
  replaced by a single space. There should never be
   two spaces in a row in the result.
 */

/* NOTES
** PROB:
- in: string
- out: return string with every sequence of
 non-alphabetic characters replaced by a single space.
- exp:
  - should never be two spaces in a row in the result.
  -  every sequence of non-alphabetic characters replaced by a single space
    - non alphabetic chars: [^a-zA-Z]

- ?:
  - will there ever be empty string?
    -- there might -> return empty string back

** EXAMPLE
---what's my +*& line? // has lots of nonabc chars throughout
-> "   what s my     line " replace nonabc with whitespace
-> how to remove extra whitespace
  if 2 or more whitespace -> replace by just 1 whitespace
    string.replace(/ {2,}/, " ")
  "   what s my     line "
  " what s my line "


-- "what's my+ line?" // doesnt start with nonabc
"what s my  line "


-- "whAT" // doesnt have any non abc characters
"whAT"


ALGO:
- replace non abc chars with whitespace: alphabeticWord
  word.replace(/[^a-z]/ig, " ")
- replace alphabeticWord to only have single whitespaces: cleanString
  alphabeticWord.replace(/ {2,}/g, " ")

- return cleanString
*/

function cleanUp(string) {
  const alphabeticWord = string.replace(/[^a-z]/gi, ' ');
  return alphabeticWord.replace(/ {2,}/g, ' ');
}

console.log(cleanUp("---what's my +*& line?"));
// ' what s my line '
console.log(cleanUp("what's my+ line?")); // doesnt start with nonabc
//"what s my line "

console.log(cleanUp('whAT')); // doesnt have any non abc characters
// "whAT"

console.log(cleanUp('')); // ""
