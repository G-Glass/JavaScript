import { meses } from "./modulos.js";
let all = new Date()
let dia = all.getDate()
let ano = all.getFullYear()
let mes = meses[all.getMonth()]



console.log(`Hoje é dia ${dia} de ${mes} do ano ${ano}`)