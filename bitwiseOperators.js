/**
 * Bitwise Operators are used to perform operations on binary numbers. In Javascript, we have
 * 1. Bitwise AND (&)
 * 2. Bitwise OR (|)
 * 3. Bitwise XOR (^)
 * 4. Bitwise NOT (~)
 * 5. Left Shift (<<)
 * 6. Right Shift (>>)
 * Have practically less use in modern JavaScript,
 * but can still be found in certain scenarios, especially in performance-critical code.
 */

/**
 * Bitwise AND
 * @param {*} a
 * @param {*} b
 * @returns {number} - The result of a & b.
 */

const bitwiseAND = (a, b) => a & b;
console.log(bitwiseAND(5, 3)); // Example usage: 5 & 3 = 1

/**
 * Bitwise OR
 * @param {*} a
 * @param {*} b
 * @returns {number} - The result of a | b.
 */

const bitwiseOR = (a, b) => a | b;
console.log(bitwiseOR(5, 3)); // Example usage: 5 | 3 = 7

/**
 * Bitwise XOR
 * @param {*} a
 * @param {*} b
 * @returns {number} - The result of a ^ b.
 */

const bitwiseXOR = (a, b) => a ^ b;
console.log(bitwiseXOR(5, 3)); // Example usage: 5 ^ 3 = 6

/**
 * Bitwise NOT
 * @param {*} a
 * @returns {number} - The result of ~a.
 */

const bitwiseNOT = (a) => ~a;
console.log(bitwiseNOT(5)); // Example usage: ~5 = -6

/**
 * Left Shift
 * @param {*} a
 * @param {*} b
 * @returns {number} - The result of a << b.
 */

const leftShift = (a, b) => a << b;
console.log(leftShift(5, 1)); // Example usage: 5 << 1 = 10

/**
 * Right Shift
 * @param {*} a
 * @param {*} b
 * @returns {number} - The result of a >> b.
 */

const rightShift = (a, b) => a >> b;
console.log(rightShift(5, 1)); // Example usage: 5 >> 1 = 2
