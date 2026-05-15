/*
Write a program to determine a student’s grade based on the 
average of three scores you get from the user. Use these 
rules to compute the grade:

If the average score is greater than or equal to 90 then 
    the grade is 'A'
If the average score is greater than or equal to 70 and less 
    than 90 then the grade is 'B'
If the average score is greater than or equal to 50 and less 
    than 70 then the grade is 'C'
If the average score is less than 50 then the grade is 'F'
You may assume that all input values are valid positive integers. 
*/
const rlSync = require('readline-sync');
const scoresCount = 3;

function promptForScores() {
    let scoreSum = 0;

    for (let i = 1; i <= scoresCount; i++) {
        let scoreInput = rlSync.question(`Enter score ${i}: `);
        scoreSum += Number(scoreInput);
    }
    return scoreSum / scoresCount; 
}

let scoreAvg = promptForScores();

function getLetterGrade(scoreAvg) {
    switch (true) {
        case (scoreAvg >= 90):
            return 'A';
        case (scoreAvg >= 70 && scoreAvg < 90):
            return 'B';
        case (scoreAvg >= 50 && scoreAvg < 70):
            return 'C';
        default:
            return 'F';
    }
}

let letterGrade = getLetterGrade(scoreAvg);
let resultString = `Based on the average of your 3 scores your letter grade is "${letterGrade}".`
console.log(resultString)