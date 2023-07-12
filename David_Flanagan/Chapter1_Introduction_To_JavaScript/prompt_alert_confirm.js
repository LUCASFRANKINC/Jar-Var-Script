"use strict"

let result = prompt("What is your name?", '')
alert(`My name is ${Boolean(result) ? result : "Frank"}`);

let isBoss = confirm("Are you the boss?")
alert(`I am the boss => ${isBoss ? "I am the boss" : "Not really!"}`)
