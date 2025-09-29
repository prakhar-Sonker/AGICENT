//agr var keyword use kr re hai to changes nhi honge variable pe 
// var a = 5;
// console.log(a);
// a=10;
// console.log(a);
// a="hello"
// console.log(a)
//pr agr const use krenge to value fir constant hojyegi uske baad age value update krenge to nhi hogi vo prvs wli value hi rhegi
// const a = 10;
// console.log(a)
// a=5
// console.log(a) // iss step pr error mil jyegi--> Identifier 'a' has already been declared
//javascript hr line me compile hoti hai fir print hoti hai means line by line chlti hai pr ye cheez c++ me nhi hota hai
//let ko use krna preferred hota hai

//redifiniton
// var a =5
// console.log(a)
// var a=10
// console.log(a) //no error in this case bcz of var updation is possible in js bu this is nit possible in c++ and java it is only in js for var keyword
//lets talk about const keyword so here is exception in const keyword this is not possible updation of values can't be done
const a =10
console.log(a)
// const a=0
console.log(a) // this whole code will not run Identifier 'a' has already been declared this will show 

//diff b./w them

// 🔹 var vs let vs const
// 1. var

// Old way (before ES6, 2015).

// Function-scoped → if declared inside a function, it’s only available in that function. If declared outside → it’s global.

// Can be redeclared and updated.

// Avoid using var in modern code → it causes bugs because it doesn’t respect block { }.

// ✅ Example:

// if (true) {
//   var x = 10;
// }
// console.log(x); // 10  (leaks outside block!)

// 2. let

// New way (use this most of the time).

// Block-scoped → lives only inside { }.

// Can be updated but not redeclared in the same scope.

// Best choice for values that will change.

// ✅ Example:

// let count = 0;
// count = count + 1; // ✅ allowed
// let count = 5;     // ❌ not allowed (same scope)

// 3. const

// Also block-scoped.

// Cannot be updated or redeclared.

// Must be given a value at the time of declaration.

// Best for values that should never change.

// ✅ Example:

// const PI = 3.14;
// PI = 3.15;   // ❌ not allowed


// ⚠️ But with objects/arrays, you can change properties/elements (the reference is fixed, but contents can change).

// const arr = [1, 2];
// arr.push(3); // ✅ allowed
// console.log(arr); // [1, 2, 3]

// 🔑 Quick Rules (Easy to Remember)

// Use const by default.
// → It makes your code safe, values don’t change accidentally.

// If you need to reassign (like counters, loops, temporary values), use let.

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }


// Avoid var.
// → Only used in old codebases for backward compatibility.

// ✅ Where to Use Each?

// const → constants, config values, arrays, objects you don’t plan to reassign.

// let → loop counters, flags, variables whose value changes.

// var → almost never (unless working with very old JS code).

// 👉 Example combining all:

// const API_URL = "https://api.example.com"; // never changes
// let attempts = 0; // changes over time

// function login() {
//   attempts++;
//   if (attempts > 3) {
//     var locked = true; // works but bad (use let instead)
//     console.log("Too many attempts!");
//   }
//   // locked is accessible here too because var ignores block
// }
// ⚡ In short:
// const → default choice
// let → only if value changes
// var → forget it (unless fixing old projects)