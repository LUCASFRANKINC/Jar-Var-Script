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
                    return next < iterator.length ? {value: `${iterator[next++]}` , done: false} : {done: true};
                }
            };
        }
         resolve([...iterable]);
    })
}

const printData = async (data) => {
    return await iterateData(data);
}
fetchData()
    .then(data => {
        console.info("1. Successful: ");
        return printData(data["data"]);
    }).then(data => {
    console.info("2. Successful: ");
    console.table(data);
})
    .catch(err => console.log("Rejected:", err));
