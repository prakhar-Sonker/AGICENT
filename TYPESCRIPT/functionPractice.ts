//1-> Basic fxn------ x --------
function sayHello(name: string) : string {
  return `Hello ${name}`;
}
console.log(sayHello("Prakhar"));
// name: string → input must be a string.
// : string after the ) → output must be a string.
// 👉 If you pass a number → TypeScript gives an error.


//2->  Function with no return 
function logMessage(msg: string) : void{
  console.log("Message: ", msg);
}
logMessage("Learning Functions");

//3-> Function with Multiple Parameters
function add(a: number, b: number): number{
  return a+b;
}
console.log(add(2,3));

//4-> Default Parameters
//If no value is given, a default will be used.
function greet(name: string="Guest"): string{
  return `Hello ${name}`;
}
console.log(greet());
console.log(greet("Prakhar"));

//5-> Rest Parameters
// What if you don’t know how many values will come? Use ... (rest parameter).
function sumAll(...val: number[]): number{
  return val.reduce((sum,n) => sum + n, 0);
}
console.log(sum(1,2,3,4,5,6));
// 👉 Collects all inputs into an array.

//in detail
// 🔹 The Problem Without Rest Parameters
// Imagine you want a function that adds numbers.
// If you write like this:
// function add(a: number, b: number): number {
//   return a + b;
// }

// console.log(add(5, 10)); // ✅ Works
// console.log(add(5, 10, 20)); // ❌ Error: too many arguments
// 👉 Here the function only accepts 2 numbers. If you pass more, TypeScript complains.

// 🔹 Rest Parameters (The Fix)
// Rest parameters allow you to accept any number of arguments.
// They are written with ... before the parameter name.
// function sumAll(...nums: number[]): number {
//   return nums.reduce((sum, n) => sum + n, 0);
// }

// console.log(sumAll(5, 10));            // 15
// console.log(sumAll(1, 2, 3, 4, 5));    // 15
// console.log(sumAll());                 // 0

// ✅ Explanation:

// ...nums means: "Collect all extra arguments into an array called nums."

// If you pass sumAll(1, 2, 3) → inside the function nums = [1, 2, 3].

// If you pass sumAll(10, 20, 30, 40) → inside the function nums = [10, 20, 30, 40].

// 🔹 Why is this useful?

// You don’t need to know the exact number of inputs.

// Arguments are collected as an array, so you can loop or use array functions.

//join words
function joinWords(...words: string[]): string {
  return words.join(" ");
}

console.log(joinWords("TypeScript", "is", "awesome"));
// TypeScript is awesome

//max number
function findMax(...nums: number[]): number {
  return Math.max(...nums);
}

console.log(findMax(10, 50, 3, 99, 7)); // 99

// 🔹 Rules to Remember
// Only one rest parameter allowed in a function.
// It must be the last parameter.
// function wrongExample(...nums: number[], name: string) {} // Error

// function correctExample(name: string, ...nums: number[]) {}


// 6. Anonymous Functions (Functions without a name)
let multiply = function(a: number, b: number): number {
  return a * b;
};

console.log(multiply(4, 5)); // 20

// 7. Arrow Functions (Shortcut Syntax)
let divide = (a: number, b: number): number => {
  return a / b;
};

console.log(divide(10, 2)); // 5


// 8. Functions and Union Types
// Functions can accept different types:

function printId(id: number | string): void {
  console.log("Your ID: " + id);
}

printId(101);        // Your ID: 101
printId("ABC123");   // Your ID: ABC123

// 9. Function Overloading
// Multiple function signatures, one implementation:

function formatData(data: string): string;
function formatData(data: number): string;

function formatData(data: string | number): string {
  return "Formatted: " + data;
}

console.log(formatData("Hello")); // Formatted: Hello
console.log(formatData(123));     // Formatted: 123



