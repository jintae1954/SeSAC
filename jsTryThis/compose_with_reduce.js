const arr = [1,2,3,4,5];
const f1 = n => n ** 2;
const f2 = n => Math.sqrt(n);
const f3 = n => n ** 3;

const result = arr.map(f1).map(f2).map(f3);
console.log("🚀 result", result);

const results3 = [f1, f2, f3].reduce((acc, f) => acc.map(f), arr);
console.log("🚀 results3:", results3);
