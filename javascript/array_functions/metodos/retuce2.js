import { numeros } from "../modulos.js";
let multi = 1

for (let t in numeros) {
    multi = multi * numeros[t]
}

console.log(`Amultiplicação total dos numeros ${numeros} é ${multi}`)

// OU 

const total = numeros.reduce((acumulador,numero) => acumulador*numero,1)
console.log(`A multiplicação dos numeros ${numeros} é igual a ${total} `)