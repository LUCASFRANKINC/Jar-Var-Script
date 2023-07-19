//CONSOLE API

//clear => Clears all messages in the console
console.clear();

//assert => Writes a message to the console if an expression evaluates to false
console.assert(5 + 5 === 11, "Data is wrong");

//count => Counts the number of times console.count() is called
for (let i = 0; i < 6; console.count("for_count"), i++) {
  /*Empty body*/
}

//error => Writes an error message to the console
console.error("You made a mistake!");

//group =>Starts a message group. All new messages will be written inside this group
console.log("Hello world");
console.group("thisGroup");
console.log("Hello again, this time inside a group!");

//groupEnd =>Ends a message group
console.groupEnd();
console.log("Out of group!");

//groupCollapsed => starts a collapsed message group
console.groupCollapsed("groupCollapse");
console.log("Intuitive");
console.log("yeah");
console.log("Sure");
console.groupEnd();
console.log("Train wreck");

//info => Writes a message to the console
console.info({
  firstName: "Francis",
  lastName: "Lucas",
});

//table => Writes a table to the console
let obj = [
  {
    name: "Francis",
    age: 26,
  },
  {
    name: "Winnie",
    age: 21,
  },
];
console.table(obj);

//filter what is placed in the table
console.table(obj, ["name"]);

//? time => method allows you to time code for testing purposes and starts a timer in the console
//? timeEnd => ends a timer, and writes the result to the console and allows you to time code operations for testing purposes.
//? timeLog => takes a string as its first argument. If that string had previously been passed to console.time(),
//then it prints that string followed by the elapsedtime since the console.time() call

console.time("f_l");
for(let i of obj) {
    for(let j in i) {
        console.timeLog("f_l");
        console.info(`${j} : ${i[j]}`);
    }
}
console.timeEnd("f_l");

//trace => displays a trace that show how the code ended up at a certain point

function parentFunc() {
  childFunc();
}

function childFunc() {
  console.trace();
}

parentFunc();

//warn => Write a warning to the console
console.warn("You don't belong here!");