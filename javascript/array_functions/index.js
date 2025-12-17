let valor = document.querySelector("#valor1")
let resposta = document.querySelector("#recebe")

let v1 = Number(valor.textContent)
let r = resposta

function analise(v) {
    let m = 55
    let res = v1 + m
    return res
    

    
}
analise(77)
r.innerHTML = ` Os valores são dois ${analise}`