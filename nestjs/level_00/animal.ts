/*
4. Buatlah class bernama Animal dengan ketentuan:
 - Memiliki properti:
 - name: string
 - age: int
 - isMammal: boolean
 - Memiliki constructor untuk menginisialisasi properti:
 - name
 - age
 - isMammal
*/

export class Animal {
    name: string;
    age: number;
    isMammal: boolean;

    constructor(name: string, age: number, isMammal: boolean){
        this.name = name;
        this.age = age;
        this.isMammal = isMammal;
    }

}

// let animal = new Animal("harimau", 20, false);
// console.log(animal.age);