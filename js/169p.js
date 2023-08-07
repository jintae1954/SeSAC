/**
 * Part 1. Array.prototype에 Set을 사용하여 uniqBy() 함수를 추가하시오.
 */

const hong = { id: 1, name: 'Hong', dept: 'HR' };
const kim = { id: 2, name: 'Kim', dept: 'Server' };
const lee = { id: 3, name: 'Lee', dept: 'Front' };
const park = { id: 4, name: 'Park', dept: 'HR' };
const ko = { id: 5, name: 'Ko', dept: 'Server' };
const loon = { id: 6, name: 'Loon', dept: 'Sales' };
const choi = { id: 7, name: 'Choi', dept: 'Front' };

Array.prototype.uniqBy = function (prop) {
  const ret = new Set(this.map(user => user[prop]));
  return [...ret];
};

const users = [hong, kim, lee, park, ko, loon, choi];
const u = users.uniqBy('dept');
console.log('🚀 ~ u:', u); // ['HR', 'Server', 'Front', 'Sales']
