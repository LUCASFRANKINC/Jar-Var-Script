"use strict"

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
/*
 * This code is supposed to check for an anagram and store it in an array, then store to  * a map 
 * eg. anp => ['nap', 'PAN']
 */
(function(array){
  // start off by modifying the arr by arranging the characters
  const newArr = array.map(value => value.toLowerCase().split('').sort().join(''));
  // store in a set   
  let set = new Set(newArr);
  let map = new Map();
  for(let i of set) {
    // Get the index of 'i' from newArr
    let setIndex = new Set();
    newArr.filter((value, index) => {
      if(i === value) {
        setIndex.add(index);
      }
    })
    // Iterate through the index set       
    map.set(i, (function(setData, arrayCheck) {
      let arr = [];
      for(let data of setData) {
        arr.push(arrayCheck[data]);
      }
      return arr;
    }(setIndex, array)))
  }
  console.log(map)
}(arr))
