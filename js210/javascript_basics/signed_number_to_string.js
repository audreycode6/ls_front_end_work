/*
extend numberToString function by adding the ability to represent negative numbers.
 */


function integerToString(num) {
    const NUMBER_STRINGS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    const PLACE_VALUE = 10;

    if (num === 0) {
        return "0"
    }

    let string = '';
    while (num > 0) {

        let currentLastDigit = num % PLACE_VALUE; // num % 10 gives the current last digit

        string = NUMBER_STRINGS[currentLastDigit] + string;
        num = Math.floor(num / PLACE_VALUE); // remove last digit from num
    }
    return string
}

function signedIntegerToString(number) {
    if (number === 0) {
        if (Object.is(number, -0)) {
            return "-0"
        }
        return "0"
    }
    else if (number > 0) {
        return "+" + integerToString(number);
    }
    return "-" + integerToString(Math.abs(number))

}
console.log(signedIntegerToString(4321));      // "+4321"
console.log(signedIntegerToString(-123));      // "-123"
console.log(signedIntegerToString(0));         // "0"
console.log(signedIntegerToString(-0));