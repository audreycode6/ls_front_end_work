/*
Write a function that takes a string, doubles every 
character in the string, and returns the result as a new string.
*/

function repeater(string) {
    const newStringArray = [...string].map((char) => char += char )
    return newStringArray.join("");
}

if (require.main === module ){
    console.log(repeater('Hello')); // "HHeelllloo"
    console.log(repeater('Good job!')); // "GGoooodd  jjoobb!!"
    console.log(repeater('')); // ""
};