/*
converting strings to numbers by writing a function that takes 
a positive integer or zero, and converts it to a string representation.

You may not use any of the standard conversion functions 
available in JavaScript, such as String(), 
Number.prototype.toString, or an expression such as '' + number. 
Your function should do this the old-fashioned way and construct 
the string by analyzing and manipulating the number.
 */


function integerToString(num) {
    const NUMBER_STRINGS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    const PLACE_VALUE = 10;

    if (num === 0) {
        return "0"
    }

    let string = '';
    while (num > 0) {
        let currentLastDigit = num % PLACE_VALUE; // num % 10 gives the current last digit

        string = NUMBER_STRINGS[currentLastDigit] + string;
        num = Math.floor(num / PLACE_VALUE); // remove last digit from num
    }
    return string
}


console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"