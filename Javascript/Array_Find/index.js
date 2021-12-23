// let arr = [1, 0, 2, 0, 3, 0, 9];
// const length = arr.length;
// for (let i = 0; i < length; i++) {
//   if (arr[i] === 0) {
//     arr.splice(i, 1);
//     arr.push(0);
//   }
// }
// console.log(arr);

// let nums = [2, 7, 11, 15];
// let target = 9;

// var twoSum = function (nums, target) {
//   var list = [];
//   for (var i = 0; i < nums.length; i++) {
//     for (var j = i + 1; j < nums.length; j++) {
//       console.log("-------", nums[i], nums[j]);
//       console.log("++++++++", nums[j]);
//       if (nums[i] + nums[j] == target) {
//         list.push(i, j);
//         return list;
//       }
//     }
//   }
//   return list;
// };

// console.log(twoSum(nums, target));

var subString = function (s = "bbbbb") {
  let maxLength = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      let temp = s.substring(i, j);
      let newSet = [...new Set(temp)];
      if (newSet.length === temp.length) {
        maxLength = maxLength < newSet.length ? newSet.length : maxLength;
      }
    }
  }
  console.log(maxLength);
};

subString();
