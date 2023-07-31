/**
 * Part 1. Emp type의 hong 객체에 fullName 기능을 Accessor Property를 사용하지 않고,
 *  proxy 생성자 함수를 이용하여 구현하시오.
 */

class Emp {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const hong = new Emp('Gildong', 'Hong');

const proxyHong = new Proxy(hong, {
  get(target, prop) {
    if (prop === 'fullName') {
      return `${target.firstName} ${target.lastName}`;
    } else {
      return target[prop];
    }
  },
  set(target, prop, value) {
    if (prop === 'fullName') {
      const [fn, ln] = value.split(' ');
      target.firstName = fn;
      target.lastName = ln;
    }
  },
});

console.log(proxyHong.fullName); // Gildong Hong

proxyHong.fullName = 'Kildong Hong';
console.log(proxyHong.fullName); // Kildong Hong
