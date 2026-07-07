/*
Write a function that takes an array of integers between 0 and 19
and returns an array of those integers sorted based on the
English word for each number:

zero, one, two, three, four, five, six, seven, eight, nine, ten,
eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen,
eighteen, nineteen

Do not mutate the argument.
 */

function alphabeticNumberSort(numbersArray) {
  const NUMBERS_0THROUGH19_AND_WORD_REPRESENTATION = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
  };

  return [...numbersArray].sort((a, b) =>
    NUMBERS_0THROUGH19_AND_WORD_REPRESENTATION[String(a)].localeCompare(
      NUMBERS_0THROUGH19_AND_WORD_REPRESENTATION[String(b)],
    ),
  );
}

module.exports = { alphabeticNumberSort };
