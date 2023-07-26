//Timers
//setInterval(), setTimeout(), clearInterval(), clearTimeout()

const clockDisplay =
    setInterval(() => {
        console.clear();
        console.log(Intl.DateTimeFormat(undefined, {
            weekday: "long",
            month: "long",
            year: "numeric",
            day: "2-digit",
            hour12: false,
            hourCycle: "h24",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        }).format(Date.now()));
    }, 1000);

setTimeout(() => {
    clearInterval(clockDisplay);
    console.log("Bye bye!");
}, 10000);


//Countdown code
let countdown = 10;

let m = setInterval(() =>  {
    console.clear();
    console.log(countdown--);
    if(countdown < 0) {
        clearInterval(m);
        setTimeout(() => {
            console.clear();
            console.log("Time is up! Bye!");
        }, 1000)
    }
}, 1000);

