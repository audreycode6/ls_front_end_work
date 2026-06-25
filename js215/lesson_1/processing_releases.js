/*
Write a Function named processReleaseData that processes
 the following movie release data:
 */

let newReleases = [
  {
    id: 70111470,
    title: 'Die Hard',
    boxart: 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
    uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 654356453,
    boxart: 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
    uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
  },
  {
    title: 'The Chamber',
    boxart: 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
    uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 0,
    title: 'Fracture',
    boxart: 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
    uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
  },
];

/*
The Function should generate an Array of Objects that
contain only the id and title key/value pairs. You may assume
that id and title, when existing, is an integer greater than 0
and non-empty string respectively. Here are the rules:

Keep only releases that have both id and title property present.
Keep only the id and title data for each release. */

/*Part 2:
current solution assumes that the value of id will be an
integer value greater than 0. If it was possible to have
a value of 0 for id, what would the implications be to the
current solution? What changes, if any, would need to be
made in order to handle the 0 value? */

// check if id != undefined

function processReleaseData(data) {
  let datasTitleAndId = data
    .filter((elem) => elem.id !== undefined && elem.title) // get elements that have a title and id key
    .map((elem) => {
      // create array of just title and id KVP from filteredData
      return { title: elem.title, id: elem.id };
    });
  return datasTitleAndId;
}

console.log(processReleaseData(newReleases));
// expected output:
// [{ id: 70111470, title: 'Die Hard'}, { id: 675465, title: 'Fracture' }];
