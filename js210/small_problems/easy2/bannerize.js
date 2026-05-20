/*Write a function that will take a short line of text, 
and write it to the console log within a box.
 */

function logInBox(text) {
    const EXTRA_SPACE_LEN = 2;
    let textLen = text.length;

    let padTopBottom = "-".repeat(textLen + EXTRA_SPACE_LEN);
    padTopBottom = '+' + padTopBottom + '+';

    let spaceStr = " ".repeat(textLen + EXTRA_SPACE_LEN);
    spaceStr = '|' + spaceStr + '|';

    console.log(`${padTopBottom}\n${spaceStr}\n| ${text} |\n${spaceStr}\n${padTopBottom}`)
}

logInBox('To boldly go where no one has gone before.');
/* OUTPUTS
+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+
 */
logInBox('');
/* OUTPUTS:
+--+
|  |
|  |
|  |
+--+
 */