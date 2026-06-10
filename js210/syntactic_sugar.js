/*
write a function that takes 5 string arguments, and returns
an object with 3 properties:

first: the first argument
last: the last argument
middle: the middle 3 arguments as a sorted array
After writing the function, write some code to call the
function. The arguments you provide should come from an array.
You should create local variables named first, last, and
middle from the return value.

Use shorthand syntax wherever you can.
*/

function foo(...arr) {
  let first = arr.shift();
  let last = arr.pop();
  return { first, last, middle: arr.sort() };
}

let arr = [1, 4, 3, 2, 5];
let { first, last, middle } = foo(...arr);
console.log(first);
console.log(last);
console.log(middle);
