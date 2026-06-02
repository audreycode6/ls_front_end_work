/* 1
Use the Math.PI property to create a function that converts radians to degrees.

To go from radians to degrees: multiply by 180, divide by π
*/

function to_degree(radian) {
    return (radian * 180) / Math.PI;
}

to_degree(1) // 57.2958..


/* 2
Create a variable with a value of -180, then use Math.abs 
to log the positive value of the variable. 

Math.abs() returns the absolute value of a number.
*/

let negInt = -180;
let absInt = Math.abs(negInt);
// console.log(absInt); // 180

/* 3
You can calculate the square of a number by multiplying the 
number by itself. Calculating the square root takes more work. 
Fortunately, the Math.sqrt method makes this easier than 
it would otherwise be. Use this method to find the square 
root of 16777216
*/

// console.log(Math.sqrt(16777216)); //4096

/* 4
Use Math.pow to compute and log the value of 16 to the 6th power.
*/

// console.log(Math.pow(16, 6)) // 16777216

/* 5 
There are three methods that perform different types of rounding.
 Math.round takes any decimal value and rounds it to the nearest integer. 
    If the fractional part of the number is less than 0.5, Math.round rounds 
    the value downwards; otherwise, it rounds the value upwards. Note: if the 
    fractional part is exactly 0.5, Math.round rounds upwards. 
 Math.floor rounds any number downward to the next lower integer. 
 Math.ceil rounds any number upward to the next higher integer.

Use the appropriate method on each of these variables to return a value of 50. 
Make sure you use each method once.
*/

let a = 50.72;
let b = 49.2;
let c = 49.86;

// console.log(Math.floor(a));
// console.log(Math.ceil(b));
// console.log(Math.round(c));

/*6
Math.random returns a random floating-point number between 0 and 1, 
excluding the exact value of 1. This isn't helpful on its own, since 
you usually want a random integer between two other integer values. 
Create a function that takes two arguments, a minimum and a maximum 
value, and returns a random integer between those numbers (including 
both of the numbers). Your solution should handle the scenario that 
the user inadvertently swaps the positions of the min and max values 
or the scenario that the min and max values are equal. You may 
assume that the user always provides the min and max values. 
*/

function randomNum(range1, range2) {
    if (range1 === range2) {
        return range1;
    }
    let rangeStart = Math.min(range1, range2);
    let rangeEnd = Math.max(range1, range2);
    return Math.floor(Math.random() * (rangeEnd - rangeStart + 1) + rangeStart);
}