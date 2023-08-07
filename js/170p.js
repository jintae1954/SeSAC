/**
 * Part 1. 교집합, 차집합, 합집합을 구현하시오.
 */

const A = [1, 2, 3, 4, 5, 3];
const B = [1, 22, 3, 44, 5];
const C = [11, 222, 3, 4, 555];

const intersect = (set1, set2) => {
  let s = new Set();
  for (const a of set1) {
    if (set2.includes(a)) {
      s.add(a);
    }
  }
  console.log(s);
  return s;
};
const diff = (set1, set2) => {
  let s = new Set();
  for (const a of set1) {
    if (!set2.includes(a)) {
      s.add(a);
    }
  }
  console.log(s);
  return s;
};
const union = (set1, set2) => {
  const s = new Set([...set1, ...set2]);
  console.log(s);
  return s;
};

intersect(A, B); //  1, 3, 5
intersect(A, C); // 3, 4

diff(A, B); // 2, 4
diff(B, A); // 22, 44
diff(A, C); // 1, 2, 5
diff(B, C); // 1, 22, 44, 5

union(A, B); // 1, 2, 3, 4, 5, 22, 44
union(A, C); // 1, 2, 3, 4, 5, 11, 222, 555
