function areArraysEqual(array1, array2) {
    if (array1.length !== array2.length) {
        console.log(false)
        return false;
    }

    let arr2Copy = array2.slice();
    for (let i = 0; i< array1.length; i++) {
        let index = arr2Copy.indexOf(array1[i]);
        console.log(`   index: ${index}`)
        if (index >= 0) {
            arr2Copy.splice(index, 1);
            console.log(`   arr2Copy: ${arr2Copy}`)
        } else {
            return false;
        }
    }
    return true;
}

console.log(areArraysEqual([1, 2, 3], [1, 2, 3]));                  // true
console.log(areArraysEqual([1, 2, 3], [3, 2, 1]));                  // true
console.log(areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']));      // true
console.log(areArraysEqual(['1', 2, 3], [1, 2, 3]));                // false
console.log(areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]));            // true
console.log(areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]));            // false
console.log(areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]));            // false
console.log(areArraysEqual([1, 1, 2], [1, 2, 2]));                  // false
console.log(areArraysEqual([1, 1, 1], [1, 1]));                     // false
console.log(areArraysEqual([1, 1], [1, 1]));                        // true
console.log(areArraysEqual([1, '1'], ['1', 1]));                    // true