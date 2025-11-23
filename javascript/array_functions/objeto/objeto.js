let compra = document.querySelector("#logo")
let meno = document.querySelector("#menu")
let minhaconta = document.querySelector(".conta")
let principal = document.querySelector(".container")
let final = document.querySelector(".rotape")
let fechar = document.querySelector(".fechar")
let categoria = document.querySelector(".menubar")

let close_menu = document.querySelector("#fechar")

function ver() {
    //alert("funcionando")
    minhaconta.style.display="block"
    principal.style.display="none"
    final.style.display="none"
}

function fecha() {
    minhaconta.style.display="none"
    principal.style.display=""
    final.style.display=""
}

function mostre() {
    menu.style.display="none"
    close_menu.style.display="block"
    categoria.style.display="block"
    principal.style.display="none"
    final.style.display="none"
}

function fecharmenu() {
    close_menu.style.display="none"
    menu.style.display="block"
    categoria.style.display="none"
    principal.style.display=""
    final.style.display=""
}