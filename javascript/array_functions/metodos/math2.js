import { frutas } from "../modulos.js";
import { numeros } from "../modulos.js";

let aleatorio = Math.random(...numeros)
let maximo = Math.max(...numeros)
let minimo = Math.min(...numeros)

let escolha = Math.random(...frutas)
//let mai = Math.floor(...escolha)

console.log(`Dos numeros ${numeros}, o numero escolhido foi ${aleatorio}; o maior valor é ${maximo} e menor é ${minimo} `)
console.log(`Entre as frutas${frutas}, foi escolhido ${escolha}`)

if (aleatorio === escolha) {

    console.log(`Acao concluida`)
}else {
    console.log(`Os valores não correspondem`)
}

/*for (let g in frutas) {

}*/