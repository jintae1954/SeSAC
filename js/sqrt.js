const print3 = (i, f) => {
  console.log(`${i} => ${f / 1000}${f % 10 === 0 ? '0' : ''}`);
};

function printSqrt(start, end) {
  for (let i = start; i <= end; i++) {
    const sq = Math.sqrt(i);
    if (sq % 1 === 0) continue;
    print3(i, Math.floor(sq * 1000));
  }
}

printSqrt(20, 30);