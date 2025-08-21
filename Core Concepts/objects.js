/**
 * Objects
 * Objects are a fundamental part of JavaScript and are used to store collections of data and more complex entities.
 * They are key-value pairs where keys are strings (or Symbols) and values can be any data type.
 */

const userData = {
  name: "Alice",
  age: 25,
  city: "Los Angeles",
};

console.log(userData);
const createObject = () => {
  return {
    name: "John",
    age: 30,
    city: "New York",
  };
};
console.log(createObject());

console.log({ age: userData.age });
console.log(userData.age);

// adding new property
userData.education = "Bachelor's Degree";
console.log(userData);

// updating property
userData.age = 26;
console.log(userData);

// deleting property
delete userData.city;
console.log(userData);

/**
 * Object Constructor Functions
 * These are special functions used to create objects.
 * They provide a way to create multiple objects with similar properties and methods.
 */

function User(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;
}

const user1 = new User("Alice", 25, "Los Angeles");
const user2 = new User("Bob", 30, "New York");

console.log(user1);
console.log(user2);

/**
 * Square brackets
 * Square brackets are used to access object properties. These are much more powerful than dot notation, especially when dealing with dynamic property names.
 * Example:
 */

const user = {};

// set
user["likes birds"] = true;

// get
console.log(user["likes birds"]);

user["age"] = 26;
let key = "age";
console.log(user.key); // This will log 'key' as undefined
console.log(user[key]);

// delete
delete user["likes birds"];

console.log(user);

/**
 * Dynamic Property Names
 */

let fruit = "apple";
let bag = {
  [fruit + "Computers"]: 5, // bag.appleComputers = 5
};

console.log(bag);

/**
 * Property value shorthand
 * If key and property name are the same, you can omit the key
 */

let custume = "jocker";
let age = 30;

const userNew = {
  custume,
  age,
};

console.log(userNew);

/**
 * Property names Limitations.
 * There’s a minor gotcha with a special property named __proto__. We can’t set it to a non-object value:
 */

let obj = {};
obj.__proto__ = 5; // assign a number
console.log(obj.__proto__);

/**
 * Property existence test, “in” operator
 */

console.log("age" in userData);
console.log("country" in userData);

/**
 * For..in loop
 * The for..in loop is used to iterate over the enumerable properties of an object.
 */

for (let key in userData) {
  console.log(key + ": " + userData[key]);
}

/**
 * Ordered like an object
 * Are objects ordered? In other words, if we loop over an object, do we get all properties in the same order they were added? Can we rely on this?
 * The short answer is: “ordered in a special fashion”: integer properties are sorted, others appear in creation order. The details follow.
 * As an example, let’s consider an object with the phone codes:
 */

let codes = {
  49: "Germany",
  "+41": "Switzerland",
  44: "Great Britain",
  age: 30,
  name: "Pakistan",
  1: "USA",
};

for (let code in codes) {
  console.log(code); // 1, 41, 44, 49
}

// return true if obj is empty and false otherwise.

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}
