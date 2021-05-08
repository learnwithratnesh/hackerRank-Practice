let arr = [1, 2, 3, 4];
let filterArray = arr.filter((ele) => (ele > 2 ? true : false));
console.log("-----filterArray-------", filterArray);
let modifiedArray = arr.map((ele) => ele * 3);
console.log("-----modifiedArray-------", modifiedArray);
let everyConditionArray = arr.every((ele) => ele > 5);
console.log(
  "-----everyConditionArray element is greater than 5-------",
  everyConditionArray
);

let someConditionArray = arr.some((ele) => ele > 3);
console.log(
  "-----someConditionArray element is greater than 3-------",
  someConditionArray
);

console.log("--------------slice-------------------------");
let arr2 = [1, 2, 3, 4, 5, 6];
console.log("----slicedArray--------", arr2.slice(0, 3));

console.log("--------------splice-------------------------");
let arr3 = [1, 2, 3, 4, 5, 6];
arr3.splice(3, 1);
console.log("----splicedArray removing item from a index--------", arr3);
arr3 = [1, 2, 3, 5, 6];
arr3.splice(3, 0, 4);
console.log("----splicedArray adding item to a index--------", arr3);

console.log("--------------array shift--------------------");
arr3 = [1, 2, 3, 4, 5, 6];
arr3.unshift(0);
console.log("-----------shift array----------", arr3);

console.log("--------------array sort--------------------");
arr3 = [1, 9, 3, 8, 5, 6];
arr3.sort((item1, item2) => (item1 > item2 ? 1 : -1));
console.log("-----------sorted array----------", arr3);

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

const transportation = data.reduce(function (obj, item) {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});

console.log(transportation);
