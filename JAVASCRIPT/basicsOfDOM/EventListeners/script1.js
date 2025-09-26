let event1 = document.getElementById("pika");
event1.addEventListener("click", function(){
  event1.style.color="yellow";
  event1.style.backgroundColor="red";
})

let event2 = document.getElementById("char");
event2.addEventListener("mouseenter", function(){
  event2.style.color="white";
  event2.style.backgroundColor="orange";
},
event2.addEventListener("mouseleave", function(){
  event2.style.color="red";
  event2.style.backgroundColor="blue";
}))

// let event3 = document.getElementById("mew");
// event3.addEventListener("click", function(){
//   event3.style.color="green";
//   event3.style.backgroundColor="yellow";
// })

//lets do ---> while clicking on event2 means charhizard the properties of mewto get or event3 gets changed so we have to prepare event listner for event 2

let event3 = document.getElementById("mew");
event1.addEventListener("mousemove", function(){
   event3.style.color="green";
  event3.style.backgroundColor="yellow";
},
event3.addEventListener("click", function(){
  event1.innerHTML="Bulbasaur";
  event1.style.color="pink";
  event1.style.backgroundColor="white";
}))

