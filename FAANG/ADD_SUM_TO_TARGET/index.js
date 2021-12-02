var twoSum = function (nums, target) {
  var list = [];
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        list.push(i, j);
        return list;
      }
    }
  }
  return list;
};
