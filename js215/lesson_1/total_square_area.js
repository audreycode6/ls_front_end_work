/*
we'll represent rectangles as Arrays with two elements: a height and a width.

Write a Function named totalArea that takes an Array of
rectangles as an argument. The Function should return the
total area covered by all the rectangles. */

'use strict';

function totalArea(arrayOfHeightsAndWidths) {
  let totalArea = arrayOfHeightsAndWidths
    .map(([height, width]) => height * width)
    .reduce((accum, elem) => accum + elem);

  return totalArea;
}

let rectangles = [
  [3, 4],
  [6, 6],
  [1, 8],
  [9, 9],
  [2, 2],
];

console.log(totalArea(rectangles)); // 141

/*
second Function named totalSquareArea. This Function should
calculate the total area of a set of rectangles, just
like totalArea. However, it should only include squares in
its calculations: it should ignore rectangles that aren't square. */
function totalSquareArea(arrayOfHeightsAndWidths) {
  let onlySquares = arrayOfHeightsAndWidths.filter(
    ([height, width]) => height === width,
  );
  return totalArea(onlySquares);
}

let rectangles2 = [
  [3, 4],
  [6, 6],
  [1, 8],
  [9, 9],
  [2, 2],
];

console.log(totalSquareArea(rectangles2)); // 121
