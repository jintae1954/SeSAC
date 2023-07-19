/**
 * Part 1. deleteArray 함수를 순수함수로 구현하시오.
 */

const arr = [1,2,3,4];

// console.log(arr.slice(2)); // [3,4]
// console.log(arr.slice(1,3)); // [2,3]

const deleteArray = (arr, from, to = arr.length) => {
  let res = [];
  for(const val of arr) {
    if(arr.slice(from, to).includes(val))
      continue;
    
    res.push(val);
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


const deleteObject = () => {
  
};

console.log(deleteObject(users, 2));
console.log(deleteObject(users, 'id', 2));
console.log(deleteObject(users, 'name', 'Lee'));