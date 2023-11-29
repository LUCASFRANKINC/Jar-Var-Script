const getTodos = async () => {
    const response = await fetch("./example_2.json");
    if (!response.ok)
        throw new Error("cannot fetch the data!")
    return await response.json();
}
getTodos()
    .then(data => console.log('resolved:', data))
    .catch(err => console.log('rejected', err.message));