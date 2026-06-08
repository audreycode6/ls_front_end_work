/*
Write a function that takes an array as an argument 
and returns an array that contains two elements, 
each of which is an array. Put the first half of 
the original array elements in the first element 
of the return value, and put the second half in 
the second element. If the original array contains 
an odd number of elements, place the middle element 
in the first half array.
*/

function halvsies(arr) {
    const arrLength = arr.length;
    let middle = Math.floor(arrLength / 2);

    // determine if arrLength is even or odd
    if (arrLength % 2 !== 0) { // if odd lenght
        middle += 1;
    }

    const firstHalf = arr.slice(0, middle);
    const secondHalf = arr.slice(middle);

    return [firstHalf, secondHalf];

}

if (require.main === module) {
    console.log(halvsies([1, 2, 3, 4])); // [[1, 2], [3, 4]]
    console.log(halvsies([1, 2, 3, 4])); // [[1, 5, 2], [4, 3]]
    console.log(halvsies([5])); // [[5], []]
    console.log(halvsies([]));  // [[], []]
}

module.exports = halvsies;