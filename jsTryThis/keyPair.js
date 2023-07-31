/**
 * Part 1. 다음과 같은 정수 배열이 주어지고 양의 정수 N이 주어졌을 때,
 *  배열에서 합이 N이 되는 두 개의 요소(index)를 찾는 keyPair(arr, N) 함수를 작성하시오.
 */

const decompose = N => {
  let obj = new Object();
  for (let i = 1; i <= N / 2; i++) {
    obj[i] = N - i;
  }
  return obj;
};

const keyPair = (arr, N) => {
  const table = decompose(N);
  const checker = new Array(arr.length).fill(0);
  let i, j;
  for (const a of arr) {
    if (!checker[arr.indexOf(a)] && arr.indexOf(table[a]) !== -1) {
      checker[arr.indexOf(a)] = 1;
      i = arr.indexOf(a);
      j = arr.lastIndexOf(table[a]);
      return [i, j];
    }
  }
  return [(i = -1), (j = -1)];
};

const a = keyPair([1, 4, 45, 6, 10, 8], 16); // [3, 4]
console.log('🚀 ~ a:', a);

const b = keyPair([1, 2, 4, 3, 6], 10); // [2, 4]
console.log('🚀 ~ b:', b);

const c = keyPair([1, 2, 3, 4, 5], 9); // [3, 4]
console.log('🚀 ~ c:', c);
