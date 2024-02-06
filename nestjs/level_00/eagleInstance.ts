/*
9. Buatlah instance dari class Eagle bernama "myEagle" dengan ketentuan:
 - properti name bernilai: "Elo"
 - properti age bernilai: 4



 const myEagle = new Eagle("Elo", 4, 220);
myEagle.fly()); Elo yang berumur 4 sedang terbang!
myEagle.run() Error karena method run memiliki access modifier protected
*/

import { Eagle } from "./eagle";

const myEagle = new Eagle("Elo", 4, 220);
console.log(myEagle.fly());
//console.log(myEagle.run(100));