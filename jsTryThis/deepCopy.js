/**
 * Part 1. 깊은 복사를 하는 deepCopy를 완성하시오.
 */
class Dog {
  constructor(name) {
    this.name = name;
  }
}
const arr = [1, 2, 3];
const hong = { id: 1, name: 'Hong' };
const lucy = new Dog('Lucy');
const kim = {
  nid: 3, // number
  addr: 'Pusan', // string
  arr: [1, 2, 3, { aid: 1 }, [10, 20]], // object
  oo: { id: 1, name: 'Hong', addr: { city: 'Seoul' } }, // object
  xx: null, // object
  yy: function () {
    // function
    console.log('yy>>', this.oo); //
  },
  yyy() {
    // function
    console.log('yyy>>', this.addr); //
  },
  [Symbol()]: 9, // number
  [Symbol()]: Symbol('symbol2'), // symbol
  zs: new Set([arr, hong]), // object
  zws: new WeakSet([arr, hong]), // object
  zm: new Map([[hong, arr]]), // object
  zwm: new WeakMap([[hong, arr]]), // object
  dog: lucy, // object
};

// kim이 가진 key(property)의 type 확인하기
Reflect.ownKeys(kim).forEach(key => console.log(key, typeof kim[key]));

const deepCopy = target => {
  // primitive 또는 null 처리
  if (
    target === null ||
    typeof target !== 'object' ||
    target instanceof WeakMap ||
    target instanceof WeakSet
  ) {
    return target;
  }

  // 복사된 객체를 담을 변수 생성
  const clone = new target.constructor();

  // 깊은 복사의 대상이 Set이면, 값을 복제(값은 객체일 수 있음)
  // 깊은 복사의 대상이 Map이면, 키와 값을 복제(키 또는 값이 객체일 수 있음)
  if (target instanceof Set) {
    [...target.keys()].forEach(_key => clone.add(deepCopy(_key)));
    return clone;
  } else if (target instanceof Map) {
    [...target.entries()].forEach(([_key, _value]) =>
      clone.set(deepCopy(_key), deepCopy(_value))
    );
    return clone;
  }

  // 대상마다 깊은 복사를 시행
  for (const key of Reflect.ownKeys(target)) {
    clone[key] = deepCopy(target[key]);
  }

  return clone;
};

const new_kim = deepCopy(kim);

// 속성 변경 전
console.log('\n속성 변경 전');
console.log('kim\n', kim);
console.log('new_kim\n', new_kim);

kim.yy();
new_kim.yy();

kim.yyy();
new_kim.yyy();

// 속성 변경 후
new_kim.addr = 'Dague';
new_kim.oo.addr.city = 'Tokyo';
for (const key of new_kim.zs.keys()) {
  // console.log(key);
  key[0] = 2023;
}
for (const key of new_kim.zm.keys()) {
  // console.log(key);
  key.id = 987654321;
}

console.log('\n속성 변경 후');
console.log('kim\n', kim);
console.log('new_kim\n', new_kim);

kim.yy();
new_kim.yy();

kim.yyy();
new_kim.yyy();
