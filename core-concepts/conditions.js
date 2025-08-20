/**
 * Conditional Structures
 * Conditional structures are used to perform different actions based on different conditions.
 * JavaScript supports several types of conditional statements:
 * 1. if...else
 * 2. switch
 * 3. Conditional (ternary) operator
 */

// if...else

const year = 2024;
if (year % 4 == 0) console.log("Leap Year");

const checkAge = (age) => {
  if (age < 18) {
    return "Minor";
  } else {
    return "Adult";
  }
};

console.log(checkAge(16));
console.log(checkAge(18));
console.log(checkAge(20));

// switches

const getDayName = (day) => {
  switch (day) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      return "Invalid day";
  }
};

console.log(getDayName(0));
console.log(getDayName(3));
console.log(getDayName(6));

/*
 * Conditional (ternary) operator
 * The conditional (ternary) operator is a shorthand way to write an if...else statement.
 * It takes three operands: a condition, a value if true, and a value if false.
 * The syntax is: condition ? valueIfTrue : valueIfFalse
 */

// syntax: let result = condition ? value1 : value2;
const age = 100;
let accessAllowed = age > 18 && age < 80 ? true : false;
console.log(accessAllowed ? "Access granted" : "Access denied");

let message =
  age < 3
    ? "Hi, baby!"
    : age < 18
    ? "Hello!"
    : age < 100
    ? "Greetings!"
    : "What an unusual age!";
console.log(message);
