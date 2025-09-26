//make a timer from 30 to 1 sec
for(let i=30;i>=1;i--){
  setTimeout(function(){
    console.log(31-i);
  },i*1000) //1sec ka timer lgaya haiṇ 
}

//make a timer from 1 to 10 each entery should be executed after 5 seconds each

for(let i=1;i<=5;i++){
  setTimeout(function(){
    console.log(i);
  }, i*5000);
}

//timer for random numbers to print till 10 seconds
// let num = Math.ceil(Math.random()*10); //ye step phle glt kr re the
for(let i=1;i<=10;i++){
  setTimeout(function(){
    console.log(Math.ceil(Math.random()*10));
  },i*1000)
}