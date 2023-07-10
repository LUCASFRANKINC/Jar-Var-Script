/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-underscore-dangle */

function range(from, to) {
  let r = Object.create(range.methods);
  r.from = from;
  r.to = to;
  return r;
}

range.methods = {
  includes(x){
    return this.from <= x && x <= this.to;
  },

  *[Symbol.iterator]() {
    for(let x = Math.ceil(this.from); x <= this.to; x++) {
      yield x;
    }
  },

  toString() {
    return "(" + this.from + "..." + this.to + ")"
  }
}

let r = range(1, 10)
console.log(r.includes(6))
console.log(r.toString())
console.log([...r]);
