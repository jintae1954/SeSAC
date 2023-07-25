/**
 * 다음과 같은 정수 배열이 주어지고, 양의 정수 N이 주어졌을 때
 * 배열에서 합이 N이 되는 두 개의 요소(index)를 찾는 keyPair(arr, N) 함수를 작성하시오.
 */

const keyPair = (arr, N) => {
  for(let i = 0; i < arr.length; i++) {
    for(let j = i; j < arr.length; j++) {
      if(N === arr[i] + arr[j]) {
        return [i, j];
      }
    }
  }
  
  return undefined;
};

const a = keyPair([1, 4, 45, 6, 10, 8], 16); // [3, 4]
console.log("🚀 ~ a:", a);

const b = keyPair([1, 2, 4, 3, 6], 10); // [2, 4]
console.log("🚀 ~ b:", b);

const c = keyPair([1, 2, 3, 4, 5], 9); // [3, 4]
console.log("🚀 ~ c:", c);
