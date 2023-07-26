/*
 RegExp.prototype.exec()

The exec() method executes a search for a match in a specified string and returns a result array, or null.

Parameters
str
The string against which to match the regular expression. All values are coerced to strings, so omitting it or passing undefined causes exec() to search for the string "undefined", which is rarely what you want.

Return value
If the match fails, the exec() method returns null, and sets the regex's lastIndex to 0.

If the match succeeds, the exec() method returns an array and updates the lastIndex property of the regular expression object. The returned array has the matched text as the first item, and then one item for each capturing group of the matched text. The array also has the following additional properties:

index
The 0-based index of the match in the string.

input
The original string that was matched against.

groups
A null-prototype object of named capturing groups, whose keys are the names, and values are the capturing groups, or undefined if no named capturing groups were defined. See capturing groups for more information.

indices Optional
This property is only present when the d flag is set. It is an array where each entry represents the bounds of a substring match. The index of each element in this array corresponds to the index of the respective substring match in the array returned by exec(). In other words, the first indices entry represents the entire match, the second indices entry represents the first capturing group, etc. Each entry itself is a two-element array, where the first number represents the match's start index, and the second number, its end index.

The indices array additionally has a groups property, which holds a null-prototype object of all named capturing groups. The keys are the names of the capturing groups, and each value is a two-element array, with the first number being the start index, and the second number being the end index of the capturing group. If the regular expression doesn't contain any named capturing groups, groups is undefined.

Description
JavaScript RegExp objects are stateful when they have the global or sticky flags set (e.g. /foo/g or /foo/y). They store a lastIndex from the previous match. Using this internally, exec() can be used to iterate over multiple matches in a string of text (with capture groups), as opposed to getting just the matching strings with String.prototype.match().

When using exec(), the global flag has no effect when the sticky flag is set — the match is always sticky.

exec() is the primitive method of regexps. Many other regexp methods call exec() internally — including those called by string methods, like @@replace. While exec() itself is powerful (and is the most efficient), it often does not convey the intent most clearly.

If you only care whether the regex matches a string, but not what is actually being matched, use RegExp.prototype.test() instead.
If you are finding all occurrences of a global regex and you don't care about information like capturing groups, use String.prototype.match() instead. In addition, String.prototype.matchAll() helps to simplify matching multiple parts of a string (with capture groups) by allowing you to iterate over the matches.
If you are executing a match to find its index position in the string, use the String.prototype.search() method instead.
*/ 

const regex1 = /foo*/g;
const str1 = 'table football, foosball';
let array1;

while((array1 = regex1.exec(str1)) !== null) {
  console.log(`Found ${array1[0]}. Next starts at ${regex1.lastIndex}.`);
}

// Match "quick brown" followed by "jumps", ignoring characters in between
// Remember "brown" and "jumps"
// Ignore case 
const strData = "The Quick Brown Fox Jumps Over The Lazy Dog";
const regexStrData = /quick\s(?<color>brown).+?(jumps)/dgi;
const result = regexStrData.exec(strData);
console.table({
  "Match:": result[0],
  "Group 1": result[1],
  "Group 2": result[2],
  "Index": result.index,
  "Indices": (function(x){
    let [arr, init] = [[], 0];
    for(init; init < x.indices.length; arr.push(x.indices[init]), init += 1) /*Empty body*/;
    arr.push({"Length of indices: ": x.indices.length});
    return arr;
  })(result),
  "Input text": result.input,
  "Groups": result.groups,
});

// state of regex after running
console.table({"Last Index": regexStrData.lastIndex, "Source regex": regexStrData.source});
