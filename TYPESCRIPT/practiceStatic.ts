// Q2 (Medium-Hard):

// Create a class Student with:

// name (public).

// A static property totalStudents (initialized as 0).

// In the constructor, increase totalStudents whenever a student is created.

// A static method getTotalStudents() that returns how many students have been created.


class Student{
  public name: string;

  static totalStudents: number = 0;

  constructor(name: string){
    this.name=name;
    Student.totalStudents++;
  }

  static getTotalStudents(){
    return Student.totalStudents;
  }
}

let s1 = new Student("Prakhar");
let s2 = new Student("Rohit");

console.log("Total Students:", Student.getTotalStudents()); 
// Output: Total Students: 2

