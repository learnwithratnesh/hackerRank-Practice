class Human {
  constructor() {
    this.gender = "male";
  }
  printGender() {
    console.log("---------", this.gender);
  }
}

class Man extends Human {
  constructor() {
    super();
    this.name = "Ratnesh";
  }
  printName() {
    console.log("---------", this.name);
  }
}

let rt = new Man();
rt.name = "Ratnesh Tiwari";
rt.printGender();
rt.printName();
