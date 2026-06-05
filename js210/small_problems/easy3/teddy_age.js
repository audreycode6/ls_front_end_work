/*
Build a program that randomly generates Teddy's age, 
and logs it to the console. Have the age be a random 
number between 20 and 200 (inclusive
 */

function teddyAge() {
    const MIN_AGE = 20;
    const MAX_AGE = 200;
    let difference = MAX_AGE - MIN_AGE + 1;

    let age = Math.floor(Math.random() * difference + MIN_AGE)

    return `Teddy is ${age} years old!`;
}

for (let i = 0; i < 20; i++) {
    console.log(teddyAge());
}

//Teddy is 69 years old!