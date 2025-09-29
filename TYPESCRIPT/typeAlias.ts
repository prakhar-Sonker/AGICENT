// 🔹 1. What is a Type Alias?

// A Type Alias is a way to give a name to a type.
// It can represent primitive types, object types, union types, intersection types, tuples, etc.
// Think of it as a shortcut or label for a type.

type arg = string | null;

function abc(obj : arg){
  obj;
}
abc("Prakhar");//this will be ok
// abc(true);//this will give error

//example---1)
type UserID = number | string;

let id1: UserID = 101;    // ✅ valid
let id2: UserID = "A102"; // ✅ valid
// let id3: UserID = true; ❌ Error


// 🔹 3. Type Alias for Objects
type User = {
  name: string;
  age: number;
  email: string | number; //union hai ye ya to string or number
  gender?: string | boolean | null; // optional
};

let user1: User = {
  name: "Prakhar",
  age: 22,
  email: "pra@gmail.com"
};


// 🔹 4. Union Types with Type Aliases
type Status = "active" | "inactive" | "pending";

let userStatus: Status = "active"; // ✅ valid
// let userStatus2: Status = "deleted"; ❌ Error


