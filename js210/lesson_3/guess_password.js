/* 
Write a password guessing program that tracks how 
many times the user enters the wrong password. If the 
user enters the password wrong three times, log 'You 
have been denied access.' and terminate the program. 
If the password is correct, log 'You have successfully 
logged in.' and end the program.
*/
let rlSync = require('readline-sync');

function secure_login_message() {
    let validPw = 'password';
    let pwAttemptCount = 0;

    do {
        let pwInput = rlSync.question('What is the password: ');
        if (pwInput === validPw) {
            return 'You have successfully logged in.'; 
        }
        pwAttemptCount++;
    } while (pwAttemptCount < 3);

    return 'You have been denied access.'; 
}

console.log(secure_login_message());