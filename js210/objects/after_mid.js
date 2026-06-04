/*
We can use the number of minutes before or after midnight to represent 
the time of day. If the number of minutes is positive, the time is 
after midnight. If the number of minutes is negative, the time is 
before midnight.

The timeOfDay function shown below takes a time argument using this 
minute-based format, and returns the time of day in 24-hour format 
("hh:mm"). Reimplement the function using JavaScript's Date object. 
*/

function padWithZeroes(number, length) {
  let numberString = String(number);

  while (numberString.length < length) {
    numberString = `0${numberString}`;
  }
  return numberString;
}

function timeOfDay(numOfMinutes) {
    let date = new Date(0); // initalize a date object set to mindnight 
    date.setUTCMinutes(numOfMinutes); // add arg minutes to date object

    //retrieve hours and minutes from date
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    return `${padWithZeroes(hours, 2)}:${padWithZeroes(minutes, 2)}`;
}



console.log(timeOfDay(0));          // "00:00"
console.log(timeOfDay(-3));         // "23:57"
console.log(timeOfDay(35));         // "00:35"
console.log(timeOfDay(-1437));      // "00:03"
console.log(timeOfDay(3000));       // "02:00"
console.log(timeOfDay(800));        // "13:20"
console.log(timeOfDay(-4231));      // "01:29"