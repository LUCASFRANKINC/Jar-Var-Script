let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

let readOn = new WeakMap();
readOn.set(messages[0], new Date(2019,1,1));

console.log(new Date(readOn.get(messages[0])).toLocaleString())
messages.shift(); // No reference
