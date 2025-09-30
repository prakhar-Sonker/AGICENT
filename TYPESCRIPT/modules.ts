//modules

//1-> Export and importing modules

import { addd, multiplyy } from "./moduleKliyeFxn";

addd(2,3);
multiplyy(2,3);


//2-> Default export-> 
// Jb aapke file me kyi saari cheeze ho aur wo aapko export krna ho tb we use default export
//we can export the class
//export default - Iska mtlb hai ek hi cheez export hogi aur isme bracket nhi lgenege wo sirf fxn me lgenge ya fir jb export default nhi likhenege
//jis classs ko export krna tha wha pr export defaault likh diya hai now

import Persons from "./classes";

let p3 = new Persons("Harsh", 23);
let p4 = new Persons("Abhishek", 24);
console.log(p3,p4);
