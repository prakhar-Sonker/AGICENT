 class Userrs{
   constructor(public _name: string, public _age: number){}

   get name(){
     return this._name;
   }
   get age(){
    return this._age;
   }

   set name(value : string){
    this._name= value;
   }
   set age(value: number){
    this._age=value;
   }
 }

 let p1 = new Userrs("Prakhar", 23);