/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-underscore-dangle */

//Array-like object

const arrayLike = {length: 2, 0: {firstName: "Francis", lastName: "Lucas"}, 1: {age: 28, gender: 'm'}};
const arrFromArrayLike = Array.from(arrayLike);

console.log(arrFromArrayLike.length)
for(let key of arrFromArrayLike)
    console.log(key);

// Reverse the items
let data = [1, 2, 3, 4, 5];
for(let i = data.length -1; i >= 0; i--) {
    console.log(data[i]); // 5 4 3 2 1
}