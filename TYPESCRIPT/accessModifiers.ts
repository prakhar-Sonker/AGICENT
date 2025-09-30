// class BottleMaker{
//   constructor(private name: string){}
// }

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

class BottleMaker{
  protected name;

  // constructor(public quality: string){}
}

class MetalBottleMaker extends BottleMaker{
  public material = "metal";

  changeName(){
    this.name = "Name Changed";
  }
}

let b1 = new MetalBottleMaker();
b1.changeName();
// b1.name="lets change"; //ye output to show krdega pr error bhi show krta rhega bcz it is not possible




//Example

class Student {
  public name: string;       // public (default)
  private age: number;       // private
  protected grade: string;   // protected

  constructor(name: string, age: number, grade: string) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  showAge() {
    console.log(`Age: ${this.age}`); // ✅ allowed (inside class)
  }
}

class HighSchoolStudent extends Student {
  showGrade() {
    console.log(`Grade: ${this.grade}`); // ✅ allowed (protected in child)
  }
}

let s1 = new Student("Prakhar", 22, "A");
console.log(s1.name);   // ✅ public → accessible
// console.log(s1.age); // ❌ Error (private)
// console.log(s1.grade); // ❌ Error (protected)

s1.showAge(); // ✅ prints age

let hs = new HighSchoolStudent("Rohit", 18, "B");
hs.showGrade(); // ✅ allowed
