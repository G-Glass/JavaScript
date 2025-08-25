function soma() {
    var tx1 = document.querySelector("input#text1")
    var tx2 = document.querySelector("input#text2")
    var n1 = Number(tx1.value)
    var n2 = Number(tx2.value)
    var r = n1 + n2 
    resul.innerHTML = `A soma entre ${n1} e ${n2} é igual a ${r}`
}