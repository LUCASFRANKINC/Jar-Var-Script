let clock = setInterval(()=> {
    document.getElementById("holder").textContent = new Date().toLocaleTimeString();
}, 1000);