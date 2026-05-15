/* 
Create a function that computes the Greatest Common Divisor 
of two positive integers. 
*/

function gcd(int1, int2) {
    // determine min of the ints -> starting point of greatest divisor
    let minInt = Math.min(int1, int2);

    for (let currentDivisor = minInt; currentDivisor >= 1; currentDivisor--) {
        if (int1 % currentDivisor === 0 && int2 % currentDivisor === 0) {
            return currentDivisor;
        }
    }
    return 1; // never reached but if loop reaches 1 then this is what is returned
}

console.log(gcd(12, 4));   // 4
console.log(gcd(15, 10));  // 5
console.log(gcd(9, 2));    // 1