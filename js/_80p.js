/**
 * Part 1. 원시값만 갖는 객체 kim을 복사하는 프로그램을
 *  Object의 클래스 메서드 spread 연산자를 사용하지 않고 작성하시오.
 */

const copyObject = object => {
  const clone = new object.constructor();
  for (const key of Reflect.ownKeys(object)) {
    clone[key] = object[key];
  }
  return clone;
};

const kim = { nid: 3, name: 'Kim', addr: 'Pusan' };
const newKim = copyObject(kim);
console.log('🚀 ~ newKim:', newKim);
newKim.addr = 'Daegu';
console.log(newKim.addr !== kim.addr);
console.log('🚀 ~ newKim:', newKim);
