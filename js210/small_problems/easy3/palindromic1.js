/*
Write a function that returns true if the string passed as 
an argument is a palindrome, or false otherwise. A palindrome 
reads the same forwards and backwards. For this problem, the 
case matters and all characters matter.
 */
function isPalindrome(string) {
    // reverse the string and compare to original
    return String(string).split('').reverse().join('') === string;
}
console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true


/*
Write another function that returns true if the string passed 
as an argument is a palindrome, or false otherwise. This time, 
however, your function should be case-insensitive, and should 
ignore all non-alphanumeric characters. If you wish, you may 
simplify things by calling the isPalindrome function you 
wrote in the previous exercise. 
*/
function isRealPalindrome(string) {
    const caseInsensitiveString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
    
    return isPalindrome(caseInsensitiveString)
}

module.exports = { isPalindrome, isRealPalindrome };