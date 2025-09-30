// Q2 (Medium-Hard):
// Create a base class Employee with:
// name (public)
// salary (protected)
// department (public)
// Then create a subclass Manager that:
// Has an extra property bonus (private).
// Has a method getTotalSalary() that adds salary + bonus and prints it.
// Now test it by creating an object of Manager.

class Employeers{
  public name: string;
  protected salary: number;
  public department: string;

  constructor(name: string, salary: number, department: string){
    this.name=name;
    this.salary=salary;
    this.department=department;
  }
}

class Manager extends Employeers{
  private bonus : number;

  //u forgot this point u have to add constructor bcz this is child class
    constructor(name: string, salary: number, department: string, bonus: number) {
    super(name, salary, department); // call parent constructor
    this.bonus = bonus;
  }


  getTotalSalary(){
    let sal = this.salary+this.bonus;
    return sal;
  }
}

let m1 = new Manager("Prakhar", 10000, "IT",1000);
console.log("Name: ",m1.name);
console.log("DepartMent: ", m1.department);
// console.log("Salary: ", m1.salary); // this cannot be done bcz it is private
console.log("Total Salary: ", m1.getTotalSalary());