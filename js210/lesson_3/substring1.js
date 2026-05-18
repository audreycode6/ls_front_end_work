/*
Write a function that returns a substring of a 
string based on a starting index and length.

The start argument is the starting index. If negative, treat it 
as strLength + start where strLength is the length of the string. 
For example, if start is -3, treat it as strLength - 3.
The length argument is the maximum length of the desired substring.
 If length exceeds the number of characters available, just use t
 he available characters.
You may use the square brackets ([]) to access a character by 
index, and the length property to find the string length. 
However, you may not use any other properties or methods 
from JavaScript's built-in String class.
 */

function substr(string, start, length) {
    let stringLength = string.length;

    if (length <= 0) {
        console.log('Returns: ""')
        return ''
    }
    if (start < 0) {
        start += stringLength
    }

    let substr = '';
    for (let i = start; i < (length + start); i++) {
        if (i >= stringLength) { // stop when at max indx of string
            break;
        }
        substr += string[i];
    }
    console.log(`Returns: ${substr}`)
    return substr;
}

let string = 'hello world';

substr(string, 2, 4);      // "llo "
substr(string, -3, 2);     // "rl"
substr(string, 8, 20);     // "rld"
substr(string, 0, -20);    // ""
substr(string, 0, 0);      // ""