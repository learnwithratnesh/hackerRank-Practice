function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let appleCount = 0;
  let orangeCount = 0;
  let appleDistance = apples
    .map((apple) => apple + a)
    .map((item) => {
      if (item >= s && item <= t) {
        appleCount++;
      }
      return appleCount;
    });
  let orangeDistance = oranges
    .map((orange) => orange + b)
    .map((item) => {
      if (item >= s && item <= t) {
        orangeCount++;
      }
      return orangeCount;
    });

  console.log(appleCount);
  console.log(orangeCount);
}
