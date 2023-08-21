/**
 * Part 1. 아래와 같은 형태로 출력하는 fmt 함수를 작성하시오.
 *  주문합계 :   45,000원
 *  세액합계 :    4,500원
 */
const LABEL_SIZE = 7;
const PRICE_SIZE = 8;

const fmt = (str, num) => {
  const [label, unit] = str;
  const labelStr = label.padEnd(LABEL_SIZE, ' ');
  const numStr = num.toLocaleString().padStart(PRICE_SIZE, ' ');

  return `${labelStr}${numStr}${unit}`;
};

let price = 45000;
let vat = 4500;
console.log(fmt`주문합계: ${price}원`);
console.log(fmt`세액합계: ${vat}원`);
