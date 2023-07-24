let string =
  "The quick brown fox, yeah, the only quick brown dog damn fox, jumped over the lazy dog";

let regxp = /quick\s(brown).*?(?<animal>dog|fox),(?<action>.*)\Wover/dy;
regxp.lastIndex = 36;
let matched = string.match(regxp);

console.table({
  "Matched": matched[0],
  "Captured groups": [matched[1], matched[2], matched[3]],
  "Specified matched index": matched.index,
  "Indices and findings": (function(x) {
    let arr = Array.of();
    for(let i of x.indices) arr.push(i);
    arr.push({
      "Length of indices": x.indices.length,
      "Indices groups": x.indices.group,
    })
    return arr;
  })(matched),
  "Groups": (function(x) {
    let arr = [];
    for(let key in x.groups) arr.push({key : x.groups[key]});
    return arr;
  })(matched)
})
