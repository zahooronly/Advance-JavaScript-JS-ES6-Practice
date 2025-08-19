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

console.log(fruits);
console.log(`Removed index is: ${fruits.pop()}`);
console.log(fruits);
console.log(`Removed index is: ${fruits.shift()}`);
console.log(fruits);
console.log(`Added index is: ${fruits.unshift("Apple", "Pineapple", "Lemon")}`);
console.log(fruits);
console.log(`Added index is: ${fruits.push("Plum", "Peach")}`);
console.log(fruits);

console.log(`Fruits : ${fruits}`);
let newBasket = fruits;
console.log(`newBasket: ${newBasket}`);

newBasket.push("Hiiiii");
fruits[35] = "Banana";
fruits[34] = null;
console.log(`Fruits : ${fruits}`);
console.log(`Fruits : ${fruits.length}`);
console.log(`newBasket: ${newBasket}`);

console.log("-------------------------loop with in");
for (fruit in fruits) {
  console.log(fruits[fruit]);
}
console.log("-------------------------loop with of");
for (fruit of fruits) {
  if (fruit == undefined) continue;
  console.log(fruit);
}
