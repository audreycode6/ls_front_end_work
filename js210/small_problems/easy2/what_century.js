/*
Write a function that takes a year as input and 
returns the century. The return value should be a 
string that begins with the century number, and ends 
with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

New centuries begin in years that end with 01. So, the 
years 1901 - 2000 comprise the 20th century. 
*/

function determineCentury(year) {
    return Math.ceil(year / 100);
}

function numberSuffix(number) {
    const TH_NUMS = [11, 12, 13];
    let lastTwoDigits = number % 100;
    if (TH_NUMS.includes(lastTwoDigits)) {
        return 'th';
    }

    let lastDigit = number % 10;
    switch(lastDigit) { 
        case 1:
            return 'st';
        case 2: 
            return 'nd';
        case 3:
            return 'rd';
        default:
            return 'th';
    }
}

function century(year) {
    let centuryNum = determineCentury(year);
    let centuryEnding = numberSuffix(centuryNum);
    console.log(`returns: ${centuryNum}${centuryEnding}`)
    return  `${centuryNum}${centuryEnding}`;
}

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"