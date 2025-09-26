//MAP--->
//Map basically agr mujhe ek array se ek aur array banana hai usise related with some specific changes
//aap k pass 1 arr hai aur aap dusra arr banana chate ho aap usko map krna chahte ho iss sense me agr arr ke element 1,2,3,4 hai to dusre arr k element saare original array k element se double ho ye krna hai
//agr same array me bhi change krna hai to mai jaise mai saare  elements ko khud k element se multiply krna chahte hai ya sq, ya cube krna hai to map k use krna hai remember this.......> 

//eg--> yha pe ek arr bnaya fir print kra then ek nya empty arr banya then for-of loop ka use krke nye array me purane array k elements k square psuh kiya new array me
let arr=[1,2,3,4];
console.log(arr);
let brr=[];
for(const ele of arr){
  brr.push(ele*ele);
}
console.log(brr);
//but we will avoid using this bcz we will use map to execute the code faster and with less no of lines of code
//we will make different functions to use in array by using map function
//1- function
function twice(ele){
  return 2*ele;
}
//2- function
function square(ele){
  return ele*ele;
}
//1st method
let array = [1,6,-3,9];
console.log(array);
let ans = array.map(square);
console.log(ans);


//making more enhanced array with the help of map fxn
//2nd method
let nArr = array.map(function(ele){
  return ele*ele*ele;
})
console.log(nArr);

//agr original aray me change krna hai bina function likhe bs parameter pass krke but we will use arrow gunction ' => '
//Arrow Function--->    =>
//now we will use this  format--> use of map and making changes in an array
//3rd method to do this
let a = [1,2,3,4,5];
console.log(a);
a = a.map((ele) =>{
  return ele*2;
});
console.log(a);

//4th method
a=a.map((ele) => ele*2);
console.log(a);

