/**
 * 1) 1970년 1월 1일과 1970년 1월 2일의 차이를 초로 나타내시오.
 * 2) 이 달의 날짜 5개를 무작위로 만들어 역순으로 정렬하시오.
 * 3) 2024년의 오늘에 해당하는 요일을 출력하시오.
 * 4) 오늘로부터 100일 후의 날짜는?
 */

const ONE_DAT_MIL_SEC = 86400000;
const after_days = 100;
const random = (s, e) => Math.floor((e - s + 1) * Math.random()) + s;
let arr = new Array();
for (let i = 0; i < 5; i++) {
  arr.push(Date.parse(`2023/08/${random(1, 31)} UTC`));
}
arr.sort((a, b) => b - a);

const d1 = Date.parse('1970/1/2 UTC');
const d2 = arr.map(a => new Date(a));
const d3 = new Date().getDate();
const d4 = new Date(Date.now() + ONE_DAT_MIL_SEC * after_days);

console.log('🚀 ~ d1:', d1);
console.log('🚀 ~ d2:', d2);
console.log('🚀 ~ d3:', d3);
console.log('🚀 ~ d4:', d4);
