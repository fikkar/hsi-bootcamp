/*
3. Buatlah fungsi bernama penumlahanBilangan dengan ketentuan berikut:
 - Menerima dua buah argument a yang merupakan array dari sebeluh number dan b
hanya menerima kata-kata ganjil dan genap
 - return dari function adalah hasil dari penjumlahan nilai2 tergantung b nya
adalah ganjil / genap

 contoh:
 perjumlahBilangan([1,2,3], "ganjil") //4
 perjumlahBilangan([1,2,3,4,5,6,7], "genap") //12
 perjumlahBilangan([1,2,3,4,5], "ganjil") // 9
 perjumlahBilangan([1,2,3,4,5,6,7], "ganj") //error
 perjumlahBilangan([1,2,3,4,5,6,7], "positif") //error
*/

function perjumlahBilangan(a : Array<number>, b : string){
    let isGanjil: boolean; 
    let totalJumlah: number = 0;

    if (b === "ganjil"){
        isGanjil = true;
    } else if (b === "genap"){
        isGanjil = false;
    } else {
        return "error";
    }
    

    for (let item of a){
        // console.log(item);
        // console.log(isGanjil);
        let tempNumber:number = 0;
        if (isGanjil) {
            tempNumber = item % 2 !== 0 ? item : 0;
        } else {
            tempNumber = item % 2 == 0 ? item : 0;
        }
        totalJumlah = totalJumlah + tempNumber;
    }
    return totalJumlah.toString();
    
} 

console.log(perjumlahBilangan([4, 5, 6], "ganjil")); //5
console.log(perjumlahBilangan([1,2,3], "ganjil")); //4
console.log(perjumlahBilangan([1,2,3,4,5,6,7], "genap")); //12
console.log(perjumlahBilangan([1,2,3,4,5], "ganjil")); // 9
console.log(perjumlahBilangan([1,2,3,4,5,6,7], "ganj")); //error
console.log(perjumlahBilangan([1,2,3,4,5,6,7], "positif")); //error