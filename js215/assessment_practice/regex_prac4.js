'use strict';

function logRegexMatch(string, regexPattern) {
  console.log(string.match(regexPattern));
}

/*
US-style phone numbers have 10 digits. They are often written
out as 3 groups of digits separated by dashes (-), with 3 digits
in each of the first 2 groups, and 4 in the third group. For
instance: 212-555-1212. They are sometimes stored in databases
without the dashes, though: 2125551212. Write a regular expression
that will match a phone number in either format. The regex should
only match if the phone number is delimited by word boundaries
 */
const patt1 = /\b(\d{3}-\d{3}-\d{4}|\d{10})\b/;
// logRegexMatch('blajhd 212-555-1212 d', patt1); //212-555-1212
// logRegexMatch('2125551212 dfj', patt1); // 2125551212
// logRegexMatch('dhfk2125551212 dfj', patt1); // null
// logRegexMatch('dhfk 212-5551212 dfj', patt1);
// null either has the hyphen format or not

/*
Write a regex that matches any word that begins with
b and ends with an e, and has any number of letters
in-between. You may limit your regex to lowercase
letters. Test it with these strings.


To be or not to be
Be a busy bee
"I brake for animals."
*/
const patt2 = /b[a-z]*e/; ///\bb[a-z]*e\b/
// logRegexMatch('To be or not to be', patt2); // be, be
// logRegexMatch('Be a busy bee', patt2); // "bee"
// logRegexMatch('I brake for animals.', patt2); // "brake"

/*
Write a regex that matches any line of text that
ends with a ?. Test it with these strings.

What's up, doc?
Say what? No way.
?
Who? What? Where? When? How?
*/

const patt3 = /^.*\?$/;
// logRegexMatch("What's up, doc?", patt3); // What's up, doc?
// logRegexMatch('Say what? No way.', patt3); // null
// logRegexMatch('?', patt3); // ?
// logRegexMatch('Who? What? Where? When? How?', patt3); // Who? What? Where? When? How? -- greedy

/*
Write a regex that matches any line of text that ends with
 a ?, but does not match a line that consists entirely of
  a single ?. Test it with the strings from the previous exercise.

*/
const patt4 = /.+\?$/;

// logRegexMatch("What's up, doc?", patt4); // What's up, doc?
// logRegexMatch('Say what? No way.', patt4); // null
// logRegexMatch('?', patt4); // null
// logRegexMatch('Who? What? Where? When? How?', patt4); // Who? What? Where? When? How? -- greedy

/*
Write a regex that matches any line of text that
contains nothing but a URL. For this exercise, a URL
begins with http:// or https://, and continues until it
detects a whitespace character or end of line.
Test your regex with these strings:


https://launchschool.com/
http://mail.google.com/mail/u/0/#inbox
htpps://example.com
Go to http://launchschool.com/
https://user.example.com/a.cgi?a=p&c=0 hello
    https://launchschool.com/

    */
const patt5 = /^https?:\/\/\S*$/;
// logRegexMatch('https://launchschool.com/', patt5); // match
// logRegexMatch('http://mail.google.com/mail/u/0/#inbox', patt5); // match
// logRegexMatch('htpps://example.com', patt5); //null
// logRegexMatch('https://user.example.com/a.cgi?a=p&c=0 hello', patt5); // null
// logRegexMatch('Go to http://launchschool.com/', patt5); //null
// logRegexMatch('    https://launchschool.com/', patt5); // null

/*
Modify your regex from the previous exercise so the URL can have
optional leading or trailing whitespace, but is otherwise on a
line by itself. To test your regex with trailing whitespace,
you must add some spaces to the end of some lines in your sample text.
 */

const patt6 = /^\s*https?:\/\/\S*\s*$/;
// logRegexMatch('https://launchschool.com/  ', patt6); // match
// logRegexMatch('  http://mail.google.com/mail/u/0/#inbox', patt6); // match
// logRegexMatch('htpps://example.com', patt6); //null
// logRegexMatch('https://user.example.com/a.cgi?a=p&c=0 hello', patt6); //null
// logRegexMatch('Go to http://launchschool.com/', patt6); //null
// logRegexMatch('    https://launchschool.com/', patt6); // match

/*

Modify your regex from the previous exercise so the URL
 can appear anywhere on each line, so long as it begins
  at a word boundary.

There should be five matches.
 */

const patt7 = /\bhttps?:\/\/\S*\b/; // TODO
// logRegexMatch('https://launchschool.com/  ', patt7); // match
// logRegexMatch('  http://mail.google.com/mail/u/0/#inbox', patt7); // match
// logRegexMatch('htpps://example.com', patt7); //null
// logRegexMatch('https://user.example.com/a.cgi?a=p&c=0 hello', patt7); // match " https://user.example.com/a.cgi?a=p&c=0"
// logRegexMatch('Go to http://launchschool.com/', patt7); //match "http://launchschool.com/"
// logRegexMatch('    https://launchschool.com/', patt7); // match

/*
Write a regex that matches any word that contains at least
 three occurrences of the letter i.
 Test your regex against
  these strings:

There should be three matches.


Mississippi
ziti 0minimize7
inviting illegal iridium

Note that 0minimize7 is not a word.
 */
const patt8 = /\b([a-z]*i){3}[a-z]*\b/i;
// logRegexMatch('Mississippi', patt8); // "Mississippi"
// logRegexMatch('ziti 0minimize7', patt8);
// logRegexMatch('inviting illegal iridium', patt8); // "inviting" "iridium"

/*
Write a regex that matches the last word in each line
of text. For this exercise, assume that words are any
sequence of non-whitespace characters.

Test your regex against these strings:
What's up, doc?
I tawt I taw a putty tat!
Thufferin' thuccotath!
Oh my darling, Clementine!
Camptown ladies sing this song, doo dah.
 */

const patt9 = /\S+$/;
// logRegexMatch("What's up, doc?", patt9);
// logRegexMatch('I tawt I taw a putty tat!', patt9);
// logRegexMatch("Thufferin' thuccotath!", patt9);
// logRegexMatch('Oh my darling, Clementine!', patt9);
// logRegexMatch('Camptown ladies sing this song, doo dah.', patt9);

/*
Write a regex that matches lines of text that contain at
least 3, but no more than 6, consecutive comma separated numbers.
You may assume that every number on each line is both preceded by
and followed by a comma.

Test your regex against these strings:
,123,456,789,123,345,
,123,456,,789,123,
,23,56,7,
,13,45,78,23,45,34,
,13,45,78,23,45,34,56,
*/

const patt10 = /^,(\d+,){3,6}$/;
// logRegexMatch(',123,456,789,123,345,', patt10); // match
// logRegexMatch(',123,456,,789,123,', patt10); // null
// logRegexMatch(',23,56,7,', patt10); // null
// logRegexMatch(',13,45,78,23,45,34,', patt10); // match
// logRegexMatch(',13,45,78,23,45,34,56,', patt10); // match

/*
Write a regex that matches lines of text that contain
at least 3, but no more than 6, consecutive comma separated
numbers. In this exercise, you can assume that the first number
on each line is not preceded by a comma, and the last number
is not followed by a comma. Test your regex against these strings:

123,456,789,123,345
123,456,,789,123
23,56,7
13,45,78,23,45,34
13,45,78,23,45,34,56
*/
const patt11 = /^(\d+,){2,5}(\d+)$/;
// logRegexMatch('123,456,789,123,345', patt11); // match
// logRegexMatch('123,456,,789,123', patt11); // null
// logRegexMatch('23,56,7', patt11); // match
// logRegexMatch('13,45,78,23,45,34', patt11); // match
// logRegexMatch('13,45,78,23,45,34,56', patt11); // null

/*
Write a regex that matches lines of text that contain either
3 comma separated numbers or 6 or more comma separated numbers.
Test your regex against these strings:
123,456,789,123,345
123,456,,789,123
23,56,7
13,45,78,23,45,34
13,45,78,23,45,34,56
*/

const patt12 = /(^\d+,\d+,\d+$)|(^(\d+,){5,}\d+$)/;
// logRegexMatch('123,456,789,123,345', patt12); // null
// logRegexMatch('123,456,,789,123', patt12); // null
// logRegexMatch('23,56,7', patt12); // match
// logRegexMatch('13,45,78,23,45,34', patt12); // match
// logRegexMatch('13,45,78,23,45,34,56', patt12); // match

/*
 Write a regex that matches HTML h1 header tags, e.g.,

<h1>Main Heading</h1>
<h1>Another Main Heading</h1>
<h1>ABC</h1> <p>Paragraph</p> <h1>DEF</h1><p>Done</p>

and the content between the opening and closing tags.
If multiple header tags appear on one line, your regex
should match the opening and closing tags and the text
content of the headers, but nothing else. You may assume
that there are no nested tags in the text between <h1> and </h1>.
 */
const patt13 = /(<h1>.*?<\/h1>)/;
logRegexMatch('<h1>Main Heading</h1>', patt13); // match
logRegexMatch('<h1>Another Main Heading</h1>', patt13); // match
logRegexMatch('<h1>ABC</h1> <p>Paragraph</p> <h1>DEF</h1><p>Done</p>', patt13); // match : lazy "<h1>ABC</h1>"
