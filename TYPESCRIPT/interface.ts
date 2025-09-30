// 🔹 What is an Interface?

// An interface is like a blueprint that tells what properties and methods an object should have.
// 👉 It’s similar to type, but mainly used for objects and classes.

interface Users{
  name: string,
  age: number,
  email: string,
  gender?: string; //optional
}

function getDetails(obj : Users){
  console.log("Name:", obj.name);
  console.log("Age:", obj.age);
  console.log("Email:", obj.email);
  console.log("Gender:", obj.gender ?? "Not Provided");
}

// getDetails({
//   name: "Prakhar",
//   age: 22,
//   email: "pra@gmail.com",
//   gender: "male"
// });

// 🔎 Explanation

// interface User → blueprint that ensures object has name, age, email, and optionally gender.
// obj: User → enforces that whatever we pass must follow the User interface.
// In getDetails, instead of obj.name = obj.name, we use the values.
// obj.gender ?? "Not Provided" → if gender is not passed, it prints "Not Provided".