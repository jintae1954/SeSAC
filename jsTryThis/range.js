/**
 * Part 1. 다음과 같은 정수 배열을 생성하는 range 함수를 구현하시오.
 */
const range = (start, end, stepSize) => {
  const ret = [];

  stepSize = stepSize ?? ( end >= start ? 1 : -1 );

  console.log("start end stepSize", start, end, stepSize);

  for(i = start; end >= start ? i <= end : i > end; i += stepSize) {
    ret.push(i);
  }

  return ret;
};

const a = range(1, 10, 1); // [1,2,3,4,5,7,8,9,10]
console.log("🚀 ~ a:", a);
const b = range(1, 10, 2); // [1,3,5,7,9]
console.log("🚀 ~ b:", b);
const c = range(1, 10); // [1,2,3,4,5,7,8,9,10]
console.log("🚀 ~ c:", c);
const d = range(10, 1); // [10,9,8,7,6,5,4,3,2,1]
console.log("🚀 ~ d:", d);
const e = range(10, 1, -2); // [10,8,6,4,2]
console.log("🚀 ~ e:", e);

// range(5); // [1,2,3,4,5]
// range(-5); // [-5,-4,-3,-2,-1]
// range(5, 5, 0); // [5]
// range(5, 5, -1); // [5]

// range(5, 1, 1); // []
// range(1, 5, -1); // []

// range(0); // [0]
// range(0, -1); // [0, -1]
// range(0, -3); // [0, -1, -2, -3]
// range(-3, 0); // [-3, -2, -1, 0]
// range(0, 0, 5); // [0]  