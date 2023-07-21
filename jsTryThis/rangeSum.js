/**
 * Part 1. 다음과 같은 정수 배열이 주어졌을 때 구간의 합을 구하는 rangeSum 함수를 작성하시오.
 */

//           0  1  2  3  4  5  6  7  8
const arr = [1, 3, 4, 2, 5, 8, 6, 7, 9];

const rangeSum = (here, there) => {
  if(here > there) {
    [there, here] = [here, there];
  }

  const temp = arr.slice(here, there+1);
  const sum = temp.reduce((acc, cur) => acc + cur);
  console.log("🚀 ~ rangeSum ~ sum:", sum);
  
  return sum
};

rangeSum(2, 5); // 19 = 4 + 2 + 5 + 8
rangeSum(3, 5); // 15
rangeSum(1, 4); // 14
rangeSum(0, 4); // 15
rangeSum(5, 8); // 30
rangeSum(6, 8); // 22
rangeSum(8, 6); // 22 // 추가 케이스
rangeSum(2, 8); // 41
rangeSum(4, 4); // 5