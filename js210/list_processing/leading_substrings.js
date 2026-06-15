/*
Write a function that takes a string argument
and returns a list of substrings of that string.
Each substring should begin with the first letter
of the word, and the list should be ordered from
shortest to longest.
*/

function leadingSubstrings(string) {
  const substrings = [...string].map((_, idx, array) => {
    return array.slice(0, idx + 1);
  });

  return substrings;
}

if (require.main === module) {
  console.log(leadingSubstrings('abc')); // ["a", "ab", "abc"]
  console.log(leadingSubstrings('a')); // ["a"]
  console.log(leadingSubstrings('xyzzy')); // ["x", "xy", "xyz", "xyzz", "xyzzy"]
}
