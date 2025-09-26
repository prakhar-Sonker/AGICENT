let incS = document.getElementById("inc");
let decS = document.getElementById("dec");
let display = document.getElementById("display");

//event listners
let count = 0;
incS.addEventListener("click", function () {
  count++;
  display.innerHTML = count; //update screen
})
decS.addEventListener("click", function () {
  if(count<=0) display.innerHTML = "Error";
  else {
    count--;
    display.innerHTML = count;
  }
})