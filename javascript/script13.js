function ver() {
    var va = document.querySelector("input.valor")
    var r = document.querySelector("p.resu")
    var x = Number(va.value)
    r.innerHTML=`A sua idade é de ${x} anosa`
    if (x >= 20) {
        r.innerHTML+=`<br>Você é maior de idade`
    }
}