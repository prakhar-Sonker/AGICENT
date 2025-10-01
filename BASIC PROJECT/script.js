let form = document.getElementById("form");

//by this every time we click the button it got refreshed so we have to stop this so we can use prevent default to stop this in this we can write any value in event listner
// form.addEventListener("submit", () =>{
//   console.log("button clicked");
// })
//updated code
form.addEventListener("submit", (e) =>{
  e.preventDefault();//ye refresh nhi krega ab click krne pr
  //aur console me check kroge to count bdh rhega click krne pr
  formValidation();
  console.log("button clicked");
})

//jb bhi ye button click kre to function ko call kre name form validation
//isko kis basis pe target kr re hai?
// we r targeting that textarea me kuch likha hai ya nhi agr likha hai to sucess age nhi to failure ye hm if-else se kr skte hai bs ek baar text box me dekhna pdega kuch likha hai ya nhi to iske liye id lenge textbox ki then we will move forward

//only this part of this code will not work bcz tumne invoke nhi kiya isko ye btao  kha likhoge fxn me normally bhar mtlb fxn call formValidation() aise ya fir event listner k andr?
// to ans is event listner k andr bcz javascript top to bottom chlti hai to fxn call krenge to sirf ek baaar hi chlega to isliye event listner me fxn call krenge to jistni baar event call hoga utni baar fxn call hogi.
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let formValidation = () => {
  //now we will check input is blank or not
  if(input.value === ""){
    // ye kiya hai to ye agr blank hai tb chl gya agr dobara chaloge to bhi rhega bcz htaya nhi hai ye to else me add krenge ki jb valid hai to isko normal krde koi msg print na kre...
    msg.innerHTML="Post cannot be Blank!!!";
    // console.log("Failure");
  } 
    else {
      console.log("Success");
    msg.innerHTML="";
    acceptData();
    };
}

//ab data store krne ke liye bnayenge fxn aur data jisme jyega wo
//isko yha pr na likh kr success wli condxn me likheneg ekyunki tb fxn trigger ho aur data store hojaye
// we will store data in empty object
let data = {};

let acceptData = () => {
  data["text"] = input.value;
  console.log(data);
  createPost();
}

//now ab data upload krenge ek post ki id bna rkhi this usse saari post ko handle krenge
let posts = document.getElementById("posts");
let createPost = () => {
  posts.innerHTML += 
  `<div>
    <p>${data.text}</p>
            <span class="options">
              <i onClick="updatePost(this)" class="fas fa-edit"></i>
              <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
            </span>
  </div>`
  // // agr koi particular fxn chalana hai uss btn pr click krke to yha pe fxb call krenge //
  //yha pe reset krne k liye
  input.value="";
}

//delete krdo entry
// ye krne se bs delete icon hi delete hora to ab uske parent ko remove krenge means span ko delete kr re pr main to div hai jo parent haiusko htane se poori entry htegi
// let deletePost = (e) => {
//   e.remove();
// }
// so we will write updated version which needed ab iske bhi parent ko delete krdenge to poori entry hi delete ho jyegi
// let deletePost = (e) => {
//   e.parentElement.remove();
// }
//final part for deleting entry
let deletePost = (e) => {
  e.parentElement.parentElement.remove();
}

//now make the update fxn
let updatePost = (e) => {
  input.value= e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
}