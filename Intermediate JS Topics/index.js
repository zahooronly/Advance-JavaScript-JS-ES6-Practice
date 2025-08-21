/**
 * Closure property:
 * Due to this property you can access all the parent scope variables/functions in the child scope block.
 * As in given example: We can access names list in printFunction()
 * Not just the value of the variable but current and updated value. even if it's updated after function declaration. but not before when the function is actually invoked.
 */

const namesList = ["Ahmad", "Hassan", "Zahoor", "Kamran"];

const printFunction = () => {
  for (let i = 0; i < namesList.length; i++) {
    console.log(namesList[i]);
  }
};

// printFunction();

/**
 * Hoisting: The property due to which you can access variable and function declare with var and function keywords respectively before their actual declaration is Hoisting.
 * if you declare a variable with var keyword and use it before declaration. it won't give error of "can't use before variable decclaration" but would give the value of undefined.
 * because JS Engine actually defines that variable on the top of the program before running in the parsing process. and do the same for the function defined with funciton keyword.
 */

// sayHello("Kamran");

function sayHello(str) {
  console.log("Hello", str);
}

/**
 * Callback functions:
 * Javascript Enginer doesn't wait for the completion of the current function execution. It continues to execute the next line of code.
 * Sometimes we need to call a function after the completion of another function. In such cases, we use callback functions.
 * A function that is passed as an argument to another function and is executed after the completion of that function.
 * Example below:
 */

function printName(name, callback) {
  console.log("Name:", name);
  callback();
}

function sayHello() {
  console.log("Hello!");
}

printName("Kamran", sayHello);

function sum(callback, x, y) {
  const result = x + y;
  callback(result);
}
function displayResult(result) {
  console.log("Result:", result);
}

sum(displayResult, 5, 10);

/**
 * Promise in JS:
 * A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
 * Promises are used to handle asynchronous operations in JavaScript.
 * A Promise can be in one of three states:
 * 1. Pending: The initial state, neither fulfilled nor rejected.
 * 2. Fulfilled: The operation completed successfully.
 * 3. Rejected: The operation failed.
 * Example below:
 */

const myPromise = new Promise((resolve, reject) => {
  const success = true; // Simulating success or failure
  if (success) {
    resolve("Operation successful!");
  } else {
    reject("Operation failed.");
  }
});

myPromise
  .then((result) => console.log(result))
  .then(() => {
    console.log("Chained then");
  })
  .catch((error) => console.error(error));

//   practical use:

const urls = [
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/comments",
  "https://jsonplaceholder.typicode.com/albums",
];

Promise.all(urls.map((url) => fetch(url).then((response) => response.json())))
  .then((data) => {
    console.log("All data fetched successfully:", data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
