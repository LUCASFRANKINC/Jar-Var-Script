// Conditional invocation
// Disable eslint check for this file for the console logs
/* eslint-disable no-console */
function square(x, y) {
  return [y?.(x), x ** 2];
}

function power(x) {
  return x ** 3;
}

console.log(square(2, power)); // [8, 4]
console.log(square(2)); // [undefined, 4]

// Conditional property access
const a = { b: 42 };
const b = null;
let c;
console.log(a?.b); // 42
console.log(b?.b); // undefined
console.log(c?.b); // undefined

// Conditional chaining
const q = { r: null };
const r = null;
let s;
console.log(q?.r?.s); // undefined
console.log(r?.r?.s); // undefined
console.log(s?.r?.s); // undefined

// Nulling coalescing operator
const j = null;
let k;
const l = 42;

console.log(j ?? k ?? l); // 42 (c is the first non-null/undefined value)
console.log(j || k || l); // 42 (c is the first truthy value)
