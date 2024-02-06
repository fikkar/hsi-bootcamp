/*
7 Buatlah class bernama EagleRun dengan ketentuan:
 - Merupakan turunan dari class Eagle
 - Memiliki method:
 - fly yang mengembalikan nilai string "${this.name} yang berumur ${this.age}
sedang terbang!"
 - runEagle yang mengembalikan menjalakan method run dari class Eangle
 */

 import { Eagle } from "./eagle";

 export class EagleRun extends Eagle{

  

    constructor(eagleRunName: string, eagleRunSpeed: number, eagleRunAge: number = 4){
        // console.log(`eagleRunName: ${eagleRunName}`);
        // console.log(`eagleRunSpeed: ${eagleRunSpeed}`);
        // console.log(`eagleRunAge: ${eagleRunAge}`);
        super(eagleRunName, eagleRunAge, eagleRunSpeed);
        // super(eagleRunName, null, eagleRunSpeed);
    }

    fly(): string {
        return `${this.name} yang berumur ${this.age} sedang terbang!`;
    }

    runEagle(): string{
        return this.run(this.speed);
    }
 }