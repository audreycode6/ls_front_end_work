/*
Write a function named checkGoldbach that uses Goldbach's Conjecture to 
log every pair of primes that sum to the number supplied as an argument. 
The conjecture states that "you can express every even integer greater 
than 2 as the sum of two primes". The function takes as its only parameter, 
an integer expectedSum, and logs all combinations of two prime numbers 
whose sum is expectedSum. Log the prime pairs with the smaller number first. 
If expectedSum is odd or less than 4, your function should log null.

Your checkGoldbach function may call the isPrime function you 
wrote for a previous practice problem.
 */

function isPrime(num) {
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

function checkGoldbach(expectedSum) {
    // if arg is odd or less than 4:
    if (expectedSum % 2 !== 0 || expectedSum < 4){
         console.log(null);
        return;
    }
    
    let primePairs = false;
    // check each num starting from 2 and storing its difference (to expectedSum) as addend2
    for (let addend1 = 2; addend1 <= (expectedSum - 1); addend1++) {
        if (isPrime(addend1)) {
            let addend2 = expectedSum - addend1;
            if (addend2 < addend1) { // prevent duplicate pairs from happening
                break;
            }
            if (isPrime(addend2)){
                primePairs = true
                console.log(`${addend1} ${addend2}`);
            } 
        }
    }
    // if no pairs were found
    if (!primePairs) {
        console.log(null);
    }      
}

checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53