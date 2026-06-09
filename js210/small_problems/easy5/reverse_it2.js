/*
Write a function that takes a string argument containing one or more words
and returns a new string containing the words from the string argument. 
All five-or-more letter words should have their letters in reverse order. 
The string argument will consist of only letters and spaces. 
Words will be separated by a single space.
*/


function reverseWords(string) {
    const words = string.split(" ");
    
    let result = [];
    words.forEach((word) => {
        if (word.length >= 5) { // 5+ letter words -> reverse letter order
            word = word.split("").reverse().join("")
        } 
        result.push(word);
    })

    return result.join(" ");
}


if (require.main === module) {
    console.log(reverseWords('Professional'));             // "lanoisseforP"
    console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
    console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"
};