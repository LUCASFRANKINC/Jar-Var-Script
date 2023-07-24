/*
String.prototype.search()

The search() method executes a search for a match between a regular expression and this String object.

Syntax
search(regexp)

Parameters
regexp
A regular expression object, or any object that has a Symbol.search method.

If regexp is not a RegExp object and does not have a Symbol.search method, it is implicitly converted to a RegExp by using new RegExp(regexp).

Return value
The index of the first match between the regular expression and the given string, or -1 if no match was found.
*/

let string = "The brown fox jumped over the lazy old dog.";
let xP = new RegExp(/[^\w\s]/,"ig");
let search = string.search(xP);
console.log(`${string[search]} found at index ${search}`);
