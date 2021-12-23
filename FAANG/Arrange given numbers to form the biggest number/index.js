function sortArray(arr) {
  arr.sort(function compare(first, second) {
    var firstsecond = "" + first + second;
    var secondfirst = "" + second + first;
    return firstsecond > secondfirst ? -1 : 1;
  });
}

function getLargestNumber(arr) {
  var largestNumber = arr.join("");
  return largestNumber;
}
var arr = [54, 546, 548, 60];
sortArray(arr);
var result = getLargestNumber(arr);
console.log(result);

function getLargest(array) {
  return array
    .map(String)
    .sort((a, b) => b + a - (a + b))
    .join("");
}

var result = getLargest(arr);
console.log(result);

//Both method will work first we need to join them as string and compare them if necessary then sorting will take place
