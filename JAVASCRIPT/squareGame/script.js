let s1 = document.getElementById("sq1");
let s2 = document.getElementById("sq2");
let s3 = document.getElementById("sq3");
let s4 = document.getElementById("sq4");


//event listners
//1st event
//concept here to learn ki jo hm changes kr re hai wo sq1 me hore hai bcz 1 hmara andr hai div k andr pr uske andr ek aur element hai that is h1 tag so keep remember always ki agr element k andr element aajaye tb to usko bhi pass krenge and normal concept yaaad rkhna string k andr int mt pass krna mtlb jo number tumko change krana hai wo so the process is-->  `<h1>${randomNum}</h1>`  or "<h1>"+randomNum+"</h1>"
s1.addEventListener("mouseenter", function(){
  let randomNum = Math.floor(Math.random()*100);
  // s1.innerHTML= "<h1>"+Math.floor(Math.random()*100)+"</h1>";
  s1.innerHTML= `<h1> ${randomNum} </h1>`;
}) 

//2nd event listner
//1st method
// let num=0;
// s2.addEventListener("mouseenter", function(){
//   num++;
//   if(num%2==0){
//     s2.style.backgroundColor="red";
//   }
//   else s2.style.backgroundColor="green";
// })
// s2.addEventListener("mouseleave", function(){
//   s2.style.backgroundColor="white";
// })
//2nd method
let clr="green";
s2.addEventListener("mouseenter", function(){
  if(clr=="green"){
    s2.style.backgroundColor="green";
    clr="red";
  }
  else if(clr=="red"){
    s2.style.backgroundColor="red";
    clr="blue";
  }
  else {
    s2.style.backgroundColor="blue";
    clr="green";
  }
  s2.addEventListener("mouseleave", function(){
  s2.style.backgroundColor="white";
})
})

//3rd event listner
s3.addEventListener("mouseenter", function(){
  let a = Math.floor(Math.random()*256); //yha pr 100 kijgh 256 liya tki 0 se 256 tk no aaye aur floor leliya hai to 255 tk hi max value rhegi 
  let b = Math.floor(Math.random()*256);
  let c = Math.floor(Math.random()*256);
  s3.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
})
  s3.addEventListener("mouseleave", function(){
  s3.style.backgroundColor="white";
})

//4th event listner
s4.addEventListener("click", function(){
  let r1 = Math.floor(Math.random()*256);
  let r2 = Math.floor(Math.random()*256);
  let r3 = Math.floor(Math.random()*256);
  // s1.style.backgroundColor= `rgb(${a}, 0, 0)`; //agr yha pe 0 kijgh 255 dedenge to light shades aajyenege jo chaiye tha hme
  s1.style.backgroundColor= `rgb(${r1}, 255, 255)`;
  s2.style.backgroundColor= `rgb(255 ,${r2}, 255)`;
  s3.style.backgroundColor= `rgb(255, 255, ${r3})`;
})
  s4.addEventListener("mouseleave", function(){
  s1.style.backgroundColor="white";
  s2.style.backgroundColor="white";
  s3.style.backgroundColor="white";
})