// 🔹 Problem 1: Employee Details
// Create an Employee interface with:
// id: number
// name: string
// department: string
// salary: number
// isManager?: boolean
// 👉 Write a function printEmployee that takes an employee object and prints all details.

interface Employee{
  id: number,
  name: string,
  department: string,
 salary: number,
 isManager?: boolean
}

function printEmployee(employee : Employee){
  console.log("ID:", employee.id);
  console.log("Name: ", employee.name);
  console.log("Department: ", employee.department);
  console.log("Salary: ", employee.salary);
  //this u have done but try to make it meaningful
  console.log("Manager is Assigned: ", employee.isManager ?? "Not Provided");
  //or
  // ✅ More meaningful output for boolean
//   if (employee.isManager !== undefined) {
//     console.log("Manager Assigned:", employee.isManager ? "Yes" : "No");
//   } else {
//     console.log("Manager Assigned: Not Provided");
//   }
// }
}

printEmployee({
  id:1,
  name: "Prakhar",
  department: "Software",
  salary: 100000,
  isManager: true
});
