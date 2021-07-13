let obj1 = {
  name: "Ratnesh",
  last: "Tiwari",
};

Object.prototype.printName = function () {
  console.log("name is", `${this.name} ${this.last}`);
};


function Human (gender){
  this.gender = gender;
}

Human.prototype.printGender = function(){
  console.log("gender is", `${this.gender}`); 
}

function Male (){
  let type = 'male'
  Human.call(this,type)

}

function Female (){
  let type = 'female'
  Human.call(this,type)
}

Female.prototype = Object.create(Human.prototype);
Male.prototype = Object.create(Human.prototype);


let maleObj = new Male();
let femaleObj = new Female();
maleObj.printGender();
femaleObj.printGender();