/* 
Write a function that takes a number argument, and 
returns true if the number is prime, or false if it is not.
You may assume that the input is always a non-negative integer. 

A prime number is a number that has no positive divisors 
other than 1 and itself. By definition, neither 0 nor 1 is 
prime. The easiest way to make this determination is to 
loop from 2 up to but not including the number you are testing
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