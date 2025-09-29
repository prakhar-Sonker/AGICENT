// 🔹 What is Interface Extending?

// Just like inheritance in classes, one interface can extend another interface.
// 👉 This allows you to reuse properties and add new ones without rewriting everything.

// 🔑 Why Use Extending Interfaces?

// Reusability → Don’t repeat common fields like name, id, email everywhere.
// Flexibility → Can combine multiple interfaces.
// Cleaner Code → Makes large projects (like Next.js + Prisma) more structured.

interface User{
  name: string;
  email: string;
  password: string;
}
//YHA pe oops wla logic lg gya
//user parent ho jyega and admin child admin k pass user kisaari properties hongi and apni bhi khud se kuch hongi
interface Admin extends User{
  role: String;
}

//agr yha pe obj user pe kiya to user ke hi prop avail kr skte hai pr obj se admin kiya to admin ki saari prop avail krlenege

function getAdmin(obj: Admin){
  obj.name;
  obj.email;
  obj.password;
  obj.role;
};

//Multiple extensions example
// interface Person {
//   name: string;
// }

// interface Role {
//   role: string;
// }

// interface Employee extends Person, Role {
//   salary: number;
// }

// const emp: Employee = {
//   name: "Rohit",
//   role: "Manager",
//   salary: 120000
// };

// console.log(emp);
