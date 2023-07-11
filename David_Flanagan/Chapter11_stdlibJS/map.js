const map = new Map();
map.set('1', 'Francis').set(1 , 'Lucas').set('surname' , 'Karuri');

const wife = {'name' : "Winfred", 'age' : 23, }

// Set the role of my wife here
map.set(wife, "be there for me");

for(let [k, v] of map.entries()) {
    let data = typeof k === "object" ? `${k["name"]} => ${v} \n` : `${k} => ${v} \n`;
    console.log(data);
}

console.log(`Has wife Winfred? => ${map.has(wife)}`)
console.log(`Size of the Map => ${map.size}`)