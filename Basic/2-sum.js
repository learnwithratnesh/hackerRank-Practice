function simpleArraySum(ar) {
  let sum = 0;
  ar.forEach((item) => {
    sum = sum + item;
  });
  return sum;
}
