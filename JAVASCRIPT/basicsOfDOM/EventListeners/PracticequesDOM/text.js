let input = document.getElementById("userInput");
let button = document.getElementById("showBtn");
let display = document.getElementById("displayText");

button.addEventListener("click", function(){
  let text = input.value;
  display.innerHTML = text;
  input.value=""; //clears the input
  
})
