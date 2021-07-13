function a() {
  var count = 0;
  function b() {
    count++;
    console.log(count);
  }
  return b;
}

// var count = 10;

let calle = a();

setInterval(() => {
  calle();
}, 1000);
