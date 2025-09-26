//same work as lambda fxn in java
let arr = [1,5,-2,9,-7,8];
console.log(arr);

// arr=arr.sort(); //ye glt sort deta hai -ve k case me
//ye yaaad rkhna dont use sort fxn directly without comparator

//agr minus value ko ignore krke tb sort krna hai to we will use math.abs on a and b using lambda fxn to sort
arr=arr.sort((a,b) => Math.abs(a)-Math.abs(b));
console.log(arr); //op -> 


arr=arr.sort((a,b) => a-b); //actual sort 
console.log(arr);