/*
Write a program that solicits six numbers from the user 
and logs a message that describes whether the sixth number 
appears among the first five numbers.
*/

const RL_SYNC = require('readline-sync');

function search6() {
    let num1 = RL_SYNC.question(`Enter the 1st number: `)
    let num2 = RL_SYNC.question(`Enter the 2nd number: `)
    let num3 = RL_SYNC.question(`Enter the 3rd number: `)
    let num4 = RL_SYNC.question(`Enter the 4th number: `)
    let num5 = RL_SYNC.question(`Enter the 5th number: `)

    let nums1To5 = [num1, num2, num3, num4, num5];
    let lastNum = RL_SYNC.question(`Enter the last number: `)

    let includesLast = nums1To5.includes(lastNum);
    let message = 'does';
    if (!includesLast) {
        message += " not"
    }

    console.log(`The number ${lastNum} ${message} appear in [${nums1To5}].`)
}


search6();

