// Sample Input 0

// 07:05:45PM
// Sample Output 0

// 19:05:45
function timeConversion(s) {
  let newVal;
  if (s == "12:00:00AM") {
    newVal = "00:00:00";
  } else if (s.includes("PM") && s.split(":")[0] == 12) {
    newVal = `${parseInt(s.split(":")[0])}:${s.split(":")[1]}:${s
      .split(":")[2]
      .slice(0, 2)}`;
  } else if (s.includes("PM")) {
    newVal = `${parseInt(s.split(":")[0]) + 12}:${s.split(":")[1]}:${s
      .split(":")[2]
      .slice(0, 2)}`;
  } else if (s.includes("AM") && s.split(":")[0] == 12) {
    newVal = `00:${s.split(":")[1]}:${s.split(":")[2].slice(0, 2)}`;
  } else if (s.includes("AM")) {
    newVal = s.slice(0, 8);
  }
  return newVal;
}
