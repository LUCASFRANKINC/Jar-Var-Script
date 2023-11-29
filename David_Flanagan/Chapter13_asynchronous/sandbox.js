const getTodos = (resource, callback) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange',() => {
        if(request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
        } else if (request.readyState === 4) {
            callback('Could not fetch data', undefined);
        }
    } )
    request.open("GET", resource);
    request.send();
}

getTodos("example_1.json",(err, data) => {
    console.log('Callback fired.');
    if (err) {
        console.log(err);
    } else {
        console.log(data);
        getTodos("example_2.json", (err, data) => {
            console.log(data);

        })
    }
});
