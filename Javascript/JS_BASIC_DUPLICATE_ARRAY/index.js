let _name = "abcaaa";
_name = _name.split("");
let removedDuplicateArray = _name.filter((item, index) => {
  return _name.indexOf(item) === index;
});

console.log("-----removed-----", removedDuplicateArray.join(""));

let _name2 = "abbcc";
_name2 = _name2.split("");
let duplicatesArray = _name2.filter((item, index) => {
  return _name2.indexOf(item) != index;
});

console.log("---------duplicateitems--------", duplicatesArray.join(""));
