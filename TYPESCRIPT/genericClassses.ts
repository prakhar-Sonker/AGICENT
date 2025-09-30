class BottleMaker<T>{
  constructor(public key: T){}
}

let b1 = new BottleMaker<string>("Hii");
let b2 = new BottleMaker(123);

console.log(b1, b2);