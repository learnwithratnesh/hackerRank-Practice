const result = function gradingStudents() {
  let grades = [
    44, 84, 94, 21, 0, 18, 100, 18, 62, 30, 61, 53, 0, 43, 2, 29, 53, 61, 40,
    14, 4, 29, 98, 37, 23, 46, 9, 79, 62, 20, 38, 51, 99, 59, 47, 4, 86, 61, 68,
    17, 45, 6, 1, 95, 95,
  ];
  let finalResult = [];
  for (let i = 1; i < grades.length; i++) {
    if (grades[i] >= 38) {
      let res = Math.ceil(grades[i] / 5) * 5;
      if (res - grades[i] === 2) {
        finalResult.push(res);
      } else {
        finalResult.push(grades[i]);
      }
    } else {
      finalResult.push(grades[i]);
    }
  }
  return finalResult;
};
console.log(result());

/** Solution */
function gradingStudent(grades) {
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 38) {
      if (grades[i] % 5 == 3) {
        grades[i] += 2;
      } else if (grades[i] % 5 == 4) {
        grades[i] += 1;
      }
    }
  }
  return grades;
}
