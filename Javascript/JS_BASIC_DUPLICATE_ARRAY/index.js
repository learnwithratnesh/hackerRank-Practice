let _name = "ratneshratnesh";
_name = _name.split("");
let removedDuplicateArray = _name.filter((item, index) => {
  return _name.indexOf(item) === index;
});

console.log("-----removed-----", removedDuplicateArray.join(""));
