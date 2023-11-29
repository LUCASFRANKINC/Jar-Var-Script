const getToDo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = true
            if(!error)
                resolve({text: "Complete Code Example"})
            else
                reject()
        },2000)
    })
}

async function fetchToDo() {
    try {
        return await getToDo()
    }
    catch {
        console.log("Error occurred")
    }
}

fetchToDo().then(todo => console.log(todo.text)).catch(()=> console.log("Error occurred"))