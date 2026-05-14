/*
Write a function that takes a positive integer as an argument, and logs all 
the odd numbers from 1 to the passed in number (inclusive). 
All numbers should be logged on separate lines.
 */
function logOddNumbers(pos_int) {
    for (let i = 1; i <= pos_int; i++) {
        if (i % 2 === 1) {
            console.log(i);
        }
    }
}

logOddNumbers(19);