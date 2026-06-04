/*
implementing our own parseInt function that converts a string of 
numeric characters (including an optional plus or minus sign) to a number.

The function takes a string of digits as an argument, and returns the 
appropriate number. Do not use any of the built-in functions for 
converting a string to a number type.

For now, do not worry about leading + or - signs, nor should you worry 
about invalid characters; assume all characters will be numeric.
*/


/* using implicit coersion of string to num */
// function stringToInteger(string) {
//     let placeValue = 1;
//     let number = 0;

//     for (let index = string.length - 1; index >= 0; index--) {
//         let currentDigit = string[index] 
//         // multiplying string and num implicitely coerses to number type
//         number += (currentDigit * placeValue); 
//         placeValue *= 10;
//     }

//     return number;
// }


function stringToInteger(string) {
    // object of digits
    const DIGITS = {0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9}
    let num = 0;
    let placeValue = 1;


   for (let i = string.length - 1; i >= 0; i--) {
        let currentDigit = DIGITS[string[i]];
        num += (currentDigit * placeValue);
        placeValue *= 10;
   }
   return num

}


console.log(stringToInteger('015'));        // 15
console.log(stringToInteger('4321'));      // 4321
console.log(stringToInteger('570'));       // 570