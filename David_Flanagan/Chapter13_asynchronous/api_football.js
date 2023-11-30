// use the football api
const fetchData = async () => {
    const response = await fetch("./league-tables.json");
    if (!response.ok)
        throw new Error("Cannot get the file required.");
    return await response.json();
}

const iterateData = async (iterable) => {
    return new Promise((resolve, reject) => {
        // iterate the objects
        if (!iterable) {
            reject("Please ensure the data is valid");
        }
        iterable[Symbol.iterator] = function () {
            let [iterator, next] = [Object.keys(this), 0];
            const SELF = this;
            return {
                [Symbol.iterator]() {return SELF},
                next() {
                    return next < iterator.length ? {value: `${simulateObj([...SELF[iterator[next++]]]).then(data => {console.table(data)})}` , done: false} : {done: true};
                }
            };
        }
         resolve([...iterable]);
    })
}

const iterateObj = async (obj) => {
    return new Promise((resolve, reject) => {
        function Data(name, country, points, position) {
            this.name = name;
            this.country = country;
            this.points = points;
            this.position = position;
        }

        if (typeof obj === "undefined") reject("Could we really do that on an empty object?");
        let str = [];
        for (let i = 0; i < obj.length; i++) {
            const {name, country, points, position} = obj[i];
            const dt = new Data(name, country, points, position);
            str.push(dt);
        }
        resolve(str);
    })
}

const simulateObj = async (obj) => await iterateObj(obj);

const printData = async (data) => {
    return await iterateData(data);
}
fetchData()
    .then(data => {
        console.info("1. Successful: ");
        return printData(data["data"]);
    }).then(data => {
    console.info("2. Successful: ");
})
    .catch(err => console.log("Rejected:", err));
