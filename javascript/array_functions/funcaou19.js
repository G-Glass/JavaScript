import { meses } from "./modulos.js";
import { numeros } from "./modulos.js";
let comprimento = meses.length

console.log(`os meses são; ${meses}`)
if (comprimento > 10) {
    const numer = numeros.reduce((acumular, novo_numero) => acumular + novo_numero,0)
    console.log(`O valor total do comprimento é de ${numer}`)
    
}
else {
    console.log(`Não é verdade`)
    
}
