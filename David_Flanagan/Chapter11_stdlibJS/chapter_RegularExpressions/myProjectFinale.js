let prompta = prompt("Input number to check if it's valid.");
let isValid = false;
if(prompta) {
  const regXp = /^(?:\d{3}|\(\d{3}\))([\/\.-])(?:\d{3})\1(?:\d{6})$/;
  console.table({
    "Original string:": prompta,
    "Is valid:": regXp.test(prompta),
  })
}
