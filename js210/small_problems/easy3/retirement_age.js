/*
Build a program that logs when the user will retire and how many 
more years the user has to work until retirement.
*/

const RL_SYNC = require('readline-sync');
function retirementTracker() {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();

    let age = Number(RL_SYNC.question("What is your age? "));
    let retirementAge = Number(RL_SYNC.question("At what age would you like to retire? "));

    let yearsUntilRetirement = retirementAge - age;
    let retirementYear = currentYear + yearsUntilRetirement;
    
    console.log(`\nIt's ${currentYear}. You will retire in ${retirementYear}.`)
    console.log(`You have only ${yearsUntilRetirement} years of work to go!`);
}

retirementTracker();

/* EX output:
What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go! 
*/