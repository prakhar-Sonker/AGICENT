//type ka kaam hai type create krna mtlb type ka merger bnana ya union banana ya single type define krna
//interface ka kaam hai object ka shape crearte krna

//Intersection types
type Person = { name: string; age: number; };
type Employee = { employeeId: number; department: string; };

type EmployeeDetails = Person & Employee;

let emp: EmployeeDetails = {
  name: "Rohit",
  age: 25,
  employeeId: 101,
  department: "Software"
};

// Combines multiple types into one.
// Useful when you want all properties from multiple types.

// 🔹 6. Tuple Type Alias
type RGB = [number, number, number];

let color1: RGB = [255, 0, 0];   // Red
let color2: RGB = [0, 255, 0];   // Green

// EXAMPLE-1  --> PERSON + EMPLOYEE

// type Person = {
//   name: string;
//   age: number;
// };

// type Employee = {
//   employeeId: number;
//   department: string;
// };

// type EmployeeDetails = Person & Employee;

// let emp: EmployeeDetails = {
//   name: "Prakhar",
//   age: 22,
//   employeeId: 101,
//   department: "Software"
// };

// console.log(emp);

// 🔹 Example 3: Intersection with Type Aliases + Enums

enum Role {
  Admin = "ADMIN",
  User = "USER"
}

type Account = {
  username: string;
  password: string;
};

type EmployeeRole = {
  role: Role;
};

type EmployeeAccount = Account & EmployeeRole;

let acc: EmployeeAccount = {
  username: "prakhar123",
  password: "abc123",
  role: Role.Admin
};





