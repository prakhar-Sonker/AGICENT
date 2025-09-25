let s = "Prakhar"
console.log(s, s.length)
//for printing string through for loop
for(let i=0;i<s.length;i++){
  console.log(s[i])
}
//for of loop
for(const char of s){
  console.log(char)
}
//for-each loop does not work for strings