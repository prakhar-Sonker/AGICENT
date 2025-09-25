//objects me left side wli key hoti hai aur right side wli value key jo hogi uske beech me space nhi de skte  pr agr dere hai to usko "nick name" aise likh do aur key ko bhi hm "name" aise likh skte hai
//aur hr line k baad , lgate hai agr aur entries add kr re hai to wrna last line me nhi use krte hai 

let x = {
  name: "Prakhar",
  "nick name": "Avi",
  age: 22,
  percentage:75,
  isMarried: false
};
console.log(x);

//agr sirf age ko print krnaa hai to . dot operator use krenge
console.log(x.age);
//if we have to print a object like console.log(x[age]) it is not possible so to sort this out we can make age a string and then print is value
console.log(x[age]); // not possible
console.log(x['age']); // this is possible