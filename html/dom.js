// spanX에 offsetWidth가 500이 될 때까지 'X'문자로 채우는 프로그램을
// 성능을 고려해서 작성하시오.
const spanX = document.getElementById('spanX');
console.log('🚀 ~ spanX:', spanX.textContent);
console.log('🚀 ~ spanX:', spanX.offsetWidth);

const letter = 'XXXXX';
spanX.textContent = letter;
const len = spanX.offsetWidth;
while (spanX.offsetWidth < 500) {
  // letter 추가
  spanX.textContent += letter; // reflow가 없게 수정해야 함
  console.log('🚀 ~ spanX:', spanX.textContent);
}

console.log('🚀 ~ spanX:', spanX.textContent);
console.log('🚀 ~ spanX:', spanX.offsetWidth);
