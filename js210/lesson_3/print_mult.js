/* 
Write a function logMultiples that takes one argument number. 
It should log all multiples of the argument between 0 and 100 
(inclusive) that are also odd numbers. Log the values 
in descending order.

You may assume that number is an integer between 0 and 100.
*/

function logMultiples(number) {
    if (number === 0) return;

    let multiple = 0;
    let multiples = []

    for (let i = 0; multiple < 100; i++) {
        multiple = number * i;
        if (multiple > 100) break;

        if (multiple % 2 !== 0) {
            multiples.push(multiple);
        }
    }

    while (multiples.length > 0) {
        console.log(multiples.pop());
    }
}

logMultiples(17);

logMultiples(21);