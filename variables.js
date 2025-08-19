/**
 * Variables are containers for storing data values.
 * In JavaScript, we use the keywords var, let, and const to declare variables.
 * var is function-scoped or globally scoped, let is block-scoped, and const is also block-scoped but cannot be reassigned.
 */

console.log("<<=== testing var keyword ===>>");
var greetings = "hello";

if (true) {
  var greetings = "hi"; // This will change the value of the global variable
}

console.log(greetings); // Output: "hi"

console.log(message); // Output: "undefined" (due to hoisting)
var message = "Hello world!";

/**
 * Variable Declarations with let
 * let is block-scoped
 */

console.log("<<=== testing let keyword ===>>");

let greeter = "Hello";
if (true) {
  let greeter = "Hi";
  console.log(greeter);
}
console.log(greeter);

/**
 * Variable Declarations with const
 * const is block-scoped and cannot be reassigned
 */

console.log("<<=== testing const keyword ===>>");

const PI = 3.14;
if (true) {
  const PI = 3.14159;
  console.log(PI);
}
console.log(PI);
