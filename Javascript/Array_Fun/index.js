let arr = [
  {
    firstName: "User1",
    secondName: "Last1",
    costPrice: 100,
    sellingPrice: 600,
    include: true,
  },
  {
    firstName: "User2",
    secondName: "Last2",
    costPrice: 100,
    sellingPrice: 100,
    include: true,
  },
  {
    firstName: "User3",
    secondName: "Last3",
    costPrice: 100,
    sellingPrice: 800,
    include: true,
  },
  {
    firstName: "User3",
    secondName: "Last3",
    costPrice: 100,
    sellingPrice: 700,
    include: false,
  },
];

const filteredApp = arr.filter((value) => {
  return value.include ? true : false;
});

const NewArr = filteredApp.map((ele) => {
  let tempObj = {};
  tempObj.fullName = `${ele.firstName} ${ele.secondName}`;
  tempObj.price = ele.costPrice + ele.sellingPrice;
  return tempObj;
});
// console.log(NewArr);

console.log(filteredApp);

console.log("----------profit or loss----------- in filtered array");
const profitLossArray = filteredApp.reduce((total, ele) => {
  return total + (ele.sellingPrice - ele.costPrice);
}, 0);

console.log(profitLossArray);

console.log(
  "----------sorting on th basis of profit----------- in filtered array"
);

const sortedArray = filteredApp.sort((ele1, ele2) => {
  let element1Profit = ele1.sellingPrice - ele1.costPrice;
  let element2Profit = ele2.sellingPrice - ele2.costPrice;
  return element1Profit > element2Profit ? -1 : 1;
});

console.log(
  "----------sorting on th basis of profit----------- in filtered array",
  sortedArray
);
