/**
 * Part 1. for문을 이용하여 다음과 같이 출력하시오.
 *  0.1
 *  0.2
 *  0.3
 *  0.4
 *  ...
 *  0.9
 */

for (let i = 0.1; i < 1; i += 0.1) {
  console.log(Math.floor(i * 10) / 10);
}
