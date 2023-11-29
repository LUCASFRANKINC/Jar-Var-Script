const getTodos = async () => {
    const response = await fetch("./example_2.json");
    if (!response.ok)
        throw new Error("cannot fetch the data!")
    return await response.json();
}
/*
getTodos()
    .then(data => console.log('resolved:', data))
    .catch(err => console.log('rejected', err.message));*/
// Function that returns a Promise
const performAsyncOperation = async () => {
    return new Promise((resolve, reject) => {
        // Simulating an asynchronous operation
        setTimeout(() => {
            const success = true; // Simulate a successful operation
            if (success) {
                resolve("Operation completed successfully");
            } else {
                reject("Operation failed");
            }
        }, 2000); // Simulating a delay of 2 seconds
    });
};

// Using async/await to handle the Promise
const executeAsync = async () => {
    try {
        const result = await performAsyncOperation();
        console.info("Success:", result);
    } catch (error) {
        console.error("Error:", error);
    }
};

// Call the async function
executeAsync();

