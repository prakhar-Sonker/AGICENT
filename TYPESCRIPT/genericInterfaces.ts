//generics interfaces

interface Info<T>{
  name: string;
  age: number;
  key: T//key kuch bhi ho ksa hai string aur number so we can do it string | number | null but we dont want to do this thats why we will use generics in this to confirm its datatype
  //bcz mai chahta hu ki gurranteed ho ki string ho ya number isliye generics use krenge
}

function displayInfo(obj: Info<number>){}

displayInfo({name: "Prakhar",age: 22,key:  12344});