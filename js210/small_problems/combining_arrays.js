/*
Write a function that takes two arrays as arguments and 
returns an array containing the union of the values from 
the two. There should be no duplication of values in the 
returned array, even if there are duplicates in the original 
arrays. You may assume that both arguments will always be arrays.
*/

function union(arr1, arr2) {
    // const argumentsArray = arguments;
    let newArr = [];
    for (let index = 0; index < 2; index++) {
        arguments[index].forEach((elem) => {
        if (!newArr.includes(elem)) {
            newArr.push(elem)
        }
    })
    }

    return newArr;
}

if (require.main === module) {
    console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
}

module.exports = union;