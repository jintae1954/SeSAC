/**
 * Part 1. splice 함수를 순수함수로 구현하시오.
 */

const arr = [1,2,3,4,5];

const splice = (src, start, deleteCnt = src.length, ...newItem) => {
  console.log(src.slice(start, start + deleteCnt));

  let res = [];
  for(let i = 0; i < src.length; i += 1) {
    if(start <= i && i < start + deleteCnt)
      continue;
    res.push(src[i]);
  }

  let head = res.slice(0, start);
  let tail = res.slice(start);
  res = [...head, ...newItem, ...tail];

  return res;
}

// arr = [1,2,3,4,5] -> [1,5] -> []

const a1 = splice(arr, 1, 3); // a1 = [1, 5]
console.log("🚀 ~ a1:", a1);

const a2 = splice(a1, 1, 0, 2, 3, 4); //  a2 = [1, 2, 3, 4, 5]
console.log("🚀 ~ a2:", a2);

const a3 = splice(a2, 2); // a3 = [1, 2]
console.log("🚀 ~ a3:", a3);

const a4 = splice(a3, 1, 1, 3, 4, 5); // a4 = [1, 3, 4, 5]
console.log("🚀 ~ a4:", a4);

const a5 = splice(a4, 2, 2, 7, 8, 9); // a5 = [1, 3, 7, 8, 9]
console.log("🚀 ~ a5:", a5);
