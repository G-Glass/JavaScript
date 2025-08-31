var tempo = 2
function cl() {
    var iput = document.querySelector("input#nomear").value
    var resu = document.querySelector("p.resulta")
    var image1 = document.querySelector("img.img1")
    var image2 = document.querySelector("img.img2")
    resu.innerHTML =`Olá ${iput}, tenha `
    if (tempo >= 1 && tempo <=18) {
        resu.innerHTML +=`um bom dia!`
        image1.style.display="block"
    }else {
        if (tempo >=18.1 && tempo <= 23.9) {
            resu.innerHTML +=`uma boa noite!`
            image2.style.display="block"
        }
        else {
            resu.innerHTML=`Olá ${iput}, voce é sempre bem-vindo.`
        }
    }
}