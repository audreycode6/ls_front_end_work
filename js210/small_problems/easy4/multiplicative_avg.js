/*
Write a function that takes an array of integers as input, multiplies 
all of the integers together, divides the result by the number of 
entries in the array, and returns the result as a string with the 
value rounded to three decimal places.
*/

function showMultiplicativeAverage(arr) {
    let product = 1;
    arr.forEach((num) => {
        product *= num
    })

    return (product / arr.length).toFixed(3);
}

if (require.main === module) {
    console.log(showMultiplicativeAverage([3, 5])); // "7.500"
    console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17])); // "28361.667"
};