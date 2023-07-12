"use strict"

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

let result = uniqueValues(values);
console.log(result);

function uniqueValues(data) {
  return Array.from(new Set(data))
}
