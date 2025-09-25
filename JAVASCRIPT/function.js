function OneToN(n){
  for(let i=1;i<=n;i++){
    console.log(i);
  }
}
OneToN(5);

function eqn(a,b){
  return Math.abs(a*a*a) + Math.abs(b*b*b);
}

console.log(eqn(2,3));