// 👉 Q1 (Easy): Create a generic function identity that takes any type of input and returns it.

function identity<T>(input: T) : T{
  console.log("Identity: ", input);
  return input;
}

identity<string>("Prakhar");
identity<number>(12);
identity<boolean>(true);

//Method-2-- x---- --
// You don’t always need to specify <string>, <number> explicitly — TypeScript can infer the type.
// identity("Prakhar"); // TS infers string
// identity(12);        // TS infers number
// identity(true);      // TS infers boolean

// But, explicitly writing <T> is useful when:
// You want to enforce a specific type.
// You’re working with complex types (like arrays, objects, or constraints).


// 👉 Q2 (Medium): Create a generic function getArray that takes an item of any type and returns it inside an array. Example:

// function getArray<T>(item: T): T[]{
//   console.log("Any item u entered: ", item);
//   return [item];
// }

// getArray([1,2,3,4]);
// getArray("hello");
// getArray(["hi", "my", "name"]);

//or
function getArray<T>(item: T): T[] {
  console.log("Any item you entered:", item);
  return [item];  // Wrap item inside an array
}

// Test cases
console.log(getArray<number>(5));        // [5]
console.log(getArray<string>("hello"));  // ["hello"]
console.log(getArray<string[]>(["hi", "my", "name"])); // [["hi", "my", "name"]]

