function calcular() {
    var valor1 = document.querySelector("input#valores")
    var valor2 = document.querySelector("input#valores2")
    var multiplo = document.querySelector("#multi")
    var resto = document.querySelector("#soma")
    var soma = Number(valor1.value) * Number(valor2.value)
    //resto.innerText = ` A soma entre ${valor1.value} e ${valor2.value} é igual a ${soma}`
    //resto.innerHTML = `${valor1.value} × ${valor2.value} = ${soma}`
    //for (let n = valor1.value; n <= soma; n*=valor2.value) {
    let n = Number(valor1.value)
    while (n <= valor1 * valor2) {
        resto.innerHTML += `${n} × ${valor2.value} = ${n * valor2.value}<br>`
        n *= valor2
    }
    
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