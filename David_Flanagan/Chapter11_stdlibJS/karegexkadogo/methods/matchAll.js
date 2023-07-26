/*
String.prototype.matchAll()

The matchAll() method returns an iterator of all results matching a string against a regular expression, including capturing groups.

Syntax
matchAll(regexp)
Parameters
regexp
A regular expression object, or any object that has a Symbol.matchAll method.

If regexp is not a RegExp object and does not have a Symbol.matchAll method, it is implicitly converted to a RegExp by using new RegExp(regexp, 'g').

If regexp is a regex, then it must have the global (g) flag set, or a TypeError is thrown.

Return value
An iterable iterator object (which is not restartable) of matches. Each match is an array with the same shape as the return value of RegExp.prototype.exec().

Exceptions
TypeError
Thrown if the regexp is a regex that does not have the global (g) flag set (its flags property does not contain "g").
*/

let string =
  "The quick brown fox jumped, yeah, that quick brown damn fox jumped over the lazy brown dog";

let regexp = new RegExp(/quick\s(?<color>brown).*?(?<animal>fox)/, "ig");
let array = [...string.matchAll(regexp)];
for(let i of array) {
  console.table({
    "Matched string": i[0],
    "Captured data": [i[1], i[2]],
    "Matching index": i.index,
    "Groups": (function(x) {
      arr = Array.of();
      for(let key in x.groups) {
        arr.push({[key]: x.groups[key]});
      }
      return arr;
    })(i)
  })
}
