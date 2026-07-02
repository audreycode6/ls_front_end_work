/*
Write a function that takes one argument, a positive integer,
and returns the sum of its digits. Do this without using for,
while, or do...while loops - instead, use a series of method
calls to perform the sum.
*/
function sum(number) {
  return [...String(number)].reduce(
    (accum, digit) => (accum += Number(digit)),
    0,
  );
}

module.exports = { sum };
