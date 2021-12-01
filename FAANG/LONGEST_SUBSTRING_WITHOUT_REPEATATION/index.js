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
