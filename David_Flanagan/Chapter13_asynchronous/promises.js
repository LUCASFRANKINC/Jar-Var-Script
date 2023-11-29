const getToDo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = true;
            if(!error)
                resolve({text: "Complete Code Example"})
            else
                reject()
        },2000)
    })
}

getToDo().then(todo => {
    console.log(todo.text)
}).catch(error => {
    console.log("Error occurred")
})