function calculateFactorial(number) {
  let factorial = 1;
  while (number > 0) {
    factorial = factorial * number;
    number = number - 1;
  }
  console.log("------------", factorial);
}

calculateFactorial(10);
