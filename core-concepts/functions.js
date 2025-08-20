/** function declaration and definition
 *  A function is a block of code designed to perform a particular task.
 *  It is executed when "something" invokes it (calls it).
 */
function someCalculation(x, y) {
  return x + y;
}

/**
 * function invocation is the process of calling a function
 *  when you want to execute the code inside the function
 */
someCalculation(4, 5);

/**
 * Converts Fahrenheit to Celsius
 * @param {number} fahrenheit - The temperature in Fahrenheit
 * @returns {number} - The temperature in Celsius
 */

function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}

let value = toCelsius(98.6);

console.log(value);

/** arrow functions
 *  are a more concise way to write function expressions
 *  let myFunction = function(a,b){
 *    return a * b;
 *  }
 */

const myFunction = (a, b) => a * b;

/** parameters are names of the values passed to the functions
 *  arguments are the actual values passed to the functions
 */

/**
 * Anonymous Functions
 *  are functions that do not have a name
 *  they are often used as arguments to other functions
 * they are mostly used for short-term tasks
 */

addEventListener("keydown", (event) => {
  console.log(`You pressed "${event.key}".`);
});
