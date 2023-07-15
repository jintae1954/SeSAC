const reduce = (arr, fn, initValue = 0) => {
  let idx = 0;
  let acc = initValue ?? (idx++, arr[0]);
  for(let i = 0; i < arr.length; i++) {
    acc = fn(acc, arr[i]);
  }
  return acc;
};

console.log(reduce([1,2,3], (s, a) => s + a, 0));
console.log(reduce([1,2,3], (s, a) => s + a));
console.log(reduce([2,2,2], (s, a) => s * a, 1));