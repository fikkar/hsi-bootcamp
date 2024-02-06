/*
6. Buatlah class bernama Eagle dengan ketentuan:
 - Merupakan turunan dari class Animal
 - tambahkan properti speed yang merupaakan number dan bernilai 220
 - Memiliki method:
 - fly yang mengembalikan nilai string "${this.name} yang berumur ${this.age}
sedang terbang!"
 - run memiliki argeument speed bernilai number dan mengembalikan nilai
string "${this.name} Berlari dengan kecapatan ${speed} km";" dengan aksesk
modified protected
 - Ketika diinstansiasi, properti isMammal harus bernilai false
*/

import {Animal} from "./animal";

export class Eagle extends Animal{
    speed: number = 220;

    fly(): string {
        return `${this.name} yang berumur ${this.age} sedang terbang!`;
    }

    protected run(speed: number): string {
        return `${this.name} Berlari dengan kecapatan ${speed} km`;
    }

    constructor(eagleName: string, eagleAge: number, eagleSpeed: number){
        super(eagleName, eagleAge, false);
        this.speed = eagleSpeed;
    }

}

// let eagle = new Eagle("myEagle", 20, 300);
// console.log(`isMammal : ${eagle.isMammal}`);