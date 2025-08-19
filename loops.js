/**
 * Loops: while and for
 */

/**
 * The “while” loop
 * Syntax
 * while (condition) {
 * // code
 * // so-called "loop body"
 * }
 */
console.log("--- while loop ---");
let i = 0;
while (i < 3) {
  // shows 0, then 1, then 2
  console.log(i);
  i++;
}

i = 3;
// as 0 is a falsy
while (i) {
  console.log(i);
  i--;
}

/**
 * The “do…while” loop
 * Syntax
 * do {
 * // code
 * // so-called "loop body"
 * } while (condition);
 */

console.log("--- do while loop ---");

i = 0;
do {
  console.log(i);
  i++;
} while (i < 3);

/**
 * The “for” loop
 * Syntax
 * for (initialization; condition; iteration) {
 * // code
 * // so-called "loop body"
 * }
 */

console.log("--- The “for” loop ---");

for (let i = 0; i < 3; i++) {
  console.log(i);
}

/**
 * Explanation:
 *
 * The “for” loop has four parts:
 * begin	let i = 0	Executes once upon entering the loop.
 * condition	i < 3	Checked before every loop iteration. If false, the loop stops.
 * body	alert(i)	Runs again and again while the condition is truthy.
 * step	i++	Executes after the body on each iteration.
 */
for (let i = 1; i < 11; i++) {
  console.log(`${i} * 2 = ${i * 2}`);
}
// Skipping parts

// i = 3 defined above;
for (; i <= 10; i++) {
  console.log(`${i} * 2 = ${i * 2}`);
}

// i = 3 defined above; but i has became 11 by above loop;
console.log(i);
for (; i; i--) {
  console.log(`${i} * 2 = ${i * 2}`);
}

// eliminating the last decrement
i = 5;
for (; i; ) {
  console.log(`${i} * 2 = ${i * 2}`);
  i--;
}

for (;;) {
  console.log("infinite loop");
  if (i >= 0) break;
}
