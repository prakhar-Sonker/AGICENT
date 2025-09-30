//  🔹 Getter and Setter in TypeScript
// 📖 Theory

// Getters and Setters are special methods in classes that let us control access to private/protected properties.

// They help in encapsulation (hiding data but giving controlled access).
// Getter (get) → Used to read a private property.
// Looks like a method but is used like a property.
// Setter (set) → Used to update a private property.
// Can have validation before setting the value.
 
 
 
//  class Userrs{
//    constructor(public _name: string, public _age: number){}

//    get name(){
//      return this._name;
//    }
//    get age(){
//     return this._age;
//    }

//    set name(value : string){
//     this._name= value;
//    }
//    set age(value: number){
//     this._age=value;
//    }
//  }

//  let p1 = new Userrs("Prakhar", 23);

//example
class Student {
  private _age: number;

  constructor(age: number) {
    this._age = age;
  }

  // Getter
  get age() {
    return this._age;
  }

  // Setter
  set age(newAge: number) {
    if (newAge > 0) {
      this._age = newAge;
    } else {
      console.log("Age must be positive!");
    }
  }
}

let s1 = new Student(20);
console.log(s1.age);   // ✅ uses getter

s1.age = 25;           // ✅ uses setter
console.log(s1.age);

// s1.age = -5;        // ❌ setter will reject
