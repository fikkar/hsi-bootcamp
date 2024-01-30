/*
    1. Buatlah fungsi bernama minimal dengan ketentuan berikut:
    - Menerima dua buah argumen number, a dan b.
    - Mengembalikan nilai terkecil antara a atau b.
    - Bila nilai keduanya sama, maka kembalikan dengan nilai a

    contoh:
    minimal(1, 4) // 1
    minimal(3, 2) // 2
    minimal(3, 3) // 3
*/
function mininmal(a: number, b: number){
    return a <= b? a : b;
}

console.log (mininmal(1,4));
console.log (mininmal(3,2));
console.log (mininmal(3,3));