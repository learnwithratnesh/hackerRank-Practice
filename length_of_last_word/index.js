/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  if (s.length === 1) {
    return 1;
  }
  let lastWord = "";
  let arr = s.split(" ");
  let length = arr.length;
  for (let i = length - 1; i >= 0; i--) {
    if (arr[i] && arr[i].length > 0) {
      lastWord = arr[i].length;
      break;
    }
  }
  return lastWord;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));
