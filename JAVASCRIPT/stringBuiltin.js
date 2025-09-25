let s = "Prakhar Sonker";
console.log(s);

s.toUpperCase(); // ye permanent change nhi krta hai string ko ye copy bnata hai particular string aur usko return kr deta hai
//agr permanent change krna hai to nyi string bnao aur store kralo usme ye string
let s1 = s.toUpperCase();
console.log(s1);
console.log(s.toLowerCase());
console.log(s); //ab firse ye original wli string print krdega bcz original string kbhi change hi nhi hui thi

//trim fxn--> It removes the extra space present in the string from front and back side but it does not remove the space from the middle
let str ="    Hello    My     ";
console.log(str.trim());

//indexof() --> gives the index of char in the string
console.log(str.indexOf('l')); // gives the first index of the char present in the string
console.log(str.lastIndexOf('l'));

//slice--> in js substring is called slice
let s3="prakharsonker";
console.log(s3.slice(2)); // it gives the substring from index 2 to end
console.log(s3.slice(2,7)); //it give the substring from index 2 to 6(lastindex-1)

//split fxn--> splits the string on the given condition it can be space , etc.

let s4 = "prakhar is learning js";
console.log(s4);
let arr = s4.split(' '); // we have split the string on the basis of space and then stored in array
console.log(arr);
//printing array
for(const ele of arr){
  console.log(ele);
}