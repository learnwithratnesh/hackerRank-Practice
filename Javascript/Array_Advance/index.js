console.log("-----------Advance Methods----------");

console.log(
  "-----------Advance Method to count the number of element in array----------"
);
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
  "pogostick",
];

const transportation = data.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});

console.log(transportation);

console.log("-----------Advance Method to reverse string----------");

var str = "How are you you what is the name what is is";
str = str.split(" ");
str.reverse();
str = str.join(" ");
console.log("-------------reverse string-------------", str);

console.log("-----------Advance Method to count words in string----------");

var str = "How are you you what is the name what is is";
str = str.split(" ");
str = str.reduce((obj, ele) => {
  if (!obj[ele]) {
    obj[ele] = 0;
  }
  obj[ele]++;
  return obj;
}, {});
console.log(
  "-------------Advance Method to count words in string-------------",
  str
);

var str = "How are you baby";
str = str.split(" ");
str = str.map((ele) => {
  let lastChar = ele.slice(-1);
  let lastCharUpper = lastChar.toUpperCase();
  ele = ele.replace(lastChar, lastCharUpper);
  return ele;
});
str = str.join(" ");
console.log(
  "-------------Advance Method to upercase the last word in sentence-------------",
  str
);

var str = "how how are you baby";
str = str.split(" ");
var newArray = [...new Set(str)];
console.log(
  "--------------remove duplicates from array-----------",
  newArray.join(" ")
);

var str = "what what no are no you doing doing";
str = str.split(" ");
// str = str.filter((ele, index) => {
//   debugger;
//   return ele.indexOf(ele) !== index;
// });

var unique = str.filter((elem, index, self) => {
  return index === self.indexOf(elem);
});

console.log(
  "--------------remove duplicates from array-----------",
  unique.join(" ")
);
