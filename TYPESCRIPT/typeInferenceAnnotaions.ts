//type inference
// 👉 When you don’t write the type but TypeScript figures it out automatically from the value you assign.

let count = 10;       // TS infers this is number
let username = "Prakhar"; // TS infers string
let isAdmin = true;   // TS infers boolean

function multiply(a = 5, b = 10) {
  return a * b; // TS infers return type as number
}
// Here, you didn’t write any type.
// TypeScript looked at the value (10, "Prakhar", true) and decided the type.


// 🔹 2. Type Annotations
// 👉 When you manually tell TypeScript what type a variable, parameter, or return value should be.
// 👉 You are explicitly writing the type.

// let count: number = 10;       // type annotation
// let username: string = "Prakhar"; 
// let isAdmin: boolean = true;

// function add(a: number, b: number): number {
//   return a + b;
// }

// Here, : number, : string, : boolean are annotations.
// TypeScript will force you to follow them.


// 🔹 Difference
// Feature	Type Annotation	Type Inference
// Who decides the type?	You (explicitly)	TypeScript (automatically)
// Example	let age: number = 25;	let age = 25;
// Use case	When type is not clear or for functions	When type is obvious

// ✅ Rule of thumb:

// Use type inference when the value is obvious (let age = 20;).

// Use annotations when the value is not obvious (function parameters, API responses, complex objects).

