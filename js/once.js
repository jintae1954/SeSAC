const once = (fn) => {
  let flag = false;

  return (x,y) => { 
    if(flag === false) {
      flag = true;
      return fn(x,y);
    }

    return;
  }
}

const func = once( (x, y) => `금일 운행금지 차량은 끝번호 ${x}와 ${y}입니다.` );

console.log(func(1, 6)); // 금일 운행금지 차량은 끝번호 1와 $6입니다.
console.log(func(2, 7)); // undefined
console.log(func(3, 8)); // undefined