/**
 * Part 1. mapBy(), findBy(), filterBy() 함수를 작성하시오.
 *  - Array.prototype.mapBy = function() {...}
 */

const hong = { id: 1, name: 'Hong' };
const kim = { id: 2, name: 'Kim' };
const lee = { id: 3, name: 'Lee' };

const users = [hong, kim, lee];

Array.prototype.mapBy = function (prop) {
  return this.map(user => user[prop]);
};
Array.prototype.findBy = function (prop, val) {
  return [this.find(user => user[prop] === val)];
};
Array.prototype.filterBy = function (prop, val) {
  return this.filter(user => user[prop] === val);
};

const x = users.mapBy('id'); // [1,2,3]
console.log('🚀 ~ x:', x);

const y = users.mapBy('name'); // ['Hong', 'Kim', 'Lee']
console.log('🚀 ~ y:', y);

const z = users.findBy('name', 'Kim'); // [{id:2, name: 'Kim'}]
console.log('🚀 ~ z:', z);

const t = users.filterBy('id', 2); // [{id:2, name: 'Kim'}]
console.log('🚀 ~ t:', t);

/**
 * Part 2. firstObject, lastObject를 구현하시오.
 *  - const arr = [1,2,3,4,5];
 *  - arr.firstObject // 1
 *  - arr.lastObject // 5
 */
const arr = [1, 2, 3, 4, 5];

const a = [...arr].shift();
console.log('🚀 ~ a:', a);

const b = [...arr].pop();
console.log('🚀 ~ b:', b);

Object.defineProperties(Array.prototype, {
  firstObject: {
    get: function () {
      return this[0];
    },
  },
  lastObject: {
    get: function () {
      return this[this.length - 1];
    },
  },
});

console.log(arr.firstObject);
console.log(arr.lastObject);
