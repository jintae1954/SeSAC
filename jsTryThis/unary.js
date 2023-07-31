/**
 * Part 1. 고차함수에서 인수의 개수를 1개로 제한하여 실행하는 unary함수를 작성하시오.
 *  - arr.map(callback(value, index, array))
 *  - parseInt(string, radix)
 */

const arr = ['1', '2', '3'];

const r1 = arr.map(parseInt);
console.log('🚀 ~ r1:', r1);

const unary = fn => {
  return fn.length === 1 ? fn : arg => fn(arg);
};

const r2 = arr.map(unary(parseInt));
console.log('🚀 ~ r2:', r2);
