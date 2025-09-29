// 🔹 Problem 3: Student Report
// Create a Student interface with:
// rollNo: number
// name: string
// marks: number[] (array of marks)
// grade?: string
// 👉 Write a function calculateAverage(student: Student) that prints the student’s average marks.

interface Student{
  rollNo: number,
  name: string,
  marks?: number[],
  grade?: string
}

function calculateAverage(student: Student){
  console.log("RollNo: " , student.rollNo);
  console.log("Name: ", student.name);
  console.log("Marks: ", student.marks ?? "Not Provided");
  console.log("Grade: ", student.grade ?? "Not Provided");
}

calculateAverage({
  rollNo: 1,
  name: "Prakhar",
  marks: [50,79,98],
  grade: "B"
});
calculateAverage({
  rollNo: 2,
  name: "Rohit",
  grade: "A"
});