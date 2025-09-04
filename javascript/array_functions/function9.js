import { numeros } from "./modulos.js";

let i = 3
let s = 8
let a =  function num(e,r) {

    const nu = numeros.reduce((adiciona,numer) => adiciona+numer,0)
    return nu+(e+r)
    
}
let x = a(i,s)
console.log(`O resultado é ${x}`) 