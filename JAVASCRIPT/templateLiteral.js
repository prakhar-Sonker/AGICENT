let age = 23;
let exp =1;
//normal way to print the statement
console.log("My age is "+age+" And My experience is "+exp);
//by using template literals using backtrick(``) this is very useful in js
//this is the effective way for printing by this we can avoid using + sign and is useful when we want to print " or ' this in b/w the characters
console.log(`My age is ${age} and my experience is ${exp}`); // yha pe age aur exp variables hai unko hmesha ${} me likhte hai

//for eg--> Prak"ar or Prakh'ar
console.log("Prak\har") //--> 1 way
console.log('Prak"har'); //2nd way
//but we should always use
console.log(`Prak"har`);
console.log(`Prak'har`);
