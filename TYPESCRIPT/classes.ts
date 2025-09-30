class Device{
  name = "lg";
  price=10000;
  category = "digital";
}

let d1 = new Device();
let d2 = new Device();


//lets write basic syntax to write class without access modifires
export default class Persons{
  name: string;
  age:number;

  //constructor runs only when object is created
  constructor(name: string, age: number){
    this.name=name;
    this.age=age;
  }

  //method
  greet() : void{
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// creating objects
//similar to java
let person1 = new Persons("Prakhar", 22);
let person2 = new Persons("Rohit", 25);

person1.greet();  // Hello, my name is Prakhar and I am 22 years old.
person2.greet();  // Hello, my name is Rohit and I am 25 years old.
