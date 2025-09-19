//EXERCICIOS DE ESTRUTURAS DE REPETIÇÃO
function tabuata() {
    let numero = document.querySelector("#valor")
    let resulta = document.querySelector("#tab")
    let outronum = document.querySelector("#valor2")
    let n = Number(numero.value)
    let n2 = Number(outronum.value)

    if (n.length == 0) {
        alert('Digite um numero')
    }
    else {
        let c = 0
        tab.innerHTML ="" // LIMPA AREA OU DADOS ANTERIORES
        while ( c <= n2 ) {
            let item = document.createElement('option') //CRIA UM NOVO ELEMENTO DENTRO DO SELECT
            item.text = `${n} × ${c} = ${n*c}`
            item.value =`tab${c}` // VALUE DE OPTIoNS
            resulta.appendChild(item) //mostra o elemento item na tag select
            c++
        }setTimeout(exibirProximo, 200); 
    }
    exibirProximo(); // Inicia a primeira exibição

}