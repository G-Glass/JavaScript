function calcular() {
    var valor1 = document.querySelector("input#valores")
    var valor2 = document.querySelector("input#valores2")
    var multiplo = document.querySelector("#multi")
    var resto = document.querySelector("#soma")
    /*var soma = Number(valor1.value) * Number(valor2.value)
    resto.innerHTML = `${valor1.value} × ${valor2.value} = ${soma}`*/
    let v1 = Number(valor1.value)
    let v2 = Number(valor2.value)
    let s = v1 * v2
    
    resto.innerHTML = `${v1} × ${v2} = ${s}`


    exibirProximo();
}
function verificador() {
    var valor = document.querySelector("#ano")
    var responde = document.querySelector(".responde")
    var ano = new Date()
    var idade = ano.getFullYear()
    var calculo = idade - Number(valor.value)
    responde.innerHTML = ` Voce nasceu em ${valor.value} e hoje tem ${calculo} anos `

}