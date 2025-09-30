//type assertion
//type casting
//non-null assertion operator


//type assertion ka mtlb batana typescript ko ki particular cheej ka type kya hai, ye aap tb krte ho jb aap typescript se jyada uss value ka type jante ho

// 1️⃣ What is Type Assertion?

// Sometimes TypeScript cannot figure out the exact type of a variable.
// In such cases, we can tell TypeScript → “Hey, trust me, this value is of this type.”
// This is called Type Assertion (or Type Casting).
// Think of it as you telling the compiler →
// 👉 "I know more about this value than you do."


// 2️⃣ Syntax
// Two ways to assert (both are same):

let value: unknown = "Hello";

// Method 1: Using "as"
let strLength1 = (value as string).length;

// Method 2: Using angle brackets
let strLength2 = (<string>value).length;

// --------------xx-------------xx------------------

// 3️⃣ Example 1: Working with unknown
let data: unknown = "Prakhar";

// ❌ Without assertion, TS doesn’t know data has .length
// console.log(data.length); // Error

// ✅ With assertion
console.log((data as string).length); 

// 4️⃣ Example 2: DOM Type Casting
// TypeScript can’t automatically infer HTML element types.

let input = document.getElementById("myInput");

// ❌ Error: 'value' does not exist on type 'HTMLElement'.
// console.log(input.value);

// ✅ Correct (assert to HTMLInputElement)
let inputElement = input as HTMLInputElement;
console.log(inputElement.value);

// 5️⃣ Example 3: Casting Between Type
let num: any = 10;

// Assert to string
let str = num as string;  
console.log(str); // "10" but type is string now




