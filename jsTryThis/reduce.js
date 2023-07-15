const reduce = (src, fn, accumulation = 0) => {
  
  console.log("src: ", src);
  console.log("fn: ", fn);
  console.log("accumulation: ", accumulation);

  
};

console.log(reduce([1,2,3], (s, a) => s + a, 0));
