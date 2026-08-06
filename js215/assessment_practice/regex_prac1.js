'use strict';

const testString = 'Four score + seven';
// console.log(/[FX]/.test(testString));
// console.log(/[e+]/.test(testString));
// console.log(/[abAB]/.test(testString));
// console.log(/[*+]/.test(testString));

// console.log('s'.match(/s/));
// console.log('sand'.match(/s/));
// console.log('cats'.match(/s/));
// console.log('cast'.match(/s/));
// console.log('Mississippi'.match(/s/));
// console.log('S'.match(/s/));
// console.log('KANSAS'.match(/s/));
/* OUTPUTS:
[ 's', index: 0, input: 's', groups: undefined ]
[ 's', index: 0, input: 'sand', groups: undefined ]
[ 's', index: 3, input: 'cats', groups: undefined ]
[ 's', index: 2, input: 'cast', groups: undefined ]
[ 's', index: 2, input: 'Mississippi', groups: undefined ]
null
null
 */

// console.log("What's that?".match(/\?/));

// console.log('A thought: no:, forget it.'.match(/:/));

// console.log('catalog'.match(/cat/));
// console.log('my catalog'.match(/cat/));

// console.log('Down the rabbit hole.'.match(/(cat|dog|rabbit)/));
// console.log(
//   'The lazy cat, chased by the barking dog,'.match(/(cat|dog|rabbit)/),
// );
/* OUTPUTS:
[
  'rabbit',
  'rabbit',
  index: 9,
  input: 'Down the rabbit hole.',
  groups: undefined
]
[
  'cat',
  'cat',
  index: 9,
  input: 'The lazy cat, chased by the barking dog,',
  groups: undefined
] */

// console.log('snapdragon'.match(/dragon/));

// console.log('pineapples'.match(/(banana|orange|apple|strawberry)/));

// console.log('This,line,has,commas,'.match(/(,| )/));

// console.log('blueberry'.match(/(black|blue)berry/));
/* OUTPUTS:
[
  'blueberry',
  'blue',
  index: 0,
  input: 'blueberry',
  groups: undefined
] */

// console.log('xyx'.match(/[^x]/));
// [ 'y', index: 1, input: 'xyx', groups: undefined ]

// console.log('Kitchen Kaboodle'.match(/[kK]|s/));
// console.log('Reds and blues'.match(/[kK]|s/));
// console.log('kitchen Servers'.match(/[kK]|s/));

//regex that matches any of the strings cat, cot, cut, bat, bot,
//  or but, regardless of case
// let testString2 = `around. I need a robotic cat feeder."`;
// console.log(testString2.match(/cat|cot|cut|bat|bot|but/i));

/*
Base 20 digits include the decimal digits 0 through 9, and
the letters A through J in upper or lowercase. Write
a regex that matches base 20 digits.
 */

// let regexBase20 = /[0-9A-J]/i;
// console.log('0xDEADBEEF'.match(regexBase20));
// console.log('1234.5678'.match(regexBase20));
// console.log('Jamaica'.match(regexBase20));
// console.log('plow ahead'.match(regexBase20));

/* Write a regex that matches any letter except x or X.
 Test it with these strings:
0x1234
Too many XXXXXXXXXXxxxxxxXXXXXXXXXXXX to count.
The quick brown fox jumps over the lazy dog
THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG*/
// let exceptXRegex = /[a-wyz]/i;
// console.log('0x1234'.match(exceptXRegex));
// console.log(
//   'Too many XXXXXXXXXXxxxxxxXXXXXXXXXXXX to count.'.match(exceptXRegex),
// );
// console.log('The quick brown fox jumps over the lazy dog'.match(exceptXRegex));
// console.log(
//   'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG*/'.match(exceptXRegex),
// );

/*
Write a regex that matches any character that is
 not a letter, a space, a carriage return (\n),
 or a line feed (\r). Test it with these strings:
 0x1234abcd
1,000,000,000s and 1,000,000,000s.
THE quick BROWN fox JUMPS over THE lazy DOG!
 */

// let notLetterSpaceReturnOrLinefeed = /[^a-zA-Z \n\r]/;

/*
write a regex that matches a string that looks like a negated
 character class range, e.g., '[^a-z]'. (Your answer should
  match precisely six characters. The match does not include
   the slash characters.) Test it with these strings:

`The regex /[^a-z]/i matches any character that is` +
`not a letter. Similarly, /[^0-9]/ matches any` +
`non-digit while /[^A-Z]/ matches any character` +
`that is not an uppercase letter. Beware: /[^+-<]/` +
`is at best obscure, and may even be wrong.`
 */
let testerString =
  `The regex /[^a-z]/i matches any character that is` +
  `not a letter. Similarly, /[^0-9]/ matches any` +
  `non-digit while /[^A-Z]/ matches any character` +
  `that is not an uppercase letter. Beware: /[^+-<]/` +
  `is at best obscure, and may even be wrong.`;

let negatedCharClassRange = /\[\^[a-zA-Z0-9]-[a-zA-Z0-9]\]/;

console.log(testerString.match(negatedCharClassRange));
