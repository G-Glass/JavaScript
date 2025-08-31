function clicar() {
    var dia = 0
    var s = document.querySelector("input.nomear").value
    var p = document.querySelector("p.sai")
    p.innerText = ` Olá, ${s} tenha um bom`

    switch (dia) {
        case 0 :
            p.innerHTML +=` Domingo `
            break
        default:
            p.innerHTML +=`Volte sempre`
            break
    }
}