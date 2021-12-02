var subString = function (s = "bbbbb") {
  let temp;
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      temp = s.substring(i, j);
      let newSet = [...new Set(temp)];
      if (newSet.length === temp.length) {
        maxLength = maxLength < newSet.length ? newSet.length : maxLength;
      }
    }
  }
  console.log(temp);
};

subString();
