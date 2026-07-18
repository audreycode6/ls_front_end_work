/*
You have a bank of switches before you, numbered from 1 to n.
Every switch is connected to exactly one light that is initially off.
You walk down the row of switches and toggle every one of them.
You walk back to the beginning of the row and start another pass.
On this second pass, you toggle switches 2, 4, 6, and so on.
On the third pass, you go back to the beginning again, this time toggling
  switches 3, 6, 9, and so on. You continue to repeat this process until
   you have gone through n repetitions.

Write a program that takes one argument—the total number
 of switches—and returns an array of the lights that are on after n repetitions.
*/

/*PEDAC
P:
- in:
  1 arg: the total # of switches / repetitions
- out:
  return array of lights that are on after n reetitions
  - maybe empty array or log that invalid arg if invalid input
  (input is less than 1/ not number)
- ex:
  - switches number 1 - n
  - the input arg also represent the # of passes made up the row (1 - arg)
  - start with each light off
  - 1st pass turn all on (increment by 1: 1, 2, 3 ...)
  - 2nd pass toggle (off) increment by 2 (increment by 2: 2, 4, 6 ...)
  - 3 pass toggle increment by 3 (3, 6, 9 ...)
  - 4 .... continue pattern

- im:
  - pattern: each pass the switch that gets toggle is in increment by pass #
  - switch starts as off and 1st pass turns all on
  - by end of n passes extract all switchs that are toggled on and
   return the corresponding numbers
- ?'s:
  - does the input arg: represent total switch range (1 - arg)?
  - return should be in order: increasing order? (1, 2, 3...)
  - will it always be a whole number input?
  - will it always by a postive number input?
  - what to return for 0 input or bad input?

E:

lightsOn(5) -> [1, 4]
[1: on, 2: on, 3: on, 4:on, 5:on] pass 1 all on
[1: on, 2: off, 3: on, 4:off, 5:on] pass 2 toggle every 2nd (2, 4)
[1: on, 2: off, 3: off, 4:off, 5:on] pass 3 togle every 3rd (3)
[1: on, 2: off, 3: off, 4:on, 5:on] pass 4 toggle every 4th off (4)
1: on, 2: off, 3: off, 4:on, 5:off] pass 5 toggle every 5th (5)

at end only 1 and 4 remain on -> [1, 4]

lightsOn(100) -> [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

-- assume that number will be whole and greater than 0:
lightsOn(0) -> "No lights to turn on."


D:
- build dictionary of keys from 1 - inputArg with value of false
-> use bool: true === lights on and false === lights off
- iterate through dictionary inputArg amount of times
  - track iterations start with 1 and go to inputArg
  - for each key (lightswitchNumber) if that number is multiple of
  currentPassNumber then update the bool value (inverse of what it currently is)
  - forEach loop(?)

- by end of iteration extract all keys that have true value
  - filter by dictionarys value

A:
-
*/

function lightsOn(switches) {
  let switchAndStatus = buildSwitchAndStatus(switches);
  const switchAndStatusKeys = Object.keys(switchAndStatus);

  for (let pass = 1; pass <= switches; pass += 1) {
    switchAndStatusKeys.forEach((key) => {
      if (key % pass === 0) {
        let currentStatus = switchAndStatus[key];
        switchAndStatus[key] = !currentStatus;
      }
    });
  }

  let switchesOn = switchAndStatusKeys.filter(
    (light) => switchAndStatus[light] === true,
  );

  return switchesOn.map((light) => Number(light));
}

function buildSwitchAndStatus(switchCount) {
  let dict = {};
  for (let count = 1; count <= switchCount; count += 1) {
    dict[count] = false;
  }
  return dict;
}

console.log(lightsOn(5)); // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100)); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
