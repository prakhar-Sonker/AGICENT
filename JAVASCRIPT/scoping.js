//1->  Global scope--->

let x = 10; 
function show() {
  console.log(x); // can access global variable
}
show(); // 10


//2->  Function Scope--->

function test() {
  let y = 20;
  console.log(y);
}
test(); // 20
// console.log(y); // ❌ Error (y not defined outside)

//3-> Block Scope--->

//ex-1 let and const inside block
{
  let x = 10;
  const y = 20;
  console.log(x, y); // ✅ works (inside block)
}
console.log(x); // ❌ Error: x is not defined
console.log(y); // ❌ Error: y is not defined

//❌ Example 2: var ignores block scope
{
  var z = 30;
  console.log(z); // ✅ 30 (inside block)
}

console.log(z); // ✅ 30 (outside block too!)
//var is function-scoped, not block-scoped.
// That’s why modern JS prefers let and const.

//✅ Example 3: If-Else with Block Scope
if (true) {
  let a = 100;
  const b = 200;
  console.log(a, b); // ✅ 100 200
}

console.log(a); // ❌ Error
console.log(b); // ❌ Error


// ✅ Example 4: For Loop with let vs var
for (let i = 0; i < 3; i++) {
  console.log("inside:", i);
}
console.log(i); // ❌ Error: i not defined

for (var j = 0; j < 3; j++) {
  console.log("inside:", j);
}
console.log(j); // ✅ Works: j = 3

// 💡 let keeps i private to the loop block.
// 💡 var leaks j outside the loop.

//practice ques
if (true) {
  let x = "inside block";
  var y = "var inside block";
}
console.log(typeof x); // ??
console.log(typeof y); // ??

//4-> Var is function scoped not block scoped
 if (true) {
  var a = 50;
}
console.log(a); // ✅ Works (var ignores block scope)

