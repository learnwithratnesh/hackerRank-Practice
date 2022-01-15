const multiplyby2 = (val) => val * 2;
const multiplyby3 = (val) => val * 3;

// using reducing right compose function
const compose =
  (...fns) =>
  (val) =>
    fns.reduceRight((prev, fn) => fn(prev), val);

let compositeOutput = multiplyby3(multiplyby2(2)); // traditional way but not composite function (execution is taking place from right to left)
console.log("-------", compositeOutput);

compositeOutput = compose(multiplyby3, multiplyby2)(2); // composed function (execution is taking place from right to left using reduceRight)
console.log("-------", compositeOutput);

// not using reducing right compose function using pipe

const pipe =
  (...fns) =>
  (val) =>
    fns.reduce((prev, fn) => fn(prev), val);

compositeOutput = pipe(multiplyby3, multiplyby2)(2); // pipe function (execution is taking place )
console.log("-------", compositeOutput);
