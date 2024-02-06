/*
2. Buatlah fungsi bernama power dengan ketentuan berikut:
 - Menerima dua buah argumen number, a dan b.
 - Mengembalikan nilai dari hasil perkalian a * a sebanyak b (fungsi kuadrat).

 contoh:
 power(7, 3) // 343
 power(3, 3) // 27
 power(4, 0.5) // 2
*/

function power(a:number, b:number):number {
    return a ** b;
}

console.log(power(7, 3));
console.log(power(3, 3));
console.log(power(4, 0.5));
