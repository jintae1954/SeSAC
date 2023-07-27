/**
 * Part 1. 함수를 한번만 실행하게 하는 once함수를 작성하시오.
 */
const once = (fn) => {
  let flag = false;

  return (...args) => flag ? undefined : (flag = true, fn(...args));
};

const func = once( (x, y) => `금일 운행금지 차량은 끝번호 ${x}와 ${y}입니다.` );

console.log(func(1, 6)); // 금일 운행금지 차량은 끝번호 1와 $6입니다.
console.log(func(2, 7)); // undefined
console.log(func(3, 8)); // undefined