/*
Problem: Ticket Priority Sort

Write a function `sortTickets(tickets)` that takes an
 array of support ticket strings and returns them sorted by priority.

Each ticket string follows the format
`"[LEVEL] message text"`, where `LEVEL` is a priority tag.
*/
/* NOTES
Problem:
  - in: array of support ticket strings
    - supportTickString format:
    "[LEVEL] message text"`, where `LEVEL` is a priority tag.
  - out: return array sorted by priority
  - exp:
    - each element in array is a string that has multiple parts:
      - "[<LEVEL>] "
      - "<message text>"
  - imp:
    - extract the level from the stringElement in order to
    determine priority level
    - sort from highest to lowest priority
      - if multiples of priority level sort by alphabetical text ascending (a-z)
    -new sorted - do not mutat
  - ?:
    - can i expect valid input: array has string elements
    that follow the support ticket string format?
      -- assuming interviewer said yes
    - what are the different level options: (LOW, MED, HIGH)?
      -- assuming interviewer said yes
    - will there only be 1 of each priority?
    if not how should multiples of same priority by sorted?
      -- interviewer: there might be dup priorities sort by
      alphabeitc after sorting by level (H -> L)

    - can i mutate the original or return a new sorted array
      -- interviewer: new sorted - do not mutate

Examples:
-- has 1 stirng for each priority level
sortTickets(['[LOW] printer jam', '[HIGH] server down', '[MED] slow wifi']);
// ["[HIGH] server down", "[MED] slow wifi", "[LOW] printer jam"]

-- has multiple strings for each priority level
sortTickets(['[LOW] swag','[LOW] printer jam', '[HIGH] server down', '[MED] slow wifi', '[MED] testtt'])
// ["[HIGH] server down", "[MED] slow wifi", '[MED] testtt', "[LOW] printer jam", '[LOW] swag']

-- does not have all priority levels
sortTickets(['[LOW] printer jam', '[HIGH] server down']);
// ["[HIGH] server down", "[LOW] printer jam"]

Brainstorm:
- for each stirng in inputArray
  - sort by priority level

- could split the string by whitespace and the 1st elem of the split string is the level

- custom sorting func
  - sort by highest to lowest '[HIGH]', '[MED]', '[LOW]'
  - sort takes in 2 elements (priorityLevelA, priorityLevelB) and compares
    - function should return a number where:
        A negative value indicates that a should come before b.
        A positive value indicates that a should come after b.
        Zero or NaN indicates that a and b are considered equal.

      - store the possible priority levels in arrat by order of
      highest to lowest
      priorityLevels = ['[HIGH]', '[MED]', '[LOW]']
      - return priorityLevels.indexOf(a) - ....indexOf(b)


DataStructure:
- structuredClone to make copy of original
- use inputCopy.sort(customPrioritySort)
  - if passing whole stirng need to identify the priority level -- helper func

- identify priority level helper func:
  - use string.split(" ")[0] -> first elem will be the priority level

Algorithm:
- copy input
- custom func for sorting
  - sortPriority
    - getPriorityLevel
- copy.sort(sortPriority)
- return copy
 */

function sortTickets(arrayOfSupportTickets) {
  let copyArrayOfSupportTickets = structuredClone(arrayOfSupportTickets);
  copyArrayOfSupportTickets.sort(sortPriority);
  return copyArrayOfSupportTickets;
}

function sortPriority(priorityLevelA, priorityLevelB) {
  // store priorty level options in order of priority descending
  const priorityLevels = ['[HIGH]', '[MED]', '[LOW]'];
  const sortDifference =
    priorityLevels.indexOf(getPriorityLevel(priorityLevelA)) -
    priorityLevels.indexOf(getPriorityLevel(priorityLevelB));

  if (sortDifference !== 0) return sortDifference;
  // if equal in value compare by alphabetical order
  return priorityLevelA.localeCompare(priorityLevelB);
}

function getPriorityLevel(string) {
  /*
  string format for priority level:
  "[<LEVEL>] <text>"
  */
  return string.split(' ')[0];
}

// TEST:
// -- has 1 stirng for each priority level
console.log(
  sortTickets(['[LOW] printer jam', '[HIGH] server down', '[MED] slow wifi']),
);
// ["[HIGH] server down", "[MED] slow wifi", "[LOW] printer jam"]

// -- has multiple strings for each priority level
console.log(
  sortTickets([
    '[LOW] swag',
    '[LOW] printer jam',
    '[HIGH] server down',
    '[MED] slow wifi',
    '[MED] testtt',
  ]),
);
// [
// "[HIGH] server down",
// "[MED] slow wifi",
// '[MED] testtt',
// "[LOW] printer jam",
// '[LOW] swag'
//]

// -- does not have all priority levels
console.log(sortTickets(['[LOW] printer jam', '[HIGH] server down']));
// ["[HIGH] server down", "[LOW] printer jam"]
