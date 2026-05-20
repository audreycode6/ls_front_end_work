/*
Madlibs is a simple game where you create a story template 
with "blanks" for words. You, or another player, then 
construct a list of words and place them into the story, 
creating an often silly or funny story as a result.

Create a simple madlib program that prompts for a noun, a verb, 
an adverb, and an adjective, and injects them into a story 
that you create.
*/
const RL_SYNC = require('readline-sync');
function madLib() {
    let noun = RL_SYNC.question(`Enter a noun: `);
    let verb = RL_SYNC.question(`Enter a verb: `);
    let adjective = RL_SYNC.question(`Enter an adjective: `);
    let adverb = RL_SYNC.question(`Enter an adverb: `);

    console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`)  
}


madLib();

/* EXAMPLE
Enter a noun: dog
Enter a verb: walk
Enter an adjective: blue
Enter an adverb: quickly

// console output
Do you walk your blue dog quickly? That's hilarious! */
