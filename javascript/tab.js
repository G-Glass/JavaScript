//alert("Olá")

const { createElement } = require("react")

function cal() {
    let n1 = document.querySelector("#valor")
    let n2 = document.querySelector("#valor2")
    let resto = document.querySelector("#tudo")
    let multi = document.querySelector("#somas")
    let vezes = document.querySelector("#×")
    let v1 = Number(n1.value)
    let v2 = Number(n2.value)

    for (let q = 0 ; q <= v2 ; q++) {
        let item = document.createElement('option')
        item.text = ` ${v1} + ${q} = ${v1+q}`
        resto.appendChild(item)
        item.value = `procure${q}`


    }
    tab.innerHTML ="" // LIMPA AREA OU DADOS
        for (let q = 0 ; q <= v2 ; q++) {
        let item = document.createElement('option')
        item.text = ` ${v1} × ${q} = ${v1*q}`
        resto.appendChild(item)
        item.value = `procure${q}`
      
    }
    
    
    
    
    setTimeout(exibirProximo, 200); // ATUALIZA O NAVEGADOR A CADA 200 MILISEGUNDOS

    exibirProximo(); // inicia a contagem crescente

}