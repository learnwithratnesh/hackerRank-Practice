function abc() {
  let a = 10
  return increment = () => a++;
}
let calle1 = abc();
setInterval(() => {
  console.log(calle1());
}, 1000)
