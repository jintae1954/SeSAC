/**
 * Part 1. deleteArray 함수를 순수함수로 구현하시오.
 */

const arr = [1,2,3,4];

// console.log(arr.slice(2)); // [3,4]
// console.log(arr.slice(1,3)); // [2,3]

const deleteArray = (arr, from, to = arr.length) => {
  let res = [];

  for(const elem of arr) {
    if(arr.slice(from, to).includes(elem))
      continue;
    res.push(elem);
  }

  return res;
};

console.log(deleteArray(arr, 2)); // [1, 2]
console.log(deleteArray(arr, 1, 3)); // [1, 4]

/**
 * Part 2. deleteObject 함수를 순수함수로 구현하시오.
 */

const users = [
  {id: 1, name: 'Hong'},
  {id: 2, name: 'Kim'},
  {id: 3, name: 'Lee'},
];

const deleteObject = (arr, key, value) => {
  let res = [];
  for(const [_k, _v] of Object.entries(arr)) {
    if(key.toString() === _k) continue;
    else if(value && _v[key] === value) continue;
    res.push(_v);
  }

  return res;
};

console.log(deleteObject(users, 2)); // Hong, Kim
console.log(deleteObject(users, 'id', 2)); // Hong, Lee
console.log(deleteObject(users, 'name', 'Lee')); // Hong, Kim