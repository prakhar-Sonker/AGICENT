// 🔹 Theory

// In object-oriented programming (OOP), static members are properties or methods that belong to the class itself rather than any individual object.

// Non-static (normal) → Belongs to an object. Each object has its own copy.

// Static → Belongs to the class. All objects share it (only one copy exists).

// ✅ Declared using the keyword static.
// ✅ Can be accessed using the class name directly.
// ✅ Commonly used for counters, utility functions, constants, etc.



class Shery{
  static version=1.0;

  static getRandomNumber(){
    return Math.random();
  }
} 

//ab ye hmne static bna diya hai to iska instance bnane ki jrurat nhi pdegi bcz we used static keyword 


//example

class Counter {
  static count: number = 0;  // static property

  constructor() {
    Counter.count++;  // increase count whenever new object is created
  }

  static displayCount() {   // static method
    console.log("Total objects created: " + Counter.count);
  }
}

let c1 = new Counter();
let c2 = new Counter();
let c3 = new Counter();

Counter.displayCount();  // ✅ Access static method using class name
