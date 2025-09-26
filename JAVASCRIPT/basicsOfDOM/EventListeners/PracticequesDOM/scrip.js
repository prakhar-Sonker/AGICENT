let button = document.getElementById("toggleBtn");
button.addEventListener("click", function(){
  document.body.style.backgroundColor="black";
})
button.addEventListener("mouseleave", function(){
  document.body.style.backgroundColor="white";
})