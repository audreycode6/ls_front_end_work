/*
the time of day can be represented as the number of minutes 
before or after midnight. If the number of minutes is positive, 
the time is after midnight. If the number of minutes is negative, 
the time is before midnight.

The two functions below do the reverse of the previous exercise. 
They take a 24-hour time argument and return the number of minutes 
before or after midnight, respectively. Both functions should return 
a value between 0 and 1439 (inclusive). Refactor the functions using 
the Date object.
*/

const MINUTES_PER_HOUR = 60;
const MILLISECONDS_PER_MINUTE = MINUTES_PER_HOUR * 1000;
const MINUTES_PER_DAY = MINUTES_PER_HOUR * 24;
const DATE_PART = 'June 4, 2026';

function afterMidnight(timeStr) {
    let midnight = new Date(`${DATE_PART} 00:00`)
    let date = new Date(`${DATE_PART} ${timeStr}:00`)// make date object from time

    return (date.getTime() - midnight.getTime()) / MILLISECONDS_PER_MINUTE;
}

function beforeMidnight(timeStr) {
  let deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeStr);
  if (deltaMinutes === MINUTES_PER_DAY) {
    deltaMinutes = 0;
  }

  return deltaMinutes;
}


console.log(afterMidnight('00:00'));       // 0
console.log(beforeMidnight('00:00'));      // 0
console.log(afterMidnight('12:34'));       // 754
console.log(beforeMidnight('12:34'));      // 686