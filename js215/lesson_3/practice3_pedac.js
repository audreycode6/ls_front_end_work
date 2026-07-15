/*
Write a function, primeNumberPrinter, that prints all
prime numbers present as substrings in a given string.
 */

/* PEDAC
P:
in:
- string that contains assortment of chars (not just numeric)
out:
- array of any prime number instances found as substring to input string
e:
i:
- take in string of assortment of chars doesnt have to be numeric
- print an array of all the prime number instances found in string
- prime number: a whole number greater than \(1\)
   that can only be divided evenly by \(1\) and itself
- extract prime numbers from string
?:
- what to print if no prime numbers present as substrings in given string?
  -- assuming print "no prime numbers present"
- define prime number


E:
-- assortment of numbers that are prime and not prime & other chars:
primeNumberPrinter('a4bc2k13d'); -> [2, 13]

-- only numeric string (prime and not prime)
primeNumberPrinter('211'); -> [211]
primeNumberPrinter('210'); -> "No prime numbers present."

-- no numeric chars
primeNumberPrinter('abcd!?'); -> "No prime numbers present."

-- has assortment of chars including numeric chars but not prime
primeNumberPrinter('he246t8r45'); -> "No prime numbers present."


D:
identify and extract numeric char substrings: forEach iterate over string input
  - multi digit numbers: chars in succession of one another
      with no non numeric chars between -> "h12!?3" -> 12, 3

  - iterate through string and build number substrings:
    - start with empty substring: numericSubstring = ""
    - if currentChar is numeric:
      - add currentChar to substring
      - check if complete substring
      (next char is end or next char is not numeric)
        - if complete:
          - add substring to arrayOfNums
          - set substring back to empty string
        - else:
          - continue
    - else:
      continue

  - isPrime helper func: returns bool eval of if number is prime
    - prime number: a whole number greater than \(1\)
   that can only be divided evenly by \(1\) and itself

    - go through numbers 2 - (itself - 1):
      - if evenly divisible (itself % currentNum === 0):
        - return false
      - else continue
    - at end of iteration return true

A:
- extract numberic substrings from string and store in array as number
- if arrayOfNumericSubstrings not empty:
  - filter: if (isPrime(number) === true)
- if filteredArray not empty: print filteredArray
- else: print "No prime numbers present."
C:
 */

function primeNumberPrinter(string) {
  let numericSubstrings = extractNumericSubstrings(string);

  if (numericSubstrings.length > 0) {
    let primeNumbers = numericSubstrings.filter((number) => isPrime(number));
    if (primeNumbers.length > 0) {
      console.log(primeNumbers);
    } else console.log('No prime numbers present.');
  } else console.log('No prime numbers present.');
}

function extractNumericSubstrings(string) {
  const IS_NUMERIC_CHAR = /^\d$/;
  let numericSubstring = '';
  let substrings = [];

  [...string].forEach((char, idx) => {
    if (IS_NUMERIC_CHAR.test(char)) {
      numericSubstring += char;
      if (idx + 1 === string.length || !IS_NUMERIC_CHAR.test(string[idx + 1])) {
        // complete substring
        substrings.push(Number(numericSubstring));
        numericSubstring = '';
      }
    }
  });

  return substrings;
}

function isPrime(number) {
  if (number > 1) {
    for (let dividend = 2; dividend < number; dividend += 1) {
      if (number % dividend === 0) {
        // is evenly divisible by number other than 1 and self
        return false;
      }
    }
    return true;
  } else return false;
}

primeNumberPrinter('a4bc2k13d'); // [2, 13]
primeNumberPrinter('211'); // [211]
primeNumberPrinter('210'); // "No prime numbers present."
primeNumberPrinter('abcd!?'); // "No prime numbers present."
primeNumberPrinter('he246t8r45'); // "No prime numbers present."
