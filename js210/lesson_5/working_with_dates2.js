/*9
Log the values returned from the getFullYear and getYear 
methods. Note how these values differ. Note especially 
that getYear is deprecated: you should avoid using deprecated 
methods as they may one day disappear.
 */

let today = new Date();
console.log(today.getFullYear()); // 2026

console.log(today.getYear()) // 126


/*10
Use the getTime method and log the current date and time in 
total milliseconds since Jan. 1st 1970.
*/     
console.log(today.getTime());

/*11
Create a new date object variable named tomorrow that contains 
a Date object. Initialize the variable by setting it to the 
value of today. You can get the value of today using the getTime 
method. Next, change the date on the tomorrow object to the day 
after today: you should use setDate to change the date. Finally, 
log the tomorrow object with your formattedDate function
 */

let tomorrow = new Date(today.getTime());
console.log(`1: ${tomorrow}`);
tomorrow.setDate(today.getDate() + 1);
console.log(`3: ${tomorrow}`);


/*12
Create a new variable named nextWeek that is a new Date copied 
from the today object. Compare nextWeek and today, and log the 
results. Are they equal? Why or why not?
*/

let nextWeek = new Date(today);
console.log(`${today} VS ${nextWeek}`) // same values 
console.log(`${today === nextWeek}`); // False -> different date objects


/*13
The === operator only returns true with Date objects if the objects 
are the same object. Since we have two different objects 
(with the same values), we must instead compare the values 
represented by those objects. Compare the values returned by 
toDateString to determine whether the two objects are equal. 
Finally, add 7 days to the nextWeek date and compare the two 
objects again. 
*/

console.log(today.toDateString() === nextWeek.toDateString()) // true
nextWeek.setDate(nextWeek.getDate() + 7); // add 7 days to nextWeek
console.log(`${today.toDateString()} VS ${nextWeek.toDateString()}`) 
console.log(`${today.toDateString() === nextWeek.toDateString()}`); 

/*14
Finally, write a function named formatTime that takes a date 
object as an argument and returns a string formatted with the 
hours and minutes as "15:30". Make sure you handle the case where 
the hours or minutes has only one digit: you need to pad the value 
with a leading zero in such cases, e.g., "03:04". You can use the 
getHours and getMinutes methods to obtain the hours and minutes.
 */
function formatTime(dateObj) {
    let hours = dateObj.getHours();
    let minutes = dateObj.getMinutes();

    if (String(hours).length < 2) {
        hours = `0${hours}`;
    }
    if (String(minutes.length) < 2) {
        minutes = `0${minutes}`
    }

    return `${hours}:${minutes}`
}

console.log(today);
console.log(formatTime(today))