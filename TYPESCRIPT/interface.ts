// 🔹 What is an Interface?

// An interface is like a blueprint that tells what properties and methods an object should have.
// 👉 It’s similar to type, but mainly used for objects and classes.

interface User{
  name: string,
  age: number,
  email: string,
  gender?: string; //optional
}

function getDetails(obj : User){
  console.log("Name:", obj.name);
  console.log("Age:", obj.age);
  console.log("Email:", obj.email);
  console.log("Gender:", obj.gender ?? "Not Provided");
}

getDetails({
  name: "Prakhar",
  age: 22,
  email: "pra@gmail.com",
  gender: "male"
});