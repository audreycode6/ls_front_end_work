/*
Write a function that takes a positive integer, n, as an argument and 
logs a right triangle whose sides each have n stars. The hypotenuse of 
the triangle (the diagonal side in the images below) should have one 
end at the lower-left of the triangle, and the other end at the 
upper-right.
*/

function triangle(num) {
    for (let stars = 1; stars <= num; stars++) {
        let spaceStr = " ".repeat(num - stars);
        let starStr = "*".repeat(stars);
        console.log(`${spaceStr}${starStr}`)
    }

}


triangle(5);
/* OUTPUTS:
    *
   **
  ***
 ****
*****

*/
triangle(9);

/* OUTPUTS:
        *
       **
      ***
     ****
    *****
   ******
  *******
 ********
*********

*/