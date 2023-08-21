/**
 * Part 1. 특정 범위의 난수를 발생시키는 함수를 작성하시오.
 */

const rand = (s, e) => Math.floor((e - s + 1) * Math.random()) + s;

const a = rand(1, 10);
const b = rand(0, 9);
const c = rand(100, 200);
console.log('🚀 ~ a:', a);
console.log('🚀 ~ b:', b);
console.log('🚀 ~ c:', c);

/**
 * Part 2. 1~10 사이의 난수를 무수히 발생시켜 분포를 나타내시오. (난수가 과연 고르게 분포되었을까?)
 */
const arr = Array.from({ length: 10 }, (v, i) => 0);
for (let i = 1; i <= 1000000000; i += 1) {
  const i = rand(0, 9);
  // console.log('🚀 ~ i:', i);
  arr[i] += 1;
}
console.log('🚀 ~ arr:', arr);
console.log(
  Math.max(...arr),
  Math.min(...arr),
  Math.max(...arr) - Math.min(...arr)
);
