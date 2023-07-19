/**
 * Part 1. push, pop, unshift, shift를 순수함수로 구현하시오.
 */
const myArray = [1,2,3,4];

const push = (arr, ...appendValues) => {
  return [...arr, ...appendValues];
};
const pop = (arr, cnt = 1) => {
  return arr.slice(arr.length - cnt);
};
const unshift = (arr, ...appendValues) => {
  return [...appendValues, ...arr];
};
const shift = (arr, cnt = 1) => {
  return arr.slice(cnt);
};

console.log(push(myArray, 5)); // [1, 2, 3, 4, 5]
console.log(pop(myArray)); // [4]
console.log(pop(myArray, 2)); // 2개 팝! ⇒ [3, 4]
console.log(unshift(myArray, 0)); // [0, 1, 2, 3, 4]
console.log(unshift(myArray, 7, 8)); // [7, 8, 1, 2, 3, 4]
console.log(shift(myArray)); // [2, 3, 4]
console.log(shift(myArray, 2)); // [3, 4]

console.log(myArray); // [1, 2, 3, 4]