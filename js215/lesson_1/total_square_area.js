/*
we'll represent rectangles as Arrays with two elements: a height and a width.

Write a Function named totalArea that takes an Array of
rectangles as an argument. The Function should return the
total area covered by all the rectangles. */

'use strict';

function totalArea(arrayOfHeightsAndWidths) {
  let areas = arrayOfHeightsAndWidths.map(([height, width]) => {
    return height * width;
  });
  let totalArea = areas.reduce((accum, elem) => accum + elem);

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
