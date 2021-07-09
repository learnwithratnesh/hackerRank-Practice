let calculater = function (...numbers) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (numbers.includes(10)) {
        reject("Method exceeds");
      } else {
        resolve(numbers);
      }
    }, 4000);
  });
};

// calculater(1, 2, 3, 4, 5, 6, 7, 8, 9, 11)
//   .then((val) => {
//     console.log(val);
//   })
//   .catch((val) => {
//     console.log("------error-----", val);
//   })
//   .finally(() => {
//     console.log("-------finally--------");
//   });

let pallindrome = function (input) {
  if (typeof input === "string") {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let _reverseStr = input.split("").reverse().join("");
        if (input === _reverseStr) {
          resolve("string is pallindrome");
        } else {
          reject("error");
        }
      }, 5000);
    });
  }
};

let methodCompletion = function () {
  console.log("=======execution completed================");
};

let execute = function (str, cb) {
  pallindrome(str)
    .then((val) => {
      console.log(val);
      cb();
    })
    .catch((error) => {
      console.log(error);
    });
};

// execute("ratar", methodCompletion);

let _execute = async (str, cb) => {
  let val = await pallindrome(str);
  if (val) {
    cb();
  }
};

_execute("ratar", methodCompletion);
