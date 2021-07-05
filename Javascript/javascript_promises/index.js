let printName = () => {
  return "I am RT";
};

let printCity = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Pune");
    }, 3000);
  });
};

let printCountry = () => {
  return "India";
};

let callMe = async () => {
  let _name = printName();
  let _city = await printCity();
  let _country = printCountry();
  console.log(`${_name} from ${_city} and my country is ${_country}`);
};

callMe();
