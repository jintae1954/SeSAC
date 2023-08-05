/**
 * Part 1. 예시 코드의 출력을 예상하고, 실행 컨텍스트를 그리시오.
 */
var gg = 1;
let bb = 2;
function f1(x, y) {
  var gg = 11;
  let bb = 22;

  console.log('f1>', gg, bb, zz, f2, f2.length); // 11, 22, 800, f2(t,u,v), 3
  f2('first'); // f2(t,u,v) 실행
  {
    const xx = 99;
    let lll = 0;
    f2('nest-first'); // f2(t) 실행
    var zz = 88;
    function f2(t) {
      console.log(t, 'nested', xx, zz, lll);
    } // hoisting은 undefined로?!
  }
  function f2(t, u) {
    console.log(t, 'inner', xx, zz);
  }
  function f2(t, u, v) {
    console.log(t, 'inner2', xx, zz);
  }
  var zz = 800;
  f2('second'); // f2(t,u,v) 실행
}
function f2(g) {
  console.log(g, 'global f2>', gg, bb, xx, kk);
}

console.log('----------------------- start!!');
let xx = 9;
if (gg > 0) {
  var kk = 33;
  const yy = 9;
}
f1(1, 2);
// console.log(kk, yy); // yy is not defined in global scope
console.log(kk); // 33
f2('third'); // f2(g) 실행
