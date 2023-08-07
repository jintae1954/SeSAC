/**
 * Part 1. 다음과 같은 정수 배열이 주어졌을 때, reduce를 이용하여 각 요소를
 *  다음의 순서로 처리하시오.
 *    - n => n ** 2
 *    - n => Math.sqrt(n)
 *    - n => n ** 3
 */
const arr = [1, 2, 3, 4, 5];

const f1 = n => n ** 2;
const f2 = n => Math.sqrt(n);
const f3 = n => n ** 3;

const result = arr.map(f1).map(f2).map(f3);
console.log('🚀 result', result);

const result2 = arr.reduce((acc, curr) => acc + curr);
console.log('🚀 ~ result2:', result2);

const result3 = [f1, f2, f3].reduce((acc, f) => acc.map(f), arr);
console.log('🚀 ~ result3:', result3);
