console.log("olá")
var a = 45 
if (a == 43) {
    console.log("parabens")
}
var divo = document.querySelector("img#i1")
divo.addEventListener("mouseout", saida)
function academy() {
   //divo.innerHTMl = "Clicou no menu"
   // divo.style.border= "2px solid red"
   var p = document.querySelector("p.para")
   p.style.display="block"
   /*if (p.style.display="block") {
    function academy() {
        var p = document.querySelector("p.para")
        p.style.display="none"
    }
   }*/
  divo.style.display="none"
  var i = document.querySelector("img#im1")
  i.style.display="block"
}
function sai() {
    var i = document.querySelector("img#im1")
    var p = document.querySelector("p.para")
    p.style.display="none"
    i.style.display="none"
    var divo = document.querySelector("img#i1")
    divo.style.display="block"
}
function saida() {
    //divo.style.border="2px solid black"
   //divo.innerHTML="Academia"
}