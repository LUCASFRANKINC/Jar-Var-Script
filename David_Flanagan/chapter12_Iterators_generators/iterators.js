let iterable_string = 'Francis';
let iterable_array = [1, 2, 3, 4, 5];
let iterable_set = new Set([7, 8, 9, 7, 4, 9, 5]);
let iterable_map = new Map([["frank", 28], ["fenzia", 25]]);


let iterator_object = iterable_map[Symbol.iterator](); //Creates an iterator iterator_object
/**
console.log(iterator_object.next();
console.log(iterator_object.next());
console.log(iterator_object.next());
*/
for(let result =iterator_object.next(); !result.done; result = iterator_object.next()) {
  console.log(`Value: ${result.value}, Are we done? : ${result.done ? "Yes" : "No"}`)
}
