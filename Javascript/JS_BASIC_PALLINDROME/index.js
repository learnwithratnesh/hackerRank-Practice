function isPallindrome(str) {
  let isPallindrome = false;
  if (str === str.split("").reverse().join("")) {
    isPallindrome = true;
  }
  return isPallindrome;
}

console.log("---pallindrome---", isPallindrome("aaaraaa"));
console.log("---pallindrome---", isPallindrome("aaaraaaa"));
