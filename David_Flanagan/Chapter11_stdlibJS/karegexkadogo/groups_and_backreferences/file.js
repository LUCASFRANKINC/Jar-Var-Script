/*
Groups and backreferences

Groups group multiple patterns as a whole, and capturing groups provide extra submatch information when using a regular expression pattern to match against a string. Backreferences refer to a previously captured group in the same regular expression.

List:
(x) : Capturing group: Matches x and remembers the match. For example, /(foo)/ matches and remembers "foo" in "foo bar". 
A regular expression may have multiple capturing groups. In results, matches to capturing groups typically in an array whose members are in the same order as the left parentheses in the capturing group. This is usually just the order of the capturing groups themselves. This becomes important when capturing groups are nested. Matches are accessed using the index of the result's elements ([1], …, [n]) or from the predefined RegExp object's properties ($1, …, $9).
Capturing groups have a performance penalty. If you don't need the matched substring to be recalled, prefer non-capturing parentheses (see below).
String.prototype.match() won't return groups if the /.../g flag is set. However, you can still use String.prototype.matchAll() to get all matches.

(?<name>x) : Named capturing group: Matches "x" and stores it on the groups property of the returned matches under the name specified by <Name>. The angle brackets (< and >) are required for group name.
For example, to extract the United States area code from a phone number, we could use /\((?<area>\d\d\d)\)/. The resulting number would appear under matches.groups.area.

(?:x) : Non-capturing group: Matches "x" but does not remember the match. The matched substring cannot be recalled from the resulting array's elements ([1], …, [n]) or from the predefined RegExp object's properties ($1, …, $9).

\n : Where "n" is a positive integer. A back reference to the last substring matching the n parenthetical in the regular expression (counting left parentheses). For example, /apple(,)\sorange\1/ matches "apple, orange," in "apple, orange, cherry, peach".

\k<name> : A back reference to the last substring matching the Named capture group specified by <Name>.
For example, /(?<title>\w+), yes \k<title>/ matches "Sir, yes Sir" in "Do you copy? Sir, yes Sir!".
Note: \k is used literally here to indicate the beginning of a back reference to a Named capture group.
*/

//using groups
const names = `First_name: Lucas, LastName: Francis
First_name: Winnie, LastName: Wanjiru`;

const regExpNames = /First_name: (\w+), LastName: (\w+)/gm;
for(let i of names.matchAll(regExpNames)) {
	console.log(`Hello ${i[1] + " " + i[2]}`);
}

//using named groups
const regExpNamedGroups = /First_name: (?<firstname>\w+), LastName: (?<lastname>\w+)/gm;

for(let match of names.matchAll(regExpNamedGroups)) {
	console.log(`Hello, ${match.groups.lastname + " " + match.groups.firstname}`);
}

//Using groups and back references
const quote = `Single quote "'" and double quote '"'`;
const regExpQuotes = /(['"]).*?\1/g;

for(const match of quote.matchAll(regExpQuotes)) {
	console.log(match[0]);
}



