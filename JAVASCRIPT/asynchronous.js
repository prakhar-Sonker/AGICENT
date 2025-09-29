
// lets first make an array of objects then we will solve our problem statement

const datas = [
   {name: "Prakhar", Profession: "Software Dev"},
   {name: "Rohit", Profession: "Lawyer"}
];

function getDatas(){
  setTimeout(() => {
    let output = "";
    datas.forEach((data, index)=> {
      output+=`<li> ${data.name}</li>`;
    })
    document.body.innerHTML=output;
  }, 1000); //1s timer
}

function createData(newData){
  setTimeout(() => {
    datas.push(newData);
  }, 2000);
}

getDatas();
createData({name: "Rohit", Profession: "Lawyer"})

//to solve this problem where only getdata array has 2 entries that is displayed as output but new entry is not added bcz of the time getdatas is executed in 1s but new entry is added after 2 sec so first fxn is called and page is refreshed so it is not updating the array so to solve this problem we are using async js 1- callback to rerun the getdata fxn

//updated code
function createData(newData, callback){
  setTimeout(() => {
    datas.push(newData);
    callback();
  }, 2000);
}
createData({name: "Rohit", Profession: "Lawyer"}, getDatas)

//2-> Promises

function createData(newData){
  return new Promise(resolve, reject)=>{
    setTimeout(() => {
      datas.push(newData);
      let error=false; //we let no error present
      if(!error){
        resolve();
      }
      else reject("Error is present");
    }, 2000);
  }
  setTimeout(() => {
    datas.push(newData);
    callback();
  }, 2000);
}
createData({name: "Rohit", Profession: "Lawyer"}) .then(getDatas)


