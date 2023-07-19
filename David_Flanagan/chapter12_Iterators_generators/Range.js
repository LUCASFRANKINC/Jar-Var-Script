class Range {
  constructor(from, to) {
    this.from = from;
    this.to =to;
  }

  has(x) {
    return typeof x === 'number' && this.from <= x && this.to >= x;
  }

  toString() {
    return `From: ${this.from} - ${this.to}`;
  }

  [Symbol.iterator]() {
    let next = Math.ceil(this.from);
    let last = this.to;

    return {
      next() {
        return next <= last ? {value: next++} : {done: true};
      },
      [Symbol.iterator]() {return this;}
    }
  }
}

for(let x of new Range(1, 20)) {
  console.log(x);
}

console.log([...new Range(-7, 8)]);
