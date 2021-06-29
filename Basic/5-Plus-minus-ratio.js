/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
  let negativeSum = 0,
    positiveSum = 0,
    zeroSum = 0;
  let arrLength = arr.length;
  arr.forEach((item) => {
    switch (true) {
      case item < 0:
        negativeSum++;
        break;
      case item > 0:
        positiveSum++;
        break;
      default:
        zeroSum++;
        break;
    }
  });
  console.log((positiveSum / arrLength).toFixed(6));
  console.log((negativeSum / arrLength).toFixed(6));
  console.log((zeroSum / arrLength).toFixed(6));
}
