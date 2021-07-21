
let a = {
  a: 10
}
//deep copy
let b = { ...a }
a.a = 20;
let temp = JSON.parse(JSON.stringify(a))
console.log(a.a)
console.log(b.a)


//deep copy
let c = a;
a.a = 3000;
c.a = 30;
console.log(a.a)
console.log(c.a)
