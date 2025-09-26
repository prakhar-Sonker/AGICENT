//Array can be created simply by let arr, var arr and even arr 
//multiple operations can be performed on these 3

arr = [1,2,3,4,5]
console.log(arr)
// n=arr.length
// console.log(n)

//printing array
// for(let i=0;i<n;i++){
//   console.log(arr[i])
// }

//in js array is the arraylist like in java in java we have multiple fxns of arraylist like add, remove and etc so here same property of arraylist will be shown by the arrays in js
//arr functions

arr.push(6) // add element in back
console.log(arr)
arr.pop() //removes the last element of the array
console.log(arr)
arr.unshift(0)// it adds the element in front of the array
console.log(arr)
arr.shift() //it removes the first element of the array
console.log(arr)

//diff in let and const in arr
let arr=[1,2,4,5]
console.log(arr)
arr=4
console.log(arr)
//it will give o/p for both without any error

//but in case of const it is not same

// const arr=[1,2,3,4]
// console.log(arr)
// arr=5
// console.log(arr)
//it will show errror 

//we can store multiple datatypes in a single array
//type of arr in js is object
arr = [4, "Prakhar", 7.99, true, [1,2,3]]
console.log(arr)


//making of 2d array
brr = [[1,2,3], [4,5,6,7,]]
console.log(brr)