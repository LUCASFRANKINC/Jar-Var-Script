const set = new Set();

const names = [{ name: "Francis" }, { name: "Winfred" }, { name: "our child" }];

//loop and add name to set
for (const i of names) {
  set.add(i);
}

console.log(`The size is ${set.size}`);

//Iterate through values in the set
for (const i of set) {
  console.log(`value => ${i["name"]}`);
}
