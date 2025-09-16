function calcular() {
    var valor1 = document.querySelector("input#valores")
    var valor2 = document.querySelector("input#valores2")
    var resto = document.querySelector("#soma")
    var soma = Number(valor1.value) + Number(valor2.value)
    resto.innerText = ` A soma entre ${valor1.value} e ${valor2.value} é igual a ${soma}`
}
function verificador() {
    var valor = document.querySelector("#ano")
    var responde = document.querySelector(".responde")
    var ano = new Date()
    var idade = ano.getFullYear()
    var calculo = idade - Number(valor.value)
    responde.innerHTML = ` Voce nasceu em ${valor.value} e hoje tem ${calculo} anos `

    /*if (idade == 2025) {
        responde.innerHTML =+ `Estamos em ${idade.value}`
    }*/
}