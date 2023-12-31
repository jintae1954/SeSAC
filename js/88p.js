/**
 * Part 1. Factorial Recursive and Factorical TCO(Tail Call Optimization)
 */
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

function factorialTCO(n, acc = 1) {
  if (n === 0) return acc;
  return factorialTCO(n - 1, n * acc);
}

for (let i = 0; i <= 10; i++) {
  console.log(i, factorial(i));
}
console.log('-'.repeat(10));

for (let i = 0; i <= 10; i++) {
  console.log(i, factorialTCO(i));
}
console.log('-'.repeat(10));

/**
 * Part 2. Fibonacci Recursive and Fibonacci TCO(Tail Call Optimization)
 */
let runCnt = 0;

function fibonacci(n) {
  runCnt += 1;
  if (n < 2) return n;
  return fibonacci(n - 2) + fibonacci(n - 1);
}

const fibonacciTCO = (n, pp = 0, p = 1) =>
  n === 0 ? pp : fibonacciTCO(n - 1, p, pp + p);

for (let i = 0; i <= 10; i++) {
  console.log(i, fibonacci(i));
}
console.log('-'.repeat(10));

for (let i = 0; i <= 10; i++) {
  console.log(i, fibonacciTCO(i));
}
console.log('-'.repeat(10));
