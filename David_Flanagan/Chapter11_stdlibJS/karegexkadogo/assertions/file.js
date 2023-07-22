/*
Assertions

Assertions include boundaries, which indicate the beginnings and endings of lines and words, and other patterns indicating in some way that a match is possible (including look-ahead, look-behind, and conditional expressions)

List:
^ - Matches the beginning of input
$ - Matches the end of input
\b - Matches a word boundary, where a word character is neither preceded nor followed by another word character
\B - Matches a non-word boundary.The prev and next character must be either word or non-word

Other Assertions:
x(?=y) - Lookahead. Match 'x' if only it's followed by 'y'
x(?!y) - Negative lookahead. Match 'x' if only it's not followed by 'y'
(?<=y)x - Lookbehind. Match 'x' if only it's preceded by 'y'
(?<!y)x - Negative lookbehind. Match 'x' if only it's not preceded by 'y'

*/

let buggyLine = `tey, ihe light-greon apple
tangs on ihe greon traa`;

// use ^ to fix t => h on beginnings
buggyLine = buggyLine.replace(/^t/gim, "h");
console.log(1, buggyLine);

//use $ to fix end of line
buggyLine = buggyLine.replace(/aa$/gim,"ee");
console.log(2, buggyLine);

// use \b to match character 'i' right after space
buggyLine = buggyLine.replace(/\bi/gim, "t");
console.log(3, buggyLine);

// use \B to match 'o' inside border
buggyLine = buggyLine.replace(/\Bo/gim, "e");
console.log(4, buggyLine);

// Select names that start with 'F'
const names = ["Frank", "jessie", "finixa", "tecla", 'Fernando'];
const namesStartWithF = names.filter(name => /^f/gi.test(name));
console.log(namesStartWithF);

//Showcasing the different uses of the '^' symbol. Get names that don't start with 'F'
const namesDontStartWithF = names.filter(name => /^[^f]/gi.test(name));
console.log(namesDontStartWithF);

// Match a word boundary
const descriptions = ["Red devil", "Green Monk", "Weedy cookie", "Beeny Roff"];
//Get descriptions with 'ed' or 'en'
const descriptionsWithEDorEN = descriptions.filter(description => /(ed|en)\b/gi.test(description));
console.log(descriptionsWithEDorEN);

const orangeNotLemon = "Do you want to have an orange? Yes, I do not want to have a lemon!";

//Different meaning of '?!' using [] and ()
const selectNotLemon = /[^?!]+have(?! a lemon)[^?!]+[?!]/gi;
const selectNotOrange = /[^?!]+have(?! an orange)[^?!]+[?!]/gi;
console.log(orangeNotLemon.match(selectNotLemon));
console.log(orangeNotLemon.match(selectNotOrange));

//look-behind
const oranges = ["ripe orange A", "green orange B", "ripe orange C"];
const ripeOranges = oranges.filter(orange => /(?<=ripe )orange/gi.test(orange));
console.log(ripeOranges);
