let nameObject = {
  firstName: "Ratnesh",
  secondName: "Tiwari",
  printName: function () {
    console.log(`My name is ${this.firstName} ${this.secondName}`);
  },
};

nameObject.printName();

const { firstName, secondName, printName } = nameObject;
printName();
