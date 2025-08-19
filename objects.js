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
