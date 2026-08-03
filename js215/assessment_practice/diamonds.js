'use strict';

/*

Write a function that displays a four-pointed diamond in an nxn grid,
where n is an odd integer supplied as an argument to the function.
You may assume that the argument will always be an odd integer.
 */

/* NOTES:

Problem:
- in:
  - n is an odd integer supplied as an argument to the function.
- out:
  - displays a four-pointed diamond in an nxn grid
  - n length and n width for total size -- square grid

- exp:
- imp:
  - the middle will have a complete line of asterics (equal in len to argN)
  - the first and last line will have only 1 asterics in middle
  surrounded by whitespace
    - middle: argN / 2 -> round down to get middle index: Math.floor(argN / 2)
  - the remaining lines between top - middle / middle - bottom will increase
    asterics on left and right of current asterics : * -> *** -> *****
  - the grid will fill in any no asterics in the line with white space
    -- all horizontal lines are equal in len:
    just differ in how many whitespaces / asterics
- ?:
  - can i assume arg will always be a postive odd integer (1 or greater?
     -- ASSUMING interviewer said yes
  - am i expected to handle bad input / validate the arg passed in?
    -- ASSUMING interviewer said no need ot validate
  - by display does that mean i return the grid of strings or just log?
    -- ASSUMING interviewer said log

Examples / useage:
-- arg is 1: only return 1 asterics
diamond(1); --> '*'

-- arg is 3: return a 3x3 grid
" * " -- first is 1 star surrounded by whitespace:
   "w*w" middle of string Math.floor(3 / 2) -> 1
   other idx get whitespace: 0, 2
"***" -- middle is reached (if indexing grids by 0)
" * "


Data Structure:
define array of strings to hold grid:
  - grid will be array of argN strings
  - each string represents a horizonal line in the grid
  - can build middle first (string of len argN of just "*"): 3 -> "***"
  - then build to top and bottom by replacing asterics with whitespace
  from the corners (left most and right most)
    - while asterics string != len 1: // todo check if good stopping at len 1
      - remove leftmost and right most asterics
      - build whiteSpaceString by 1
      - build new string: whiteSpaceString + astericsStirng + whiteSPaceString
      - add newString at corresponding top and bottom:
        - have var to track middle to top difference:
          - starts with 0 and increases by 1 each iteration
          (creation of horizontal string)
          - top: middle - difference
          - bottom middle + difference
          - gird complete // needs to stops when difference is === middle


to identify middle of grid and string: Math.floor(argN / 2)
  -- round down in order to follow index 0;


Algorithm:
- if input 1 return single stirng asterics

- identify the middle of the arg: Math.floor(argN / 2)

- assign array to hold grid

- define tracker to track how many strings to build after middle:
  difference = 0

- define empty whiteSpaceString = ""
- build middle string of astericks:
  - store in var: "*" * argN
  - store in middle of array: array[middle] = astrics string

- while difference < middle:
  - remove 2 asterics from asterics string
  - add a whitespace to whitespaceString: whiteSPaceStirng += " ";
  - create new string by combining :
    whitespaceStirng + astericsStirng + whitespaceString
  - add newString tpo corresponding idx:
    -add to top: array[middle - difference] = newstirng
    - add to bottom: array[middle + difference] = newStirng
    - difference += 1

  - for string in gridArray print out each string: forEach
*/

function diamond(gridDimensions) {
  const middle = Math.floor(gridDimensions / 2);

  let grid = [];
  let difference = 0;
  let whiteSpaceString = '';

  let asterisksString = '*'.repeat(gridDimensions);
  grid[middle] = asterisksString;

  while (difference < middle) {
    asterisksString = asterisksString.slice(0, -2);
    whiteSpaceString += ' ';

    //build new string
    let newString = whiteSpaceString + asterisksString;

    // increase difference
    difference += 1;

    //add newstrings to grid: top and bottom
    grid[middle - difference] = newString;
    grid[middle + difference] = newString;
  }

  grid.forEach((string) => console.log(string));
}

diamond(1);
// logs
// *

diamond(3);
// logs
//  *
// ***
//  *

diamond(9);
// logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *
