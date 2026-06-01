/*
Write a function named objectHasProperty that takes two arguments: 
an Object and a String. The function should return true if the Object
 contains a property with the name given by the String, false otherwise.
*/

function objectHasProperty(object, string) {
    let objectKeys = Object.keys(object);
    console.log(`${objectKeys.includes(string)}`)
    return objectKeys.includes(string);
}

let pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
};

objectHasProperty(pets, 'dog');       // true
objectHasProperty(pets, 'lizard');    // false
objectHasProperty(pets, 'mice');      // true