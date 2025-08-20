// const arr = [];
// arr.push(1);
// arr.push(2);
// arr.push(3);

// console.log(arr);

// const arrLike = { 0: "foo", 1: "bar", 2: "baz", length: 3 };

// bad
// const arr = Array.prototype.slice.call(arrLike);

// good
// const arr = Array.from(arrLike);

// console.log(arr);
// const a = [1, 2] == [1, 2];
// console.log(a);

let fruits = ["Apple", "Orange", "Plum"];
console.log(fruits[0]);

for (i in fruits) {
  console.log(fruits[i]);
}

let arr = [
  "Apple",
  { name: "John" },
  true,
  function abc() {
    console.log("function invoked!");
    console.log("hello");
  },
];
arr[3]();
for (_ in arr) {
  console.log(arr[_]);
}

// console.log(fruits);
// console.log(`Removed index is: ${fruits.pop()}`);
// console.log(fruits);
// console.log(`Removed index is: ${fruits.shift()}`);
// console.log(fruits);
// console.log(`Added index is: ${fruits.unshift("Apple", "Pineapple", "Lemon")}`);
// console.log(fruits);
// console.log(`Added index is: ${fruits.push("Plum", "Peach")}`);
// console.log(fruits);

// console.log(`Fruits : ${fruits}`);
// let newBasket = fruits;
// console.log(`newBasket: ${newBasket}`);

// newBasket.push("Hiiiii");
// fruits[35] = "Banana";
// fruits[34] = null;
// console.log(`Fruits : ${fruits}`);
// console.log(`Fruits : ${fruits.length}`);
// console.log(`newBasket: ${newBasket}`);

// console.log("-------------------------loop with in");
// for (fruit in fruits) {
//   console.log(fruits[fruit]);
// }
// console.log("-------------------------loop with of");
// for (fruit of fruits) {
//   if (fruit == undefined) continue;
//   console.log(fruit);
// }

// Arrays methods

/**
 * forEach() - Do something with each item
 */

forEachList = ["apple", "banana", "cherry"];

forEachList.forEach((item, index, array) => {
  console.log(`${item} is at index ${index} in ${array}`);
});

forEachSq = [1, 2, 3, 4];
const newForEachSq = forEachSq.forEach((item) => {
  console.log(`Square root of ${item} is: ${item * item}`);
  return item * item;
});
console.log(forEachSq);
console.log(newForEachSq);
/**
 * map() - Transform each item and make a new array
 */

mapList = ["a", "b", "c"];

const newMapList = mapList.map((item) => {
  console.log(`Upper case of ${item} is: ${item.toUpperCase()}`);
  return item.toUpperCase();
});
console.log(mapList);
console.log(newMapList);

/**
 * filter() - Keep only the items you want
 */

const filterList = [30, 60, 90];

const newFilterList = filterList.filter((item) => {
  console.log(`Checking if ${item} is greater than 50`);
  return item > 50;
});
console.log(filterList);
console.log(newFilterList);

const filterCharList = ["cat", "dog", "elephant"];

const newFilterCharList = filterCharList.filter((item) => {
  console.log(`Checking if ${item} is a 3 char word.`);
  return item.length == 3;
});
console.log(filterCharList);
console.log(newFilterCharList);

/**
 * reduce() - Combine all items into one result
 */

const reduceList = [2, 4, 6, 8];
const updatedReduceList = reduceList.reduce((sum, current) => sum + current, 0);
console.log(reduceList);
console.log(updatedReduceList);

const reduceCharList = ["J", "S"];
const updatedReduceCharList = reduceCharList.reduce(
  (sum, current) => sum + current,
  ""
);

console.log(reduceCharList);
console.log(updatedReduceCharList);

/**
 * find() - Find the first item that matches
 */

const findList = [4, 7, 9, 11];
const found = findList.find((item) => item % 3 == 0);
console.log(findList);
console.log(found);

const findListChar = ["Zara", "Ali", "Tina"];
const foundChar = findListChar.find((item) => item[0] == "A");

console.log(findListChar);
console.log(foundChar);

/**
 * findIndex()
 */

const findIndexList = [90, 101, 102];
const foundIndex = findIndexList.findIndex((item) => item > 100);
console.log(findIndexList);
console.log(foundIndex);

const findIndexCharList = ["dog", "cat", "mouse"];
const foundIndexChar = findIndexCharList.findIndex((item) => item == "cat");
console.log(findIndexCharList);
console.log(foundIndexChar);

/**
 * some()
 */

const someList = [80, 55, 35, 90];
const someCheck = someList.some((item) => item < 40);
console.log(someList);
console.log(someCheck);

const someCharList = ["apple", "banana", "text"];
const someCheckList = someCharList.some((item) => item.includes("x"));
console.log(someCharList);
console.log(someCheckList);

/**
 * every() - Check if ALL items pass a test
 */

const everyList = [2, 4, 6];
const everyCheck = everyList.every((item) => item % 2 == 0);
console.log(everyList);
console.log(everyCheck);

const everyCharList = ["Sam", "Sara"];
const everyCharCheck = everyCharList.every((item) => item.length == 4);
console.log(everyCharList);
console.log(everyCharCheck);

/**
 * Changing Arrays:
 */

/**
 * concat() - Join two arrays together
 */

console.log([1, 2].concat([3, 4]));

/**
 * slice() - Copy a piece of an array
 */

const arrS = [1, 2, 3, 4, 5, 6, 7, 8];
const arrNew = arrS.slice(1, 6);
console.log(arrS);
console.log(arrNew);

/**
 * splice() - Remove or add items at any position
 */

const arrSp=arrS.splice(2,1)
console.log(arrS)
console.log(arrSp)