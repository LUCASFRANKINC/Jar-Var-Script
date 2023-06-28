/**
 * This is a comment. Comments are ignored by the JavaScript interpreter.
 * They are used to document your code. (◕‿◕✿)
 */

// This is a single-line comment. It begins with // and ends at the end of the line.

const name = 'Francis';
// log to the console. The backtick character (`) in JavaScript is used to define template literals,
// which are a convenient way to include expressions and multi-line strings in your JavaScript code.
// Will learn about this later on. For now, just use it to log to the console.
console.log(`Hello, ${name}.`); /* eslint-disable-line no-console */

// display an alert box on the browser window. Uncomment the line below to see the result.
alert(`${name}, Welcome to Javascript! 🙆‍♀️🙆‍♂️`); /* eslint-disable-line no-alert */

// A constant is a named storage location for data. The data stored in a constant cannot be changed.
// A constant is declared with the const keyword.
// eg. const PI = 3.14;
// PI = 3.14159; // This will cause an error because PI is a constant. (╯°□°）╯︵ ┻━┻

/**
 * A function is a named and parameterized block of JavaScript code that
 * you define once, and can then invoke over and over again.
 */
function viewTenYears(year) {
  // A for loop is a control structure that repeats a statement a number of times.
  // The for loop in this example repeats its body 10 times and increments
  // the year variable each time.
  /* eslint-disable-next-line no-plusplus */
  for (let i = 0; i < 10; i++) {
    /* eslint-disable-next-line no-plusplus */
    year++; // increment the year variable, same as year = year + 1 or year += 1 (❁´◡`❁)
  }
  // return statement is used to return a value from a function.
  return year;
}

// A variable is a named storage location for data. The data stored in a variable can be changed.
// A variable is declared with the let keyword.
let year = 2021;
// A variable can be assigned a new value at any time.
year = 2023;

// Call the function and pass the value 2023 as the argument.
// The return value of the function is assigned to the variable newYear.
const newYear = viewTenYears(year);
// log to the console. Uncomment the line below to see the result.
console.log(`In 10 years, it will be ${newYear}.`); /* eslint-disable-line no-console */
