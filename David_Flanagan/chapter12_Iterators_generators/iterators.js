let string = 'Francis';
let array = [1, 2, 3, 4, 5];
let set = new Set([7, 8, 9, 7, 4, 9, 5]);
let map = new Map([["frank", 28], ["fenzia", 25]]);

//Utilizing set for the iterator
let iterator = set[Symbol.iterator]();
for(let result = iterator.next(); !result.done; result=iterator.next() ) {
  console.log(result.value);
}
