console.log("Ola")
function calcular() {
   var ca = document.querySelector("input.carr")
   var resu = document.querySelector("div.resul")
   var velo = Number(ca.value)
   resu.innerHTML= ` A sua velocidade é de ${velo}km/h `

   if (velo >= 14) {
    resu.innerHTML += ` Voce foi multado `
   }
   else {
    resu.innerHTML += ` tenha uma boa viagem `
   }
}