import { numeros } from "../modulos.js";
let n_valores = 0

let maximo = Math.max(...numeros)
let minimo = Math.min(...numeros)

console.log(`O valor maximo dos numeros ${numeros} é ${maximo} e minimo é ${minimo}`)


for (let nus in numeros) {
    //n_valores.push(numeros[nus])
    n_valores = n_valores + numeros[nus]
}

console.log(`A soma dos valores ${numeros} é ${n_valores} `)