let obj1 = {
  name: "Ratnesh",
  last: "Tiwari",
};

Object.prototype.printName = function () {
  console.log("name is", `${this.name} ${this.last}`);
};
