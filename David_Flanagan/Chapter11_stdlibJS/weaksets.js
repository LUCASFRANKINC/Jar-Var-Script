// Here, keys must be an object or an array
let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

let readMessages = new WeakSet();
readMessages.add(messages[0]).add(messages[1]);

//read and remove the first message from weakset 
console.log("Read message 0: " + readMessages.has(messages[0]));
messages.shift();


