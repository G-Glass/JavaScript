/*console.log("Olá, mundo")*/
window.document.writeln("Olá mundo!")

//Selecionando por Name
var p1 = document.getElementsByTagName("p")[0]
document.writeln("Conhecendo o " + p1.innerText)
p1.style.backgroundColor="white"
p1.style.padding="10px"

//selecionando por ID#
var h = document.getElementById("hp")
document.writeln(h.innerHTML)
h.style.marginRight="10px"
h.style.backgroundColor="black"
h.style.color="white"

var bod = window.document.body
bod.style.backgroundColor="green"

//Selecionando por class.
var x = window.document.getElementsByClassName("mo")
document.writeln(x.innerHTML)
x.style.color="white"

//Selecionando por selector
var w = document.querySelector("h2#ph")
w.style.border="2px dotted white"