// 🔹 What is an Interface?
function getDetails(obj) {
    var _a;
    console.log("Name:", obj.name);
    console.log("Age:", obj.age);
    console.log("Email:", obj.email);
    console.log("Gender:", (_a = obj.gender) !== null && _a !== void 0 ? _a : "Not Provided");
}
getDetails({
    name: "Prakhar",
    age: 22,
    email: "pra@gmail.com",
    gender: "male"
});
