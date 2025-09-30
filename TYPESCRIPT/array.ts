//simple number array
let numbers: number[] = [1, 2, 3, 4];


//string arrray
let names: string[] = ["Prakhar", "Ravi", "Amit"];

//array with objects with type
// type Person = {
//   id: number;
//   name: string;
// };

// let users: Person[] = [
//   { id: 1, name: "Prakhar" },
//   { id: 2, name: "Ravi" }
// ];

//Make an array of products where each product has id: ProductID, name: string, and price: number.

type ProductID = number | string;

enum Category {
  Electronics = "ELECTRONICS",
  Clothing = "CLOTHING",
  Food = "FOOD"
}

type Products = {
  id: ProductID;
  name: string;
  price: number;
  category: Category;
};

let product: Products[] = [
  { id: 1, name: "Mobile", price: 10000, category: Category.Electronics },
  { id: "A2", name: "Laptop", price: 70000, category: Category.Electronics },
  { id: 3, name: "T-Shirt", price: 1500, category: Category.Clothing }
];



