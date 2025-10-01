

// ## 🧩 Key Concepts in Simple Words

// ### 1. **Class**

// * **Blueprint / template** to create objects.
// * Can have properties + methods.
// * Example:

// ```ts
// class Student {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }
// ```

// ---

// ### 2. **Object**

// * **Actual thing created in memory**.
// * Example:

// ```ts
// const s1 = { name: "Prakhar" }; // object
// ```

// ---

// ### 3. **Instance**

// * **Object created from a class** using `new`.
// * Example:

// ```ts
// const s2 = new Student("Prakhar"); // s2 is an instance of Student
// ```

// 👉 **Shortcut:**

// * Object = independent data.
// * Instance = object created from a class.

// ---

// ### 4. **Interface**

// * Used to define **shape/contract of an object** (what properties it must have).
// * Cannot hold real values, only structure.
// * Example:

// ```ts
// interface User {
//   id: number;
//   name: string;
// }

// const u1: User = { id: 1, name: "Rohit" }; // ✅ must follow structure
// ```

// 👉 Use interface when you just need to **define structure**, especially for **objects, classes, APIs**.

// ---

// ### 5. **Type Alias**

// * Similar to interface, but more **flexible**.
// * Can define unions, intersections, primitives.
// * Example:

// ```ts
// type ID = number | string;
// type User = { id: ID; name: string };
// ```

// 👉 Use `type` when you need **advanced type combinations** (union, intersection, mapping).
// 👉 Use `interface` when you want **only structure / extendable contracts**.

// ---

// ## 🎯 Shortcut Memory Rules

// | Use Case                                                         | What to Use                         | Shortcut Trick               |
// | ---------------------------------------------------------------- | ----------------------------------- | ---------------------------- |
// | Need a **blueprint with methods + real behavior**                | `class`                             | Class = code + behavior      |
// | Need a **real thing in memory**                                  | `object`                            | Object = actual data         |
// | Need a **real thing made from class**                            | `instance`                          | Instance = object from class |
// | Need to **define object shape only** (like API data)             | `interface`                         | Interface = shape only       |
// | Need **advanced types (union, intersection, primitive aliases)** | `type`                              | Type = flexible              |
// | Need both structure + reusable logic                             | `class` with `implements interface` | Combine both                 |

// ---

// ## ✅ Quick Example Combining All

// ```ts
// // 1. Define structure
// interface IUser {
//   id: number;
//   name: string;
// }

// // 2. Advanced type alias
// type ID = number | string;

// // 3. Class (blueprint)
// class User implements IUser {
//   constructor(public id: ID, public name: string) {}
// }

// // 4. Instance (real object from class)
// const u1 = new User(1, "Prakhar");

// // 5. Object (independent, not from class)
// const u2: IUser = { id: 2, name: "Rohit" };

// console.log(u1 instanceof User); // true
// console.log(u2); // plain object
// ```

// ---

// 💡 **Super Shortcut to Remember**:

// * **Interface = What it should look like**
// * **Type = What it can be**
// * **Class = How it works**
// * **Object = The thing**
// * **Instance = The thing made from class**

// ---


// # Quick decision flow (one-liner)

// * Need a runtime object of named constants → **enum**.
// * Need a compile-time union of possible values → **literal union**.
// * Need a reusable object shape → **interface**.
// * Need unions/intersections/tuples/aliases → **type**.
// * Need a class with behavior/instances → **class** (instances via `new`).
// * Need a flexible, type-safe function → **generic**.
// * Need to transform types → **utility types** (`Pick`, `Omit`, `Partial`, ...).

// ---

// ## Compact reference (what → when → example)

// ### 1. `enum`

// **What:** Named constants available at runtime.
// **When:** You want readable constants and possibly reverse mapping (numbers) or string constants used at runtime.

// ```ts
// enum Role { Admin = "ADMIN", User = "USER" }
// const r: Role = Role.Admin;
// ```

// **Tip:** Use `enum` when you need the actual object at runtime; use literal unions when only compile-time checking is enough.

// ---

// ### 2. Literal **Union Types**

// **What:** A type that can be one of several literal values.
// **When:** You want strict allowed values at compile time (no runtime object needed).

// ```ts
// type Status = "loading" | "success" | "error";
// function setStatus(s: Status) { /* ... */ }
// ```

// ---

// ### 3. `interface`

// **What:** Describes object shapes & class contracts. Supports `extends` and declaration merging.
// **When:** Use for objects and for classes to `implements`.

// ```ts
// interface User { id: number; name: string; }
// class U implements User { constructor(public id:number, public name:string){} }
// ```

// ---

// ### 4. `type` alias

// **What:** Flexible alias for primitives, unions, intersections, tuples, etc.
// **When:** Use when you need unions, intersections, mapped types or tuples.

// ```ts
// type ID = number | string;
// type Point = [number, number];
// type AandB = A & B;
// ```

// ---

// ### 5. `class` / instance / object

// **What:** `class` is blueprint; `new` creates an instance (object).
// **When:** Use classes when behavior + state + inheritance are useful.

// ```ts
// class Person { constructor(public name:string){} }
// const p = new Person("Prakhar"); // p is instance
// ```

// ---

// ### 6. **Generics**

// **What:** Type placeholders (`<T>`) for reusable, type-safe code.
// **When:** Functions/types that must work for many types while preserving type info.

// ```ts
// function identity<T>(x: T): T { return x; }
// const s = identity<string>("hi");
// ```

// ---

// ### 7. **Type Guards** (`typeof`, `instanceof`, `in`, custom `x is Y`)

// **What:** Narrow unions at runtime so TypeScript knows the exact type in a block.
// **When:** You have union types and need to use type-specific properties safely.

// ```ts
// function f(v: string|number){
//   if(typeof v === "string"){ v.toUpperCase() }         // typeof guard
// }
// class A{} class B{}
// if(obj instanceof A) { /* A-specific */ }              // instanceof guard
// ```

// ---

// ### 8. **Type Assertion / Casting**

// **What:** Tell TS “trust me, this is X” (`as X` or `<X>`).
// **When:** You know more about runtime type than the compiler (use carefully).

// ```ts
// const el = document.getElementById("id") as HTMLInputElement;
// ```

// ---

// ### 9. `keyof` & `typeof` (type-level operators)

// **What:** `keyof T` → union of property names. `typeof value` → type of a value at type level.
// **When:** For type-safe property access or mapping.

// ```ts
// type User = { id:number; name:string; }
// type Keys = keyof User; // "id" | "name"
// const u = {a:1}; type UType = typeof u; // {a:number}
// ```

// ---

// ### 10. Index signatures

// **What:** Types with dynamic keys.
// **When:** Object with unknown keys but known value type.

// ```ts
// interface ErrorMap { [key:string]: string }
// const e: ErrorMap = { name: "required", email: "invalid" };
// ```

// ---

// ### 11. Utility Types (quick list + tiny use)

// * `Partial<T>` → all props optional.
// * `Required<T>` → make optional props required.
// * `Readonly<T>` → all props readonly.
// * `Pick<T,'a'|'b'>` → select keys.
// * `Omit<T,'k'>` → remove keys.
// * `Record<K, T>` → object type with keys K and value T.

// ```ts
// type U = Pick<User, "id" | "name">;
// type Opt = Partial<User>;
// type Map = Record<'admin'|'user', number>;
// ```

// ---

// ### 12. Mapped Types (brief)

// **What:** Programmatically transform types with `in keyof`.
// **When:** Create patterns like `Readonly<T>` yourself.

// ```ts
// type Readonly<T> = { readonly [K in keyof T]: T[K] }
// ```

// ---

// ### 13. `Promise<T>` / Async types

// **What:** Represent async return type.
// **When:** Always type async functions to maintain safety.

// ```ts
// async function fetchUser(): Promise<User> { /* ... */ }
// ```

// ---

// ### 14. Function helpers: **Rest params**, **Overloads**, **tuples**

// * Rest params: `(...nums: number[])` collect args into array.
// * Overloads: multiple call signatures + one implementation.
// * Tuple types: fixed-length arrays with known types: `type Pair = [string, number]`.

// ---

// ### 15. Index signature vs Record vs Map

// * Use `Record<K,T>` for known finite key set at type level.
// * Use index signature when keys are arbitrary strings/numbers.
// * Use `Map` if you need runtime iterable key/value store.

// ---

// ### 16. Decorators & Namespaces (advanced / less common)

// * **Decorators**: experimental; used in frameworks like NestJS.
// * **Namespaces**: legacy internal modules; prefer ES modules (`import`/`export`) in modern code.

// ---

// ## Tiny FAQ / Short Tricks

// * Want compile-time-only set of allowed values → use **literal union**.
// * Want a runtime object of constants (for switching, mapping, reverse lookup) → use **enum**.
// * Need to extend an object shape across files or let consumers extend it → **interface** (declaration merging works).
// * Need union/intersection/tuple combos → **type alias**.
// * Need to reuse shape + behavior → **class implements interface**.
// * Need to convert function that works for any input type → use **generics**.
// * Are you manipulating DOM elements? Use **type assertion** (e.g., `as HTMLInputElement`).
// * Need to derive keys or properties programmatically? Use **keyof**, mapped types, `Pick`/`Omit`.

// ---

