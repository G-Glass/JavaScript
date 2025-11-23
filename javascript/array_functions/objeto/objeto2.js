//OBJETOS EM JAVASCRIPT
//console.log('Funciona')
//import {numeros} from "../modulos.js"

let numeros = [12,43,6,56,45]
const soma = numeros.reduce((addi,acumular) => addi + acumular,0)
let res = document.querySelector(".recebe")
function ver() {
    res.innerHTML = `Os números recebidos são ${numeros} e a soma dos mesmos é igual a ${soma}`
}


let volte = document.querySelector(".volta")


//PRODUTOS
let arroz = document.querySelector("#arroz")
let f_milho = document.querySelector("#fmilho")
let oleo = document.querySelector("#oleo")
let batata = document.querySelector("#batata")

//PREÇOS
//USE textContent OU innerText para conversão para numero
let p_arroz = Number(document.querySelector("#arr").textContent)
let p_fmilho = Number(document.querySelector(".fam").textContent)
let p_oleo = Number(document.querySelector(".ole").textContent)
let p_batata = Number(document.querySelector(".bata").textContent)

//DESCONTOS EM PERCENTAGEM
let d_arroz = Number(document.querySelector(".arro").textContent)
let d_fmilho = Number(document.querySelector(".fam").textContent)
let d_oleo = Number(document.querySelector(".ole").textContent)
let d_batata = Number(document.querySelector(".bata").textContent)

let s = p_arroz-(d_arroz*p_arroz) / 100

function az() {
    volte.innerHTML = `Você escolheu Arroz vai pagar a  ${s} `
}