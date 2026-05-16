/* 
Write a function that takes a number of rows as the argument nStars 
and logs a square of numbers and asterisks. For example, if 
nStars is 7, log the following pattern: 
*/

function generatePattern(num) {
    // get length of the completed number string
    let fullString = '';
    for (let j = 1; j <= num; j++) {
        fullString += String(j);
    } 
    let maxLen = fullString.length

    // build number string and star string 
    let numberString = '';
    for (let i = 1; i <= num; i++) {
        numberString += String(i);

        let starsCount = maxLen - numberString.length
        let starString = '*'.repeat(starsCount);
        
        let currentPattern = numberString + starString;
        console.log(currentPattern);
    }
}

generatePattern(15);