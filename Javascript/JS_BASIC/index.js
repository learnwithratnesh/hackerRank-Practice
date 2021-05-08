// function myRegularFunction() {
//   const myArrowFunction = () => {
//     console.log(arguments);
//   };

//   myArrowFunction("c", "d");
// }

// myRegularFunction("a", "b");

// var pokemon = {
//   firstname: "Pika",
//   lastname: "Chu ",
//   getPokeName: function () {
//     var fullname = this.firstname + " " + this.lastname;
//     return fullname;
//   },
// };

// var pokemonName = function () {
//   console.log(this.getPokeName() + "I choose you!");
// };

// var logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now

// logPokemon(); // 'Pika Chu I choose you!'

// function Car() {}
// Car.prototype.drive = function () {
//   console.log("I am a drive function");
// };

// var alto = new Car();
// alto.drive();

// const newCar = {
//   drive: function () {
//     console.log("I am a drive function");
//   },
// };
// var tesla = Object.create(newCar);
// tesla.drive();

for (let i = 0; i < 5; i++) {
  debugger;
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
