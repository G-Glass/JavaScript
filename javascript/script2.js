/*console.log("Olá, mundo!")
var nome = window.prompt("Qual é o seu nome?")
window.alert("Olá," + nome)*/
var numero = window.prompt("Digite um número")
var numero2 = window.prompt("Digite o outro número")
var soma = Number.parseInt(numero) + Number.parseInt(numero2)
window.alert("A soma é " + soma)

//ou

var n1 = Number.parseFloat(prompt("Digite um numero"))
var n2 = Number.parseFloat(prompt("Digite outrp numero"))
var s = n1 + n2 
alert("A soma é :" + s)

//ou

var a1 = prompt("Digite um numero")
var a2 = prompt("Digite outro numero")
var r = Number(a1) + Number(a2)
alert("A soma é " + r)