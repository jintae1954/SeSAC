/**
 * Part 1. 다음과 같은 정수 배열을 생성하는 range 함수를 구현하시오.
 */
function range(...args) {
  let arr = [];

  const initStart = 1;
  const initEnd =
  console.log(arguments);
  console.log(args[0]);
  console.log(args[1]);
  console.log(args[2]);


  console.log(arr);

  return arr;
}

// [1,2,3,4,5,7,8,9,10]
range(1, 10, 1);

// range(1, 10, 2); // [1,3,5,7,9]
// range(1, 10); // [1,2,3,4,5,7,8,9,10]
// range(10, 1); // [10,9,8,7,6,5,4,3,2,1]
// range(10, 1, -2); // [10,8,6,4,2]

// [1,2,3,4,5]
// range(5);

// [-5,-4,-3,-2,-1]
// range(-5);
// range(5, 5, 0); // [5]
// range(5, 5, -1); // [5]
// range(5, 1, 1); // []
// range(1, 5, -1); // []
// range(0); // [0]
// range(0, -1); // [0, -1]
// range(0, -3); // [0, -1, -2, -3]
// range(-3, 0); // [-3, -2, -1, 0]
// range(0, 0, 5); // [0]  