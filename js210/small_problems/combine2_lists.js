/*
Write a function that combines two arrays passed as arguments, 
and returns a new array that contains all elements from both 
array arguments, with each element taken in alternation.

You may assume that both input arrays are non-empty, and that 
they have the same number of elements.
*/


function interleave(arr1, arr2) {
    let newArr = [];

    for (let index = 0; index < arr1.length; index++) {
        newArr.push(arr1[index], arr2[index]);
    }
    
    return newArr;
}


if (require.main === module) {
    console.log(interleave([1, 2, 3], ['a', 'b', 'c'])) // [1, "a", 2, "b", 3, "c"]
};  