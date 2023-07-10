/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-underscore-dangle */

function CircularObject(diameter) {
  const attributes = new Object({
    diameter,
    radius: diameter/2,
    circumference() {
      return Math.ceil(Math.PI * this.diameter)
    },
    area() {
      return Math.ceil(Math.PI * (this.radius ** 2))
    },
    toString() {
      return `Radius: ${this.radius}\nDiameter: ${this.diameter}\nCircumference: ${this.circumference()}\nArea: ${this.area()}`
    },
    valueOf() {
      return this.radius;
    }
  })

  const PrintData = obj => obj.toString()
  console.log(PrintData(attributes))
}

CircularObject(14);


// Nesting functions inside objects
const Person = new Object({
  firstName : "Frank",
  lastName : "Lucas",
  set NameFirst(firstName) {
    this.firstName = firstName
  },
  set NameLast(lastName) {
    this.lastName = lastName
  },
  get NameLast() {
    return this.lastName
  },
  get NameFirst() {
    return this.firstName
  },
  getNames() {
    const dataRefine = (function() {
      return `Name: ${this.NameFirst} ${this.NameLast}.`
    }).bind(this);

    return dataRefine();
  }
})

console.log(Person.getNames());

// Check the minimum value
const Minimum = (minimum = Infinity, ...others) => {
  let minValue = minimum;
  // Loop through the values in the array on the rest
  for(const val of others)
    if(minValue > val)
      minValue = val
  return minValue
}

console.log(Minimum(20, -585, 104,545454, 0, -444))

// Define a namespace object and invoke a function to initialize it.
const MyNamespace = (function() {
  // Private data variables
  let myPrivateVar = 0;
  // Private function
  function myPrivateFunc(x) {
    return x+1;
  }
  // Return an object with methods that have access to private data
  // variables and functions.
  return {
    myPublicVar: 1,
    myPublicFunc: function(x) {
      myPrivateVar++;
      return myPrivateFunc(x);
    }
  };
}());

//Don't forget to invoke the function to initialize the namespace object.
console.log(MyNamespace.myPublicFunc(2)) // => 3

function incrementValue() {
  let counter = 0;
  return {
    counter() {
      return counter++
    },
    resetCounter() {
      counter = 0
    }
  }
}

let counter1 =incrementValue(), counter2 = incrementValue();
console.log(counter1.counter());
console.log(counter2.counter());
//reset 1
counter1.resetCounter();
console.log(counter1.counter());
console.log(counter2.counter());

//using call()
function Username(name, email) {
  this.name = name;
  this.email = email;
}
function Kenyan(name, email) {
  Username.call(this, name, email);
  this.native = "Kenyan";
}
console.log(new Kenyan("Francis Karuri", "dev.lucasfrank254@gmail.com"))

let animals = [
  {species : 'Lion', rank : 'King'},
  {species : 'Shark', rank : 'Twin'},
];
for(let i=0; i<animals.length; i++) {
  (function(i){
    this.print = function() {
      console.log(`${i}:${this.species}, ${this.rank}`);
    }
    this.print();
  }).call(animals[i], i);
}

//using bind()
function f(y) { return this.x + y; } // This function needs to be bound
var o = { x: 1 };

var g = f.bind(o); // Calling f.bind sets |this| in f to o.
g(2); // 3

var p = { x: 10, g: g }; // Calling g as a method of p
console.log(p.g(2)); // 3

let data = [1, 1, 3, 5, 5];
const map = function(a, ...args) { return a.map(...args); };
const reduce = function(a, ...args) { return a.reduce(...args); };
let sumOfSquares = reduce(map(data, x => x*x), (a, b) => a + b);
console.log("sum => "+ sumOfSquares); // => 61

let data2 = [1, 1, 3, 5, 5];
let total = 0;
for(let i = 0; i < data2.length; i++) {
  total += data2[i] * data2[i];
}
console.log(total)
