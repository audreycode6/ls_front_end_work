/*
Write a function objectsEqual that accepts two object arguments
and returns true or false depending on whether the objects
have the same key/value pairs.
*/
function objectsEqual(obj1, obj2) {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  return obj1Keys.every((key) => {
    return obj2Keys.includes(key) && obj1[key] === obj2[key];
  });
}

console.log(objectsEqual({ a: 'foo' }, { a: 'foo' })); // true
console.log(objectsEqual({ a: 'foo', b: 'bar' }, { a: 'foo' })); // false
console.log(objectsEqual({ a: 'foo', b: 'bar' }, { b: 'bar', a: 'foo' })); // true
console.log(objectsEqual({}, {})); // true
console.log(objectsEqual({ a: 'foo', b: undefined }, { a: 'foo', c: 1 })); // false
