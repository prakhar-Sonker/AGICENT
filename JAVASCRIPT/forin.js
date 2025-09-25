let x = {
  name: "Prakhar",
  "nick name": "Avi",
  age: 22,
  percentage:75,
  isMarried: false
};

//agr hme key ya values ko print krana hai to for-in loop ka use krenge 
//for printing key--> console.log(key)
//for printing values--> console.log(x[key]) we cannot write console.log(x.key) tis is wrong it will give output undefined

//for-in loop
for (const key in x) {
  if (Object.hasOwnProperty.call(x, key)){
    console.log(key); //printing keys
     console.log(x[key]); //printing values
     console.log(key, x[key]);
  }
}

for (const key in x) {
  console.log(key, x[key]);
}