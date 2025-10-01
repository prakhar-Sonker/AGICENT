// 🔹 What are Type Guards?

// When you use union types in TypeScript, the compiler doesn’t always know which type you’re currently working with.

// 👉 Type Guards are checks you write inside your code to help TypeScript narrow down the type at runtime.

// Think of them as "runtime checks to tell TypeScript: hey, this value is actually of this type now."

// 1. Using typeof for primitive types
// The typeof operator works well with primitive types like:
// string
// number
// boolean
// symbol
// undefined
// bigint

//example
function printValue(val: string | number) {
  if (typeof val === "string") {
    console.log("String in uppercase:", val.toUpperCase());
  } else {
    console.log("Number squared:", val * val);
  }
}

printValue("prakhar"); // String in uppercase: PRAKHAR
printValue(5);         // Number squared: 25
// 👉 Here typeof val === "string" tells TS: Inside this block, treat val only as string



// 2. Using instanceof for classes / objects

// The instanceof operator is used to check if an object is an instance of a class.
// This works for custom classes (not primitives).

// example
class Dog {
  bark() {
    console.log("Woof! 🐶");
  }
}

class Cat {
  meow() {
    console.log("Meow! 🐱");
  }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark(); // TS knows animal is Dog here
  } else {
    animal.meow(); // TS knows animal is Cat here
  }
}

makeSound(new Dog()); // Woof! 🐶
makeSound(new Cat()); // Meow! 🐱
// 👉 Here, animal instanceof Dog narrows down the type to Dog.

// 3. ✅ Why Type Guards are Important

// Without them:
// You’ll get TypeScript errors like: Property 'toUpperCase' does not exist on type 'string | number'.
// You’ll need type guards to make your code type-safe and avoid runtime errors.

// ⚡ Quick Recap:
// Use typeof → For primitive types (string, number, boolean, etc.)
// Use instanceof → For objects created from classes
