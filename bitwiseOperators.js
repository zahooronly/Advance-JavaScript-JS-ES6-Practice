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
 * This operator returns a number that has bits set to 1 where both corresponding bits of the operands are 1.
 */

const bitwiseAND = (a, b) => a & b;
console.log(bitwiseAND(5, 3)); // Example usage: 5 & 3 = 1

/**
 * Bitwise OR
 * @param {*} a
 * @param {*} b
 * @returns {number} - The result of a | b.
 * This operator returns a number that has bits set to 1 where at least one of the corresponding bits of the operands is 1.
 */

const bitwiseOR = (a, b) => a | b;
console.log(bitwiseOR(5, 3)); // Example usage: 5 | 3 = 7

/**
 * Bitwise XOR
 * @param {*} a
 * @param {*} b
 * @returns {number} - The result of a ^ b.
 * This operator returns a number that has bits set to 1 where the corresponding bits of either but not both operands are 1.
 */

const bitwiseXOR = (a, b) => a ^ b;
console.log(bitwiseXOR(5, 3)); // Example usage: 5 ^ 3 = 6

/**
 * Bitwise NOT
 * @param {*} a
 * @returns {number} - The result of ~a.
 * This operator inverts the bits of its operand, turning 0s into 1s and 1s into 0s.
 */

const bitwiseNOT = (a) => ~a;
console.log(bitwiseNOT(5)); // Example usage: ~5 = -6

/**
 * Left Shift
 * @param {*} a
 * @param {*} b
 * @returns {number} - The result of a << b.
 * This operator shifts the bits of the first operand to the left by the number of positions specified by the second operand.
 */

const leftShift = (a, b) => a << b;
console.log(leftShift(5, 1)); // Example usage: 5 << 1 = 10

/**
 * Right Shift
 * @param {*} a
 * @param {*} b
 * @returns {number} - The result of a >> b.
 * This operator shifts the bits of the first operand to the right by the number of positions specified by the second operand.
 */

const rightShift = (a, b) => a >> b;
console.log(rightShift(5, 1)); // Example usage: 5 >> 1 = 2
