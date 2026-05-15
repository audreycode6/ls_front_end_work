/* 
Write a function named isXor that takes two arguments, 
and returns true if exactly one argument is truthy, 
false otherwise. Your function should work with the boolean 
values of true and false, but also any JavaScript values 
based on their "truthiness". 
*/

let isXor = (arg1, arg2) => {
    bool1 = !!arg1;
    bool2 = !!arg2;

    if (bool1 && bool2) {
        return false;
    }

    return bool1 || bool2;
}


console.log(isXor(false, true));     // true
console.log(isXor(true, false));     // true
console.log(isXor(false, false));    // false
console.log(isXor(true, true));    // false
console.log(isXor(false, 3));        // true
console.log(isXor('a', undefined));  // true
console.log(isXor(null, ''));        // false
console.log(isXor('2', 23));         // false