//NUMEROS PARES E IMPAR

let par_impar = [3,4,6,7,8,9,12,55,70]
let par = []

for ( let s = 0; s < par_impar.length; s++) {
    if (par_impar[s] % 2 === 0) {
        par.push(par_impar[s])
    }
}
console.log(`Os numeros pares encontrados no ${par_impar} são ${par} `)