// let x = document.querySelectorAll(".yes");
// console.log(x);

let givColor = document.querySelector("h2");
givColor.style.color="yellow";
// givColor.style.fontFamily="";
givColor.style.backgroundColor="green";


//changing the content of the html element
let change = document.querySelector("h1");
// change.innerHTML="Changed the content of h1";
//we want to set timer that the change comes after 2 sec
setTimeout(() => {
  change.innerHTML="Changed the content of h1";
}, 2000);

//lets set the timer for g3 element that its bacgound color changes after 5 sec and text color after 2 sec
let makeChangeH3 = document.querySelector("h3");
setTimeout(() => {
  makeChangeH3.style.color="orange";
}, 2000);
setTimeout(() => {
  makeChangeH3.style.backgroundColor = "pink";
}, 5000);

//QUE--> now i want to use single settimeout with diff times can i use it?
// //ANS--> setTimeout schedules a task one time only.
// If you want different delays, you have to call setTimeout multiple times (with different delay values).
// There’s no way to give one setTimeout multiple times at once.



// You can also use a loop to create multiple setTimeout calls:
//not efficient
// for (let i = 1; i <= 2; i++) {
//     setTimeout(() => {
//         makeChangeH3.style.color="orange";
//         makeChangeH3.style.backgroundColor = "pink";
//     }, 3*i * 1000);
// }
