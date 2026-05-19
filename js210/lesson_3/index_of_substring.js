/*
Write two functions that each take two strings as arguments. 
Their expected behaviors are as follows:

The indexOf function searches for the first instance of a
     substring in firstString that matches the string secondString, 
     and returns the index of the character where that substring begins.

The lastIndexOf function searches for the last instance of 
    a substring in firstString that matches the string secondString, 
    and returns the index of the character where that substring begins.

Both functions return -1 if firstString does not contain the 
    substring specified by secondString.

You may use the square brackets ([]) to access a character by 
    index (as shown below), and the length property to find the 
    string length. However, you may not use any other properties 
    or methods from JavaScript's built-in String class.
 */

function indexOf(firstString, secondString) {
    let buildSub = '';
    let subIndex = undefined;
    let secondStrIdx = 0;
    
    for (let index = 0; index < firstString.length; index++) {
        let firstStrCurrentChar = firstString[index];
        if (firstStrCurrentChar === secondString[secondStrIdx]) {
            if (subIndex === undefined) {
                subIndex = index;
            }
            buildSub += firstStrCurrentChar;
            secondStrIdx += 1;
        if (buildSub === secondString) {
            console.log(`   =>returns: ${subIndex} `)
            return subIndex;
        } 
        } else {
            if (subIndex !== undefined) {
                buildSub = '';
                subIndex = undefined;
                secondStrIdx = 0;
            } 
        }
    }
    console.log(`   =>returns: -1 `)
    return -1;
}

indexOf('Some strings', 's');                      // 5
indexOf('Blue Whale', 'Whale');                    // 5
indexOf('Blue Whale', 'Blute');                    // -1
indexOf('Blue Whale', 'leB');                      // -1


function lastIndexOf(firstString, secondString) {
    return firstString.lastIndexOf(secondString)

}

console.log(lastIndexOf('Some strings', 's'));                  // 11
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1