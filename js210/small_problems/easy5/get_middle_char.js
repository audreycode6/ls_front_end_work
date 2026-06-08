/*
Write a function that takes a non-empty string argument and returns 
the middle character(s) of the string. If the string has an odd length, 
you should return exactly one character. If the string has an even length, 
you should return exactly two characters.
 */
function centerOf(string) {
    const strLen = string.length;
    const middleIdx = Math.floor((strLen - 1 ) / 2);
    let middleChars = string[middleIdx];

    if (strLen % 2 === 0) { // even len -> 2 middle chars
        middleChars += string[middleIdx + 1];
    }

    return middleChars;
}

if (require.main === module){
    console.log(centerOf('I Love JavaScript')); // "a"
    console.log(centerOf('Launch School')); // " "
    console.log(centerOf('Launch')); // "un"
    console.log(centerOf('Launchschool')); // "hs"
    console.log(centerOf('x')); // "x"
    console.log(centerOf('ab')); // "ab"
};          