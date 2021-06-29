function birthdayCakeCandles(candles) {
  let largestCandles = candles.sort((a, b) => {
    return b - a;
  })[0];
  let count = 0;
  for (let i = 0; i < candles.length; i++) {
    if (candles[i] == largestCandles) {
      count++;
    }
  }
  return count;
}
