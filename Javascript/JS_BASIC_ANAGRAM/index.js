function findAnagram(str1, str2) {
  let anagram = false;
  if (str1 === str2) {
    anagram = true;
  } else if (!(str1.length === str2.length)) {
    anagram = false;
  } else if (
    str1.split("").sort().join("") === str2.split("").sort().join("")
  ) {
    anagram = true;
  }
  return anagram;
}

console.log("anagram---------->", findAnagram("1ratt", "trat111"));
console.log("anagram---------->", findAnagram("1ratt", "trat1"));
