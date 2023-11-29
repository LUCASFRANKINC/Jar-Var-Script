const getToDo = callback => {
    setTimeout(() => {
        callback({text: "Complete Code Example"})
    },2000)
}

getToDo(todo => {
    console.log(todo.text)
})

console.log("This is the first output");