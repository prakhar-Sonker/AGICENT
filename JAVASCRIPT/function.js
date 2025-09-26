function OneToN(n){
  for(let i=1;i<=n;i++){
    console.log(i);
  }
}
OneToN(5);

function eqn(a,b){  // yha pe let a let b likhna jrurui nhi hai js apne aap smjh jaati hai to na yha pr return type mention krna jruri hai na hi parameters me datatype batana jruri hai
  return Math.abs(a*a*a) + Math.abs(b*b*b);
}

console.log(eqn(2,3));