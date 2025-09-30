 //generics
 //hme ek function bnana hai jo ki accept krega koi bhi value and usey print krega

 function logger(a: any){
   //yha pe any krdiya to kuch bhi le skte hai pr problem hai ye cheej ki typescript me
 }

 logger("hey");
 logger(12);
 //iss problem k chkkr se generics ka use krna pdega

 //hm ek fxn ko use krte wqt bata skte hai ki fxn argument ko kis type se treat kre

//  1️⃣ What are Generics?

// Think of them as placeholders for types (like variables for data types).

// Instead of fixing a type (string | number | boolean), we make the function flexible to accept any type, while keeping type safety.

// 2️⃣ Without Generics (your old version)
// function logData(entry: string | number | boolean) {
//   console.log("Logging entry:", entry);
//   return entry;
// }

// Works fine, but limited.
// What if later you want to log an array of products or a custom object? You’ll have to add more union types.

// 3️⃣ With Generics
// function logData<T>(entry: T): T {
//   console.log("Logging entry:", entry);
//   return entry;
// }

// Explanation:
// <T> → generic placeholder (stands for "Type").
// entry: T → function will accept any type.
// : T (return type) → ensures the return is of the same type as input.


// 4️⃣ Usage Examples
// // String
// logData<string>("Prakhar");

// // Number
// logData<number>(100);

// // Boolean
// logData<boolean>(true);

// // Array
// logData<string[]>(["Apple", "Banana", "Mango"]);

// // Object
// logData<{ id: number; name: string }>({ id: 1, name: "Laptop" });


// 5️⃣ Why Generics Are Powerful?

// Type-safe: if you pass a string, it always returns a string.
// Reusable: one function can handle any type.
// Future-proof: works with objects, arrays, classes, etc.