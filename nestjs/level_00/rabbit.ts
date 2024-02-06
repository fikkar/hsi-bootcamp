/*
 5. Buatlah class bernama Rabbit dengan ketentuan:
 - Merupakan turunan dari class Animal
 - Memiliki method:
 - eat yang mengembalikan nilai string "${this.name} yang berumur ${this.age}
sedang makan!"
 - Ketika diinstansiasi, properti isMammal harus bernilai true
*/

import {Animal} from "./animal";

export class Rabbit extends Animal{
    
   constructor(rabbitName: string, rabbitAge: number){
        super(rabbitName, rabbitAge, false);
   }
   
    eat() : string {
        return `${this.name} yang berumur ${this.age} sedang makan`;
   }


}

// let rabbit = new Rabbit("myRabbit", 13);
// console.log(rabbit.eat());
// console.log(rabbit.isMammal);
// rabbit.eat();