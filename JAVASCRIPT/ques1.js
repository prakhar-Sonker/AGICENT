// write a code to generate a random integer b/w 0 and 9 (included)
let x = Math.random()*10;
console.log(Math.floor(x));

//genetrate a number b/w -10 to 10
let num = Math.random()*-10;
console.log(Math.ceil(num));

if(Math.random()<0.5){
  console.log("hello")
}
else console.log("bye")