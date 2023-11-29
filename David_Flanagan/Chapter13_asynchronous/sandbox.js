const getTodos = (resource) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange',() => {
            if(request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if (request.readyState === 4) {
                reject('Could not fetch data');
            }
        } )
        request.open("GET", resource);
        request.send();
    })
}

//promises
getTodos("./example_2.json").then(data => {
    console.log('Promise 1 resolved', data)
    return getTodos("./example_11.json")
}).then(data => {
    console.log("Promise 2 resolved.", data)
    return getTodos("./todos.json")
}).then(data => {
    console.log("Promise 3 resolved.", data)
}).catch(err => {
    console.log("Promise rejected")
});
