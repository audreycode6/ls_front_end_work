/*
write a function that takes a floating point number representing
an angle between 0 and 360 degrees and returns a string representing 
that angle in degrees, minutes, and seconds. You should use a degree 
symbol (°) to represent degrees, a single quote (') to represent 
minutes, and a double quote (") to represent seconds. There are 
60 minutes in a degree, and 60 seconds in a minute.

Note: You can use the following constant to represent the degree symbol:
const DEGREE = '\u00B0';
*/

function dms(floatNumber) {
    const DEGREE = '\u00B0';
    const MINUTES_AND_SECONDS = 60;
    const SECONDS_PER_DEGREE = MINUTES_AND_SECONDS * MINUTES_AND_SECONDS;

    const degreesInt = Math.floor(floatNumber);
    const minutes = Math.floor((floatNumber - degreesInt) * MINUTES_AND_SECONDS);
    const seconds = Math.floor(
        (floatNumber - degreesInt - (minutes / MINUTES_AND_SECONDS)) *
        SECONDS_PER_DEGREE
    );

    return `${degreesInt}${DEGREE}${padZeroes(minutes)}'${padZeroes(seconds)}"`;;
}

function padZeroes(number) {
    const numString = String(number);
    return numString.length < 2 ? (`0${numString}`) : numString;

}

// All test cases should return true
console.log(dms(30) === "30°00'00\"");
console.log(dms(76.73) === "76°43'48\"");
console.log(dms(254.6) === "254°35'59\"");
console.log(dms(93.034773) === "93°02'05\"");
console.log(dms(0) === "0°00'00\"");
console.log(dms(360) === "360°00'00\"" || dms(360) === "0°00'00\"");