function timer() {
    let context = document.querySelector('#clock');
    let timeNow = new Date();
    context.textContent = timeNow.toLocaleTimeString();
}

// Show time instantly
timer();

setInterval(timer, 1000);