//reduce fxn basically java me jo lambda fxn hai waisa work krta hai mtlb 2 parameters pass krenge aur wo pure array k liye work krke end me result dedega
let arr = [1,2,3,4,5,6];
console.log(arr);

let x = arr.reduce(function(a,b){
  return a*b;
})
console.log(x);