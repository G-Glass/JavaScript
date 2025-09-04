import { numeros } from "./modulos.js"

function add() {
    const valor = document.querySelector("#valor1").value
    const responde = document.querySelector(".saida")
    
    
    responde.innerHTML=`Saiu o valor ${valor} \n Foi adicionado ${recebe}`
}
const recebe = []
const tudo = numeros.map((recebe) => recebe)
