// numeric enums
// pascalCase
const enum RollNumbers {
  John,
  Kelly,
  Candy,
  Sandra,
  James,
}

const enum StudentDetails {
  Name = "John",
  Major = "Arts",
}

let studentName: StudentDetails = StudentDetails.Name;
let studentMajor: StudentDetails = StudentDetails.Major;

console.log(studentName, studentMajor);

//heterogenous enums

const enum StudentDetails {
  id = 1,
  StuName = "John",
  StuMajor = "English",
}

let stuid: StudentDetails = StudentDetails.id;
let studentName1: StudentDetails = StudentDetails.StuName;
let studentMajor2: StudentDetails = StudentDetails.StuMajor;

console.log(`${stuid}- ${studentName1} has a major in ${studentMajor2}.`);
