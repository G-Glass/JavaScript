//alert('Olá')
let valor = document.querySelector("#valor")
let selet = document.querySelector("#acao")
let item = document.createElement('option')
let all = document.querySelector(".tudo")
let v = Number(valor.value)

if (selet.value == 'add') {
    add()
} else if (selet.value == 'exibi') {
    exibi()
} else {
    alert('Escolha uma ação')
}
function add() {
    item.text = `Adicionado ${valor}`
    valor.appendChild(item)
    item.value = `procure${q}`
}
function exibi() {
    all.innerHTML+=`Os Valores são  ${v}`
}