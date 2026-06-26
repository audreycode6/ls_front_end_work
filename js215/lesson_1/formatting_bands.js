/* eslint-disable max-lines-per-function */
/*
We have the following Array of information for some popular bands:
 */

let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

/*
There are problems with this data, though, so we first
have to clean it up before we can use it:

The band countries are wrong: all the bands should have
'Canada' as the country.
The band name should have all words capitalized.
Remove all dots from the band names.
Write a function that can process the input band Array and
return an Array that contains the fixed information:

 */

function processBands(data) {
  // update each country key value to 'Canada'
  let updateCountryToCanada = data.map((obj) => {
    obj.country = 'Canada';
    return obj;
  });

  //for each word in name update word to be capitalized
  let capitalizeName = updateCountryToCanada.map((obj) => {
    let wordsInName = obj.name.split(' ');
    let nameCapitalized = wordsInName
      .map((word) => {
        return word[0].toUpperCase() + word.slice(1);
      })
      .join(' ');
    obj.name = nameCapitalized;
    return obj;
  });

  // remove all dots from name
  let removeDotsFromName = capitalizeName.map((obj) => {
    // filter and make array of all chars not "."
    let noDotName = [...obj.name].filter((char) => char !== '.');
    console.log(noDotName);
    obj.name = noDotName.join('');

    return obj;
  });

  return removeDotsFromName;

  // clean up bands array
  // map: all get country value set to 'Canada'
  // map: cap all band names
  // map: remove all dots removed from name value
  //
}

console.log(processBands(bands));

// should return:
// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]
