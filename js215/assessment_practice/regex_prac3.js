'use strict';

function logRegexMatch(string, pattern) {
  console.log(string.match(pattern));
}

const patt1 = /^c.t/i;
// logRegexMatch('cat', patt1); // ['cat']
// logRegexMatch('cot\n', patt1); // ['cot']
// logRegexMatch('CATASTROPHE', patt1); // ['CAT']
// logRegexMatch('WILDCAUGHT', patt1); // null
// logRegexMatch('wildcat\n', patt1); // null
// logRegexMatch('-CET-', patt1); // null
// logRegexMatch('Yacht', patt1); // null

const patt2 = /c.t$/i;
// logRegexMatch('cat', patt2); // ['cat']
// logRegexMatch('cot\n', patt2); // null
// logRegexMatch('CATASTROPHE', patt2); // null
// logRegexMatch('WILDCAUGHT', patt2); // null
// logRegexMatch('wildcat\n', patt2); // null
// logRegexMatch('-CET-', patt2); // null
// logRegexMatch('Yacht', patt2); // ['cht']

const patt3 = /c.t$/gim;
// logRegexMatch('cat', patt3); // ['cat']
// logRegexMatch('cot\n', patt3); // ['cot\n']
// logRegexMatch('CATASTROPHE', patt3); // null
// logRegexMatch('WILDCAUGHT', patt3); // null
// logRegexMatch('wildcat\n', patt3); // ['cat\n']
// logRegexMatch('-CET-', patt3); // null
// logRegexMatch('Yacht', patt3); // ['cht']

const patt4 = /^c.t/gim;
let text = 'cat\ncot\nCATASTROPHE\nWILDCAUGHT\n' + 'wildcat\n-GET-\nYacht';
// logRegexMatch(text, patt3); // [ 'cat', 'cot', 'cat', 'cht' ]
// logRegexMatch(text, patt4); // ['cat', 'cot', 'CAT']

/*
Write a regex that matches the word The when
it occurs at the beginning of a line.
Test it with these strings:

  The lazy cat sleeps.
  The number 623 is not a word.
  Then, we went to the movies.
  Ah. The bus has arrived.
*/
const patt5 = /^The /; // OR /^The\b/;
// logRegexMatch('The lazy cat sleeps.', patt5); // ['The']
// logRegexMatch('The number 623 is not a word.', patt5); // ['The']
// logRegexMatch('Then, we went to the movies.', patt5); // null
// logRegexMatch('Ah. The bus has arrived.', patt5); // null

/*
Write a regex that matches the word cat when it occurs at the end of a line.
Test it with these strings:

  The lazy cat sleeps
  The number 623 is not a cat
  The Alaskan drives a snowcat
*/
const patt6 = /\bcat$/;
// logRegexMatch('The lazy cat sleeps', patt6); // null
// logRegexMatch('The number 623 is not a cat', patt6); // ['cat', ...]
// logRegexMatch('The Alaskan drives a snowcat', patt6); // null

/*
Write a regex that matches any three-letter word;
a word is any string comprised entirely of letters.
You can use these test strings.

  reds and blues
  The lazy cat sleeps.
  The number 623 is not a word. Or is it?
 */
const patt7 = /\b[a-z][a-z][a-z]\b/i;
// logRegexMatch('reds and blues', patt7); // "red"
// logRegexMatch('The lazy cat sleeps.', patt7); // "The" , "cat"
// logRegexMatch('The number 623 is not a word. Or is it?', patt7); //"The", "not"

/*
challenge: Write a regex that matches an entire
 line of text that consists of exactly 3 words as follows:

The first word is A or The.
There is a single space between the first and second words.
The second word is any 4-letter word.
There is a single space between the second and third words.
The third word -- the last word -- is either dog or cat.
Test your solution with these strings:

A grey cat
A blue caterpillar
The lazy dog
The white cat
A loud dog
--A loud dog
Go away dog
The ugly rat
The lazy, loud dog
*/

const patt8 = /^(A|The) [a-zA-Z][a-zA-Z][a-zA-Z][a-zA-Z] (dog|cat)$/;
logRegexMatch('A grey cat', patt8); // match
logRegexMatch('A blue caterpillar', patt8); // null
logRegexMatch('The lazy dog', patt8); // match
logRegexMatch('The white cat', patt8); // null
logRegexMatch('A loud dog', patt8); // match
logRegexMatch('--A loud dog', patt8); // null
logRegexMatch('Go away dog', patt8); // null
logRegexMatch('The ugly rat', patt8); // null
logRegexMatch('The lazy, loud dog', patt8); // null
