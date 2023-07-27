class Range {
  constructor(span, to) {
    //4,2=>(2-4)=from=-2, to=2
    this.span = span;
    this.to = to;
  }

  [Symbol.iterator]() {
    let from = this.to - this.span; //starting point
    let next = Math.ceil(from); //iteration result next value
    let to = this.to; //end of iteration
    return {
      next() {
        return next <= to ? {value: next++} : {done: true};
      },
      [Symbol.iterator]() {return this;}
    }
  }
}

let range = new Range(10, 10);
for(let i of range) console.log(i);

console.log([...new Range(5, -4)])

function mapper(iterable_object, fn) {
  let iterator_obj = iterable_object[Symbol.iterator]();
  return {
    next() {
      let v = iterator_obj.next();
      if(v.done) {
        return v;
      }
      else return {value: fn(v.value)};
    },
    [Symbol.iterator]() {return this;}
  }
}

console.log("From mapper");
console.log([...mapper(new Range(8, 15), y => y ** 2)]);

function filter(iterable_obj, predicate) {
  let iterator_object = iterable_obj[Symbol.iterator]();
  return {
    next(){
      for(;;) {
        let v = iterator_object.next();
        if(v.done || predicate(v.value)) {
          return v;
        }
      }
    },
    [Symbol.iterator]() {return this;}
  }
}

console.log([...filter(new Range(5,10), x => x % 2 === 0)]);

//What of em objects
const obj = {"Frank": 28, "Winfred": 22, "relationship": "partners"};
let iteratorObj = Object.keys(obj)[Symbol.iterator]();
for(let i of iteratorObj) {
  console.log(`${i} => ${obj[i]}`)
}

obj[Symbol.iterator] = function()  {
  let iterator = Object.keys(this); //Returns an array
  let next = 0;
  const SELF = this;
  return {
    [Symbol.iterator]() {return this;},
    next() {
      return next < iterator.length ? {value: `${iterator[next]} => ${SELF[iterator[next++]]}`, done: false} : {done: true};
    }
  }
}

console.log("Trial 2!");
for(let i of obj) {
  console.log(i);
}