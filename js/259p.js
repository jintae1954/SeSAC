/**
 * Part 1. 테스트를 위한 임의의 시간(1초 미만)에 resolve를 실행하는 randTime 함수를 작성하시오.
 */
const rand = () => Math.floor(1000 * Math.random());

const randTime = val =>
  new Promise((resolve, reject) => {
    const time = rand();
    console.log(val, time);
    setTimeout(() => {
      resolve(val); // promise의 메서드는 mircoQueue에서 우선순위가 높기 때문에 resolve를 실행해버림!?
    }, time);
  });

[1, 2, 3, 4, 5].forEach(a => randTime(a).then(console.log));
