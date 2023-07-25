/**
 * Part 1. 다음과 같은 정수 배열을 생성하는 range 함수를 구현하시오.
 */
const range = (start, end, stepSize) => {
  // end - start = 기울기
  // setpSize = 증가 방향
  if(end - start < 0 && stepSize > 0) return [];
  if(end - start > 0 && stepSize < 0) return [];
  if(end === undefined) {
    if(start > 0) {
      const temp = start;
      start = 1;
      end = temp;
    }
    else if(start === 0) {
      start = 0;
      end = 0;
    }
    else {
      end = -1;
    }
  }
  stepSize = stepSize ?? ( end >= start ? 1 : -1 );
  // console.log("start end stepSize", start, end, stepSize);
  const ret = [start];
  for(let i = start + stepSize; ((end - start !== 0) && (end - start > 0 ? i <= end : i >= end)); i += stepSize) {
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

const f = range(5); // [1,2,3,4,5]
console.log("🚀 ~ f:", f);
const g = range(-5); // [-5,-4,-3,-2,-1]
console.log("🚀 ~ g:", g);
const h = range(5, 5, 0); // [5]
console.log("🚀 ~ h:", h);
const i = range(5, 5, -1); // [5]
console.log("🚀 ~ i:", i);

const j = range(5, 1, 1); // []
console.log("🚀 ~ j:", j);
const k = range(1, 5, -1); // []
console.log("🚀 ~ k:", k);

const l = range(0); // [0]
console.log("🚀 ~ l:", l);
const m = range(0, -1); // [0, -1]
console.log("🚀 ~ m:", m);
const n = range(0, -3); // [0, -1, -2, -3]
console.log("🚀 ~ n:", n);
const o = range(-3, 0); // [-3, -2, -1, 0]
console.log("🚀 ~ o:", o);
const p = range(0, 0, 5); // [0]  
console.log("🚀 ~ p:", p);
