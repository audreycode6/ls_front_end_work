/* Write a function that iterates over the integers 
from 1 to 100, inclusive. For multiples of three, 
log "Fizz" to the console. For multiples of five, 
log "Buzz". For numbers which are multiples of both 
three and five, log "FizzBuzz". For all other numbers, 
log the number. */

function fizzBuzz() {
    let message = '';
    for (let num = 1; num <= 100; num++) {
        if (num % 3 === 0 && num % 5 === 0) {
            message = 'FizzBuzz';
        }
        else if (num % 3 === 0) {
            message = 'Fizz';
        }
        else if (num % 5 === 0) {
            message = 'Buzz';
        } else {
            message = num;
        }
        console.log(message)
    }
}

fizzBuzz();