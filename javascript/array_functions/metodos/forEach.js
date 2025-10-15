//METODO FOREACH
import {frutas} from '../modulos.js'


let novo = []
frutas.forEach( (u) => {
    novo.push(u)
});

console.log(`Novas frutas são ${novo}`)