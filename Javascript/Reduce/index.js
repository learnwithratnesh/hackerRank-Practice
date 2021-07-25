let str = 'I I am ratnesh ratnesh';
str = str.split(' ')
console.log(str)

const output = str.reduce((acc, curr) => {
  if (acc[curr]) {
    acc[curr] = ++acc[curr]
  } else {
    acc[curr] = 1
  }
  return acc;
}, {})

console.log('------', output);