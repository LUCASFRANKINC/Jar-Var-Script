/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */

const e = { x: 2, y: 3, z: 5 };
const p = {
  r: 14,
  y: 8,
  'main title': 'Jokes aside',
  x: 9,
  // custom toString() function
  toString() {
    return `Radius: ${this.r}, Yield: ${this.y}, Main Title: ${this['main title']} with a xarim of ${this.x}`;
  },
};

const objAssignImp = Object.assign(e, p);

console.log(`Serialized object =>${JSON.stringify(objAssignImp)}`);

// Custom merge function that checks that a property exists, skips it

function merge(target, ...sources) {
  // loop through the objects
  for (const src of sources) {
    for (const k of Object.keys(src)) {
      if (!(k in target)) {
        target[k] = src[k];
      }
    }
  }
  return target;
}

console.log(JSON.stringify(merge(e, p)));

console.log(p.toString());

// Usage of valueOf() function
const q = {
    x: 1,
    y: 2,
    valueOf() { return this.x + this.y; },
}

console.log(q + 1); // 4

// Using symbols
let symName = Symbol("my symbol");
const objectHere = Object.create(Object.prototype);
objectHere[symName] = "The data is fanatic!";

console.log(objectHere[symName]);
console.log(symName.description);

// Getters and setters
let myObj = {
  _data : '',
  get data() {
    return this._data;
  },
  set data(newValue) {
    this._data = newValue;
  },
  toString() {
    return `Hello, ${this.data}`;
  }
}

myObj.data = "Francis";
console.log(myObj.toString());