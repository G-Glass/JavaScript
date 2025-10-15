import { numeros } from "../modulos.js";
let numero = 0

let soma = numeros.reduce((acumulador,numero) => acumulador + numero,0 / numeros.length) 

console.log(`A soma dos valores ${numeros} é ${soma} e a media é ${soma / numeros.length} `)

//OU

for (let v in numeros) {
    numero = numero+numeros[v]
}
let t = numero / numeros.length
console.log(`O valor total dos ${numeros} é ${numero} e a media é ${t}`)
