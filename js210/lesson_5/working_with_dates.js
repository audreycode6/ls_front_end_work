/*1
Create a variable named today with the current date and time as its value.
 */

let today = new Date();
console.log(today);

/*2
Log a string, "Today's day is 5", that tells the current day 
of the week as a number between 0 and 6 (Sunday is 0, Saturday is 6). 
Use the getDay method to obtain the number of the day of week.
*/

let currentDayOfWeek = today.getDay();
console.log(`Today's date is ${currentDayOfWeek}`);

/*3
The getDay method, like many of the get methods on the date object,
returns a zero-based index of the current day of week instead of 
the day name. This enables support for multiple locales and 
formats. Modify the output message of the previous problem 
to show the 3-letter day name abbreviation. 
*/

let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let currentDayOfWeekString = daysOfWeek[currentDayOfWeek]
console.log(`Today's date is ${currentDayOfWeekString}`);

/*4
Add the calendar date (the day of month) to our log message: 
"Today's date is Mon, the 6th". Use the getDate method to obtain 
the current day of month. 
Don't worry about using different suffixes for numbers that end with 1, 2, or 3 
just yet
*/
let dayOfMonth = today.getDate();
console.log(`Today's date is ${currentDayOfWeekString}, the ${dayOfMonth}`);

/* 6
Change your output to include the value from the getMonth method. 
Thus, the logged string will read "Today's date is Mon, 11 6th", 
where 11 is the month number returned by getMonth 
*/

let monthNumber = today.getMonth();
console.log(`Today's date is ${currentDayOfWeekString}, ${monthNumber} ${dayOfMonth}`);

/*7
 make the month readable. convert the month number in the output 
 string to a 3-letter month name abbreviation.
*/

let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
let monthString = months[monthNumber];
console.log(`Today's date is ${currentDayOfWeekString}, ${monthString} ${dayOfMonth}`);


/*8
refactor the code into a few formatting functions that we can call 
from anywhere in our code. Create formattedMonth and formattedDay 
functions to format the month and day, then write a formattedDate 
function that pulls everything together and logs the fully formatted date.
 */

function formattedMonth(dateObject) {
    return months[dateObject.getMonth()];
}

function formattedDay(dateObject) {
    return daysOfWeek[dateObject.getDay()];
}

function formattedDate(dateObject) {
    return `Today's date is ${formattedDay(dateObject)}, ${formattedMonth(dateObject)} ${dateObject.getDate()}`
}

let testDate = new Date();
console.log(formattedDate(testDate))