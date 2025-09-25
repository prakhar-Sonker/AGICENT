// lets write a fxn jisme phle neeche wla fxn call ho baad me uupr wla fxn run ho

// function hello(){
//   console.log("hello");
// }
// function bye(){
//   console.log("bye");
// }

// hello();
// bye();
//1sec=1000 milisec

// setTimeout(hello, 4000); // to ye run se 4 sec baad call hoga na ki phle jo fxn chl rha hai usse 4 sec baad rember this point 
// setTimeout(bye, 2*1000); // ye run se 2 sec baad chlega no matter phle kaun call hua hai ya nhi bcz yha pr timer lga diya hai

//improved version of above code always use to write like this
//setTimeout k andr hi fxn likhne ki try kro
// setTimeout(function(){
//   console.log("hello");
// }, 4000);
// setTimeout(function(){
//   console.log("bye")
// }, 2000);

//boiler plate to understand settimeout and how to write this
// setTimeout(function(){
  //yha jo likhoge wo chl jyega

// }, 5*1000) // mtlb ye 5 sec baad execute hoga

//new task-->  print the number from 1 to 10 with gap of every ith sec means 1 - 1 sec me print ho , 3- 3sec baad print ho aise 10 tk bascially 1 to 10 tk timer bna re hai
//timer
for(let i=1;i<=10;i++){
  setTimeout(function(){
     console.log(i);
  }, i*1000);
}

//reverse timer--> yha pe misunderstanding ho skti hai ki 10 se 1 kyu nhi print hua it is normal but 
for(let i=10;i>=1;i--){
  setTimeout(function(){
    console.log(i);
  }, i*500); //time lapse of 5ms
}