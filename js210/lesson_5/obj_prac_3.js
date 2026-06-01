/*
Write a function named copyProperties that takes two Objects 
as arguments. The function should copy all properties from the 
first object to the second. The function should return the 
number of properties copied.
*/

function copyProperties(obj1, obj2) {
    Object.assign(obj2, obj1);
    return Object.keys(obj1).length;
}

let hal = {
  model: 9000,
  enabled: true,
};

let sal = {};
console.log(copyProperties(hal, sal));  // 2
console.log(sal);                       // { model: 9000, enabled: true }