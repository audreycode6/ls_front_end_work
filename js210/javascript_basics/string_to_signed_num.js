/*
The previous exercise mimics the parseInt function to a lesser extent. 
In this exercise, you're going to extend that function to work with 
signed numbers.

Write a function that takes a string of digits and returns the appropriate 
number as an integer. The string may have a leading + or - sign; if the 
first character is a +, your function should return a positive number; 
if it is a -, your function should return a negative number. 
If there is no sign, return a positive number.

You may assume the string will always contain a valid number.
*/

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

/* rebuild func but include condition for symbol */
// function stringToSignedInteger(string) {
//     const DIGITS = {0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9}
//     let num = 0;
//     let placeValue = 1;


//    for (let i = string.length - 1; i >= 0; i--) {
//         let currentDigit = DIGITS[string[i]]; // returns undefined if not found in DIGITS

//         if (currentDigit === undefined) { // symbol (-, +) 
//             let symbol = string[i];
//             if (symbol === '-') {
//                 return num * -1;
//             } else { // symbol is "+"
//                 break;
//             }
//         }
//         num += (currentDigit * placeValue);
//         placeValue *= 10;
//    }
//    return num
// }


/* reuse strinToInteger and just identify the 
value of the 1st character in string */
function stringToSignedInteger(string) {
    let firstChar = string[0];
    switch (firstChar) {
        case '-' : return -stringToInteger(string.slice(1));
        case '+' : return stringToInteger(string.slice(1));
        default : return stringToInteger(string);
    }
}


console.log(stringToSignedInteger('4321'));      // 4321
console.log(stringToSignedInteger('-570'));      // -570
console.log(stringToSignedInteger('+100'));      // 100