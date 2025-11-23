let resposta = document.querySelector(".retorna")
let valores = Number(document.querySelector(".numer").textContent)
let mas = document.querySelector(".mais").textContent

function calcular() {
    resposta.innerHTML = `${valores}  `
}

function adicionar() {
    resposta.innerHTML += `${mas}`
}