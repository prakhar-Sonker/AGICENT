//for-of loop
// this loop can be used to preint the array but can't be used to make changes in the array while printing arr means agr koi operation krenge for-of loop me to wo elements me to change krenge pr arr pe nhi visible hoga vo 
//agr const use krenge to error dedega and let use krenge to same arr print hojyega without eroor
//for-of loop me index print nhi kra skte

arr=[1,2,3,4,5]
brr = [1,2,3,4,5]
//for-of loop for const
//this code will not run bcz of const
// for(const ele of brr){
//   ele*=2
//   console.log(brr)
// }
// console.log(brr)

//for-of loop for let
// for(let ele of arr){
//   ele*=2 //this will give error
//   console.log(ele)
// }
// console.log(arr) // see there is no change in arr

//for-each loop
//only 1 major diff is there as compared to for-of loop it can print element as well as index and array also more like a fxn

crr = [1,2,3,4,5]
crr.forEach((ele, i, crr) => {
  console.log(ele,i, crr) //here ele is value and i is index
});
