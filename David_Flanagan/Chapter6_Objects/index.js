// /* eslint-disable no-console */

const data ={
    firstName : "Lucas",
    lastName : "Francis",
}

for(let d in data) {
    console.log(`${d} => ${data[d]}`);
}

let length = data.firstName?.length;
console.log(length);
// Accessing unavailable data
length = data.middleName?.length;
console.log(length);

// Enumerating props
let x = {a : 5, d : 10, m : 12};
for(let obj_items in x) {
    if(!x.hasOwnProperty(obj_items)) continue; // skip any inherited property
}

for(let obj_items in x) {
    if(typeof obj_items === "function") continue; //skip all methods
}