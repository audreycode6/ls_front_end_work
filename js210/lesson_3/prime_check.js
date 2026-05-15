/* 
Write a function that takes a number argument, and 
returns true if the number is prime, or false if it is not.
You may assume that the input is always a non-negative integer. 

To determine if a number \(n\) is prime, check if it is 
divisible by any integer between 2 and its square root 
*/

let isPrime = (num) => {
    if (num < 2) { // 0 and 1 are not prime
        return false;
    }

    for (let divisor = 2; divisor < num; divisor++) {
        if (num % divisor === 0) { // if divisible by divisor it is not prime
            return false;
        }
    }
    return true;

}

console.log(isPrime(1)); 
console.log(isPrime(2)); 
console.log(isPrime(3)); 
console.log(isPrime(43)); 
console.log(isPrime(55)); 
console.log(isPrime(0)); 