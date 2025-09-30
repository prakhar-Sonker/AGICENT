//basic formation of a function
// function abcd(): string{
//   return "";
// }
//kuch na return kre to void
//function types
function abcdef(name, age, cb) {
    cb("Prakhar");
}
abcdef("prakhar", 22, function (arg) {
    console.log(arg);
});
//optional and default parameters
function info(name, age, gender) {
    console.log(name, age, gender);
}
info("prakhar", 22, "male");
info("lagbatq", 25);
//rest parameters
//or spread parameters
//rest-->  ...
//function k parameter me agr  ... lgaya to aap wha pr sarre diye gye args ko ek hi variable mein as an array rakh rhe ho
function sum() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    console.log(arr);
}
sum(1, 2, 3, 4, 5, 6, 7, 8);
function abc(a, b) {
    if (typeof a === "string" && typeof b === undefined)
        console.log("hey");
    if (typeof a === "string" && typeof b === "number")
        return 123;
    else
        throw new Error("something is wrong");
}
abc("hey");
abc("ab", 13);
