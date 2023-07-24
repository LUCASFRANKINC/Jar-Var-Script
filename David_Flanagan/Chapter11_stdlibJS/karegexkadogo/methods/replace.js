/*
String.prototype.replace()

The replace() method returns a new string with one, some, or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function called for each match. If pattern is a string, only the first occurrence will be replaced. The original string is left unchanged.

Syntax
replace(pattern, replacement)

Parameters
pattern
Can be a string or an object with a Symbol.replace method — the typical example being a regular expression. Any value that doesn't have the Symbol.replace method will be coerced to a string.

replacement
Can be a string or a function.

If it's a string, it will replace the substring matched by pattern. A number of special replacement patterns are supported; see the Specifying a string as the replacement section below.
If it's a function, it will be invoked for every match and its return value is used as the replacement text. The arguments supplied to this function are described in the Specifying a function as the replacement section below.
Return value
A new string, with one, some, or all matches of the pattern replaced by the specified replacement.
*/

function separateName(name) {
  function upperToSpacer(match, offset, string) {
    return (offset > 0 ? " " : '') + match;
  }
  return name.replace(/[A-Z]/g, upperToSpacer);
}

function replacer(match, ...args) {
  /* function printArgs(args) {
    for (let i of args) console.log(i);
    return 0;
  }
  //console.log(`Match: ${match}`);
  printArgs(args);

  let arrGroups = Object.keys(args.at(-1));
  for(let i of arrGroups) {
    //console.log(`${i}: ${args.at(-1)[i]}`)
  }
*/
  //Format the name
  let name = separateName(args.at(-1)["name"]);
  //print the date 
  let dateHere = new Date([args.at(-1)['y'], args.at(-1)['m'], Number(args.at(-1)['d']) + 1].join(",")).toUTCString();
  return `Hello. My name is ${name}, born ${dateHere}`;
}

let string = "FrancisKaruri08181996";
const regExpStr = new RegExp(
  /(?<name>\w+)(?<dob>(?<m>\d{2})(?<d>\d{2})(?<y>\d{4}))/,
  "ig",
);

console.log(string.replace(regExpStr, replacer));
