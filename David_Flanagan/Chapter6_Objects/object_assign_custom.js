"use strict";

const e = {x : 2, y : 3, z : 5};
const p = {r : 14, y : 8, "main title" : "Jokes aside", x : 9};

let obj_assign_imp = Object.assign(e, p);

console.log("Serialized object =>" + JSON.stringify(obj_assign_imp));

// Custom merge function that checks that a property exists, skips it

function merge(target, ...sources) {
    // loop through the objects
    for(let src of sources) {
        for(let k of Object.keys(src)) {
            if(!(k in target)) {
                target[k] = src[k];
            }
        }
    }
    return target;
}

console.log(JSON.stringify(merge(e, p)));