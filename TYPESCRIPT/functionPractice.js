//1-> Basic fxn------ x --------
function sayHello(name) {
    return "Hello ".concat(name);
}
console.log(sayHello("Prakhar"));
// name: string → input must be a string.
// : string after the ) → output must be a string.
// 👉 If you pass a number → TypeScript gives an error.
//2->  Function with no return 
function logMessage(msg) {
    console.log("Message: ", msg);
}
logMessage("Learning Functions");
//3-> Function with Multiple Parameters
function add(a, b) {
    return a + b;
}
console.log(add(2, 3));
//4-> Default Parameters
//If no value is given, a default will be used.
function greet(name) {
    if (name === void 0) { name = "Guest"; }
    return "Hello ".concat(name);
}
console.log(greet());
console.log(greet("Prakhar"));
