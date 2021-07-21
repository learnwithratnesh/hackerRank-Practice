let obj = {
  firstName: "Ratnesh",
  lastName: "Tiwari"
};

// destructure simple example
const { firstName, lastName } = obj;
// for default values
const { firstName = 10, lastName } = obj;
// destructure using different identifier
const { firstName: firstName1, lastName: lastName1 } = obj;