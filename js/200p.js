/**
 * Part 1. 문자열이 한글 자음으로 끝나는지 체크하는 isEndJaum(str)을 작성하시오.
 */

const ㄱ = 'ㄱ'.charCodeAt(0);
const ㅎ = 'ㅎ'.charCodeAt(0);
const 가 = '가'.charCodeAt(0);
const ENGS = [108, 76, 109, 77, 110, 78, 114, 82]; //'lLmMnNrR';
const NUMS = [48, 49, 51, 54, 55, 56]; //'013678';

const isEndJaum = str => {
  if (!str) return;

  const lStr = str.charCodeAt(str.length - 1);
  if (lStr >= ㄱ && lStr <= ㅎ) return true;
  if (ENGS.includes(lStr) || NUMS.includes(lStr)) return true;
  return (lStr - 가) % 28 > 0;
};

const 강원도 = isEndJaum('강원도');
const 바라당 = isEndJaum('바라당');
const ㅜㅜ = isEndJaum('ㅜㅜ');
const 케잌 = isEndJaum('케잌');
const 점수A = isEndJaum('점수A'); // '알파벳L'은 true
const 이십삼 = isEndJaum('23'); // '23'은 true

console.log('🚀 ~ 강원도:', 강원도);
console.log('🚀 ~ 바라당:', 바라당);
console.log('🚀 ~ ㅜㅜ:', ㅜㅜ);
console.log('🚀 ~ 케잌:', 케잌);
console.log('🚀 ~ 점수A:', 점수A);
console.log('🚀 ~ 이십삼:', 이십삼);

/**
 * Part 2. 조사 '이/가', '을/를', '은/는'을 알아서 붙이는 함수를 작성하시오.
 */
const iga = str => (isEndJaum(str) ? (str += '이') : (str += '가'));
const eulul = str => (isEndJaum(str) ? (str += '을') : (str += '를'));
const eunun = str => (isEndJaum(str) ? (str += '은') : (str += '는'));

const 고성군이가 = iga('고성군');
const 고성군을를 = eulul('고성군');
const 고성군은는 = eunun('고성군');

const 강원도이가 = iga('강원도');
const 강원도을를 = eulul('강원도');
const 강원도은는 = eunun('강원도');

console.log('🚀 ~ 고성군이가:', 고성군이가);
console.log('🚀 ~ 고성군을를:', 고성군을를);
console.log('🚀 ~ 고성군은는:', 고성군은는);

console.log('🚀 ~ 강원도이가:', 강원도이가);
console.log('🚀 ~ 강원도을를:', 강원도을를);
console.log('🚀 ~ 강원도은는:', 강원도은는);
