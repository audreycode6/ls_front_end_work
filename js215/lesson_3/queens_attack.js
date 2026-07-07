/*
Write a function which, given a string representation of
 the board with the two queens, returns true or false depending
  on whether the queens can attack each other or not.
 */

/* DETAILED algo
1. parse board into correct data structures
  - split input string based on the newline chars

2. find the queens location within the board
  - use queenCoordinates, passing our board -> obj with coordinates

3. stop if we dont have both queens
 - if coordinates object does not have a 'B'key and a 'W' key
 -> return undefined

4. figure out if 2 coordinates can attack each other based on coordinates
  - invoke attackableCoordinates passing our 2 coordinates as args
    -> return value

- hELPER queenCoordinates(board) => {'W" => [2, 3], 'B' => [5, 6] }
    - initialize empty obj: coordinates
    - iterate over string elems of board using an index to rep row
        - index === row num, and
        when “W” or “B” is found that will be the column
        - for each string (row):
            - check if ‘B” is in string
                - add b key to coordinates
                - set value to a coordinate pair:
                [’rowIndex’, index of ‘B’ in current row]
                → (indexOf)
            - check if ‘W” is in string:
                - add ‘w’ key to coordinates
                - set value to a coordinate par [rowindex , indexof ‘W’]
    - return coordinates

- // HELPER attackableCoordinates(coordinate1, coordinate2) => true/ false
    - if row attack → both have same first elem → → return True
    - if column attack  → both have same 2nd elem → return true
    - if have same diagonal
        - calc diff of 1st elems of each coord
        - calc diff between 2nd elems of each coordinates
        - if abs value of difference is same → return true
*/

function queenAttack(stringBoard) {
  const arrayOfStringRows = stringBoard.split('\n');

  const queenCoordinatesObj = queenCoordinates(arrayOfStringRows);

  if (queenCoordinatesObj['B'] && queenCoordinatesObj['W']) {
    return attackableCoordinates(
      queenCoordinatesObj['W'],
      queenCoordinatesObj['B'],
    );
  } else return undefined; // missing 1 or more queens
}

function queenCoordinates(arrayOfStringRows) {
  const coordinates = {};

  arrayOfStringRows.forEach((row, idx) => {
    if (row.includes('W')) {
      coordinates['W'] = [idx, row.indexOf('W')];
    }
    if (row.includes('B')) {
      coordinates['B'] = [idx, row.indexOf('B')];
    }
  });

  return coordinates;
}

function attackableCoordinates(coordinate1, coordinate2) {
  if (coordinate1[0] === coordinate2[0]) {
    // same row attack
    return true;
  } else if (coordinate1[1] === coordinate2[1]) {
    // same column attack
    return true;
  } else {
    // diagonal attack
    return (
      Math.abs(coordinate1[0] - coordinate2[0]) ===
      Math.abs(coordinate1[1] - coordinate2[1])
    );
  }
}

if (require.main === module) {
  //happy paths
  console.log(
    queenAttack(
      '________\n' +
        '________\n' +
        '________\n' +
        '________\n' +
        '________\n' +
        '________\n' +
        '_W______\n' +
        'B_______\n',
    ) === true,
  ); // diagonal

  console.log(
    queenAttack(
      'W_______\n' +
        'B_______\n' +
        '________\n' +
        '________\n' +
        '________\n' +
        '________\n' +
        '________\n' +
        '________\n',
    ) === true,
  ); // column

  console.log(
    queenAttack(
      '________\n' +
        '________\n' +
        '________\n' +
        '________\n' +
        '________\n' +
        '________\n' +
        '__B_W___\n' +
        '________\n',
    ) === true,
  ); //row

  console.log(
    queenAttack(
      '________\n' +
        '________\n' +
        '________\n' +
        '________\n' +
        '________\n' +
        '________\n' +
        '____W___\n' +
        'B_______\n',
    ) === false,
  ); // not row, column or diagonal

  // edge case
  console.log(
    queenAttack(
      '________\n' +
        '________\n' +
        '________\n' +
        '________\n' +
        '________\n' +
        '________\n' +
        '________\n' +
        'B_______\n',
    ) === undefined,
  ); // missing "W" queen

  console.log(
    queenAttack(
      '________\n' +
        '________\n' +
        '________\n' +
        '________\n' +
        '________\n' +
        '________\n' +
        '_W______\n' +
        '________\n',
    ) === undefined,
  ); // missing "B" queen

  console.log(
    queenAttack(
      '________\n' +
        '________\n' +
        '________\n' +
        '________\n' +
        '________\n' +
        '________\n' +
        '________\n' +
        '________\n',
    ) === undefined,
  ); // missing both queens
}
