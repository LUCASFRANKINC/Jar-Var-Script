// used to find whether a match is found or not
function checkContains(regexp, str) {
  let midStr = "";
  midStr = regexp.test(str) ? "contains" : "does not contain";
  return `${str} ${midStr} ${regexp.source}`;
}

console.log(checkContains(/quick\s(brown).+?(jumps)/gid,'The Quick Brown Fox Jumps Over The Lazy Dog'));

//check for several tests on string
let string = "Foot-walker! Walk on foot, not barefooted.\nFOOTBALL is a foot game!";
let regxp = /foot/mig;
let arr;
while((arr = regxp.test(string))) {
  console.log(`Found ${regxp.lastIndex}, ${regxp.source}`);
}
