/**
 * Part 1. 주어진 정수 배열에서 각 요소를 제곱한 값들과 제곱근 값들을 반환하는 함수를
 * for-of, forEach, map을 사용하여 각각 작성하시오.
 */

const arr = [1, 4, 9];

const powSqrtByForOf = arr => {
  const p = [];
  const q = [];

  for (const elem of arr) {
    p.push(elem ** 2);
    q.push(Math.sqrt(elem));
  }

  return [p, q];
};

const powSqrtByForEach = arr => {
  const p = [];
  const q = [];

  arr.forEach(elem => {
    p.push(elem ** 2);
    q.push(Math.sqrt(elem));
  });

  return [p, q];
};

const powSqrtByMap = arr => {
  const p = arr.map(elem => elem ** 2);
  const q = arr.map(elem => Math.sqrt(elem));

  return [p, q];
};

console.log(powSqrtByForOf(arr));
console.log(powSqrtByForEach(arr));
console.log(powSqrtByMap(arr));
