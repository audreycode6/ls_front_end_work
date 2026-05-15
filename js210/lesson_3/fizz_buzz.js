/* Write a function that iterates over the integers 
from 1 to 100, inclusive. For multiples of three, 
log "Fizz" to the console. For multiples of five, 
log "Buzz". For numbers which are multiples of both 
three and five, log "FizzBuzz". For all other numbers, 
log the number. */

function fizzBuzz(max=100) {
    let message = '';

    for (let num = 1; num <= max; num++) {
        let multipleOf3 = num % 3 === 0;
        let multipleOf5 = num % 5 === 0;

        if (multipleOf3 && multipleOf5) {
            message = 'FizzBuzz';
        }
        else if (multipleOf3) {
                message = 'Fizz';
            } 
        else if (multipleOf5) {
                message = 'Buzz';
            } else {
            message = num;
        }

        console.log(message)
    }
}

fizzBuzz(20);