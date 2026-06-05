/*
write a makeDoubler function that takes a caller name 
as an argument, and returns a function that has the same
behavior as doubler, but with a preset caller. 
*/

function makeDoubler(caller) {
  return number => { // arrow way
    console.log(`This function was called by ${caller}.`);
    return number + number;
  }
}


const doubler = makeDoubler('Victor');
console.log(doubler(5));                             // returns 10
// logs:
// This function was called by Victor.