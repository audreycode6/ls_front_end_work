/* 
Write a function logMultiples that takes one argument number. 
It should log all multiples of the argument between 0 and 100 
(inclusive) that are also odd numbers. Log the values 
in descending order.

You may assume that number is an integer between 0 and 100.
*/

function logMultiples(number) {
   for (let multiplier = 100; multiplier >= number; multiplier--) {
    if (multiplier % 2 === 1 && multiplier % number === 0) {
        console.log(multiplier);
    }
   }
}

logMultiples(17);

logMultiples(21);