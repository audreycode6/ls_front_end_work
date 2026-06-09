/*
Write a function that takes a string argument consisting of a 
first name(s), and a last name, seperated by spaces and returns a new 
string consisting of the last name, a comma, a space, and the first names seperated by spaces.
 */

function swapName(fullNameStr) {
    let fullNameArr = fullNameStr.split(' ');
    const lastName = fullNameArr.pop();
    const firstNames = fullNameArr.join(" ")

    return `${lastName}, ${firstNames}`
}

if (require.main === module) {
    console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
    console.log(swapName('Joe Moe Grow Roberts')) // "Roberts, Joe Moe Grow"
}

module.exports = swapName;