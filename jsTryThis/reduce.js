const reduce = (arr, fn, initValue) => {
  let i = 0;
  let acc = initValue ?? (i += 1, arr[0]);
  for(;i < arr.length; i++) {
    acc = fn(acc, arr[i]);
  }
  return acc;
};
console.log(reduce([1,2,3], (s, a) => s + a, 0));
console.log(reduce([1,2,3], (s, a) => s + a));
console.log(reduce([2,2,2], (s, a) => s * a, 1));