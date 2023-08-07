/**
 * Part 1. 두 개의 수를 입력 받아 더하기를 수행하는 제너레이터를 작성하시오.
 */
function* add() {
  const a = yield `첫 번째 수`;
  console.log(a);
  const b = yield `두 번째 수`;
  console.log(b);
  return a + b;
}

const itAdd = add();
console.log('🚀 ~ itAdd:', itAdd.next()); // 첫 번째 수 -> 1
console.log('🚀 ~ itAdd:', itAdd.next(1)); // 두 번째 수 -> 2
console.log('🚀 ~ itAdd:', itAdd.next(2)); // 3
