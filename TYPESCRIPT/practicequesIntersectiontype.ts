// Student + Address

// Create a Student type with name, rollNo
// Create an Address type with city, country
// Make StudentDetails = Student & Address and create an object

type Students = {
  name: string;
  rollNo: number;
}

type Address = {
  city: string;
  country: string;
  zipCode?: number | string;
}

type StudentDetails = Students & Address;

function printStudentDetails(details: StudentDetails){
  console.log("Name: ", details.name),
  console.log("Roll No: ", details.rollNo),
  console.log("City: ", details.city),
  console.log("Country: ", details.country);
}

printStudentDetails({
  name: "Prakhar",
  rollNo: 1,
  city: "Kanpur",
  country: "India"
})