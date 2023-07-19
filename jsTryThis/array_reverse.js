/**
 * Part 1. reverse 함수를 순수함수로 구현하시오.
 */

const arr = [1,2,3,4,5];
const makeReverseArray = (arr) => [...arr].reverse();
console.log("🚀  makeReverseArray:", makeReverseArray(arr));
console.log("🚀 ~ arr:", arr);

/**
 * Part 2. reverse 함수를 비순수함수로 구현하시오.
*/
const reverseArray = (arr) => arr.reverse();
console.log("🚀 ~ reverseArray:", reverseArray(arr));
console.log("🚀 ~ arr:", arr);