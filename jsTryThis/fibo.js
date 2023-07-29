let runCnt = 0;

// recursive
function fibonacciRecursive(n) {
  runCnt += 1;
  if(n == 0 || n == 1) return n;

  return fibonacciRecursive(n-2) + fibonacciRecursive(n-1);
}

for(let i = 0; i < 10; i++) {
  runCnt = 0;
  console.log(`${i}, ${fibonacciRecursive(i)}, ${runCnt}회`);
}

// array
function fibonacci(n) {
  const arr = [0, 1];
  for(let i = 2; i <= n; i++) {
    runCnt += 1;
    arr[i] = arr[i - 2] + arr[i - 1];
  }
  return arr[n];
}

for(let i = 0; i < 10; i++) {
  runCnt = 0;
  console.log(`${i}, ${fibonacci(i)}, ${runCnt}회`);
}

// memoized
function memoized(fn) {
  const memoizedTable = {};
  return function (k) {
    return memoizedTable[k] || (memoizedTable[k] = fn(k));
  };
}

const memoizedFibonacci = memoized(
  function (n) {
    runCnt += 1;
    if(n < 2) return n;
    return memoizedFibonacci(n-2) + memoizedFibonacci(n-1);
  }
);

for(let i = 0; i < 10; i++) {
  runCnt = 0;
  console.log(`${i}, ${memoizedFibonacci(i)}, ${runCnt}회`);
}