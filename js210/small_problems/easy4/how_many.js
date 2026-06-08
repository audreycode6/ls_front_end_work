/*
Write a function that counts the number of occurrences 
of each element in a given array. Once counted, log each 
element alongside the number of occurrences.
*/

function countOccurrences(array) {
    let elementCount = {}; 
    array.forEach((elem) => { // key -> unique elem & value -> count of that elem
        if (!Object.hasOwn(elementCount, elem)) {
            elementCount[elem] = 0;
        }
        elementCount[elem] += 1;
    })

    Object.entries(elementCount).forEach(([elem, count]) => {
        console.log(`${elem} => ${count}`);
    })
}

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'suv', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
// suv => 1