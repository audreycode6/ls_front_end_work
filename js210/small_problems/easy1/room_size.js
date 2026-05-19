/*
Build a program that asks the user to enter the length 
and width of a room in meters, and then logs the area 
of the room to the console in both square meters and square feet.

Note: 1 square meter == 10.7639 square feet

Do not worry about validating the input at this time. 
Use the readlineSync.prompt method to collect user input.
*/
let rlSync = require('readline-sync');

const SQFT_TO_METERS = 10.7639;

let length = rlSync.question('Enter the length of the room in meters:\n');
let width = rlSync.question('Enter the width of the room in meters:\n');

let roomSizeSqMeters = Number(length) * Number(width);
let roomSizeSqFt = roomSizeSqMeters * SQFT_TO_METERS;

console.log(`The area of the room is ${roomSizeSqMeters} square meters (${roomSizeSqFt} square feet).`)