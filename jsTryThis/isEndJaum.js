/**
 * Part 1. 문자열이 한글 자음으로 끝나는지 체크하는 isEndJaum(str)을 작성하시오.
 */

const isEndJaum = str => {
  // 0 1 3 6 7 8 9
  // L M N R
  const reg = /[ㄱ-ㅎ0136789LMNR]/;
};

const a = isEndJaum('강원도');
console.log('🚀 ~ a:', a);
const b = isEndJaum('바라당');
console.log('🚀 ~ b:', b);
const c = isEndJaum('ㅜㅜ');
console.log('🚀 ~ c:', c);
const d = isEndJaum('케잌');
console.log('🚀 ~ d:', d);
const e = isEndJaum('점수 A'); // '알파벳L'은 true
console.log('🚀 ~ e:', e);
const f = isEndJaum('24'); // '23'은 true
console.log('🚀 ~ f:', f);

/**
 * Part 2. 조사 '이/가', '을/를', '은/는'을 알아서 붙이는 함수를 작성하시오.
 */
