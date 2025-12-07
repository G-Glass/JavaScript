import { objs } from "../modulos.js";
let mese = objs.meses

let m = (mese.length >= 7 ? 'Valido' : 'Invalido' )
let mes = mese[new Date().getMonth()]

console.log(`A opção é valida do mês de ${mes}`)