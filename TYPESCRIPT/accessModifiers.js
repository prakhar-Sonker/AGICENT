// class BottleMaker{
//   constructor(private name: string){}
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// let b1 = new BottleMaker("Milton");
// b1.name="Cello";
//using extend keyword
// class BottleMaker{
//   private quality: string = "best"; //ye jo bnaya hai proivate ye bs isi botttlemaker k andr hi accesible hoga isko kisi aur fxn ya child class se bhi access nhi kr skte hai
//   constructor(public name: string){}
// }
// class MetalBottleMaker extends BottleMaker{
//   constructor(name: string){
//     super(name);
//   }
//   getValue(){
//     console.log(this.name);
//   }
// }
// let b1 = new MetalBottleMaker("Milton");
// b1.getValue();
// let b2 = new MetalBottleMaker("Cello");
//using protected keyword
//protected--> ye bs jis class me bna hai wha change hoga aur child class me jb extend krke bnayenge tb change kr skte hai aur bhar se isko nhi kr skte change error dedega mtlb jb object bna re honge tb change nhi kr skte bcz of the protected keyword
var BottleMaker = /** @class */ (function () {
    function BottleMaker() {
    }
    return BottleMaker;
}());
var MetalBottleMaker = /** @class */ (function (_super) {
    __extends(MetalBottleMaker, _super);
    function MetalBottleMaker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.material = "metal";
        return _this;
    }
    MetalBottleMaker.prototype.changeName = function () {
        this.name = "Name Changed";
    };
    return MetalBottleMaker;
}(BottleMaker));
var b1 = new MetalBottleMaker();
b1.changeName();
// b1.name="lets change"; //ye output to show krdega pr error bhi show krta rhega bcz it is not possible
//Example
var Student = /** @class */ (function () {
    function Student(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    Student.prototype.showAge = function () {
        console.log("Age: ".concat(this.age)); // ✅ allowed (inside class)
    };
    return Student;
}());
var HighSchoolStudent = /** @class */ (function (_super) {
    __extends(HighSchoolStudent, _super);
    function HighSchoolStudent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HighSchoolStudent.prototype.showGrade = function () {
        console.log("Grade: ".concat(this.grade)); // ✅ allowed (protected in child)
    };
    return HighSchoolStudent;
}(Student));
var s1 = new Student("Prakhar", 22, "A");
console.log(s1.name); // ✅ public → accessible
// console.log(s1.age); // ❌ Error (private)
// console.log(s1.grade); // ❌ Error (protected)
s1.showAge(); // ✅ prints age
var hs = new HighSchoolStudent("Rohit", 18, "B");
hs.showGrade(); // ✅ allowed
