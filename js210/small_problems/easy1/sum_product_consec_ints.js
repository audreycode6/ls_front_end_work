/*
Write a program that asks the user to enter an integer 
greater than 0, then asks if the user wants to determine 
the sum or the product of all numbers between 1 and 
the entered integer, inclusive. 
*/
let rlSync = require('readline-sync');
let integer = parseFloat(rlSync.question("Please enter an integer greater than 0: "));
let operation = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product. ').toLowerCase();

let result = undefined;
let allNumsInclusive = []
for (let num = 1; num <= integer; num++) {
    allNumsInclusive.push(num);
}

if (operation === 's') {
    result = allNumsInclusive.reduceRight((acc, curr) => acc + curr, 0);
    operation = 'sum';
}
else if (operation === 'p') {
    result = allNumsInclusive.reduce((acc, curr) => acc * curr, 1);
    operation = 'product';
} else {
    console.log(`Invalid operation: ${operation}, expecting "s" or "p".`);
    process.exit(1);
}
console.log(`The ${operation} of the integers between 1 and ${integer} is ${result}.`);
