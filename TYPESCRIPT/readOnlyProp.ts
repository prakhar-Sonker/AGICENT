 class Userr{
  constructor(public readonly name: string){}

  changeName(){
    this.name = "hellochange"; //this will not work bcz we have set readonnly before the name bcz of this name will be fixed
  }
 }

 let u1 = new Userr("Prakhar");
 u1.changeName();//name not changed 
