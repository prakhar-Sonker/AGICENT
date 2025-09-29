//closures is like nested fxn 

let name = "Prakhar";
function outerFunction(){
  {
    //here the lines of code are only defined for this brackets only
    let name = "Harsh";
    //iske baad ye name remove hojyega bracket k bhar aate hi
  }
  function innerFunction(){
    //ye name bs iss bracket k andr tk define hai
    let name="Rohit";
    console.log(name);
  }
  innerFunction();
}
outerFunction();