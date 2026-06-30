/*
Write a function that takes a string as an argument and
returns true if the string contains properly balanced
parentheses, false otherwise. Parentheses are properly
balanced only when '(' and ')' occur in matching pairs,
with each pair starting with '('.
*/

function isBalanced(string) {
  let parenthesesCount = 0;

  for (let idx = 0; idx < string.length; idx += 1) {
    let currentChar = string[idx];

    if (currentChar === '(') {
      parenthesesCount += 1;
    } else if (currentChar === ')') {
      parenthesesCount -= 1;
    }

    if (parenthesesCount < 0) {
      return false;
    }
  }

  return parenthesesCount === 0;
}

console.log(isBalanced('What (is) this?')); // true
console.log(isBalanced('What is) this?')); // false
console.log(isBalanced('What (is this?')); // false
console.log(isBalanced('((What) (is this))?')); // true
console.log(isBalanced('((What)) (is this))?')); // false
console.log(isBalanced('Hey!')); // true
console.log(isBalanced(')Hey!(')); // false
console.log(isBalanced('What ((is))) up(')); // false
