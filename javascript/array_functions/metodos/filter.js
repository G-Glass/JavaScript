import { numeros } from "../modulos.js";

const n_pares = numeros.filter(numero => numero % 3 === 0)
/*const n_pares = []
for (let p = 0; p < numeros.length ; p++ ) {
    if ( numeros[p] % 2 === 0)  {
        n_pares.push(numeros[p])
    }
}*/
console.log(`Os numeros pares dos ${numeros} são ${n_pares} `)