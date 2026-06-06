/*
Modify the wordSizes function from the previous exercise to 
exclude non-letters when determining word size. For instance, 
the word size of "it's" is 3, not 4.
*/
function removeNonLettersFromWords(string) {
    const strings = string.split(" ");

    return strings.map(word => word.replace(/[^a-zA-Z]/g, ""));
}

function wordSizes(string) {
    let wordCountObject = {};

    if (string) {
        const stringsArray = removeNonLettersFromWords(string);

        stringsArray.forEach((word) => {
            const wordLength = word.length;
            if (wordLength !== 0) {
                if (!wordCountObject[wordLength]) {
                    wordCountObject[wordLength] = 0;
                }
                wordCountObject[wordLength] += 1;
            }
        }) 
    }

    return wordCountObject;
}

if (require.main === module) {
    console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
    console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
    console.log(wordSizes("What's up doc?"));                              // { "5": 1, "2": 1, "3": 1 }
    console.log(wordSizes(''));                                            // {}
    console.log(wordSizes('34'));                                          // {}
    console.log(wordSizes('a123!'));                                       // { '1': 1 }
    console.log(wordSizes('a !!!'));                                        // { '1': 1 }
}

module.exports = { wordSizes, removeNonLettersFromWords };