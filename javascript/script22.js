//ASSIMILAÇÃO DE REPEDIÇÕES for,do,while
var tudo = new Date()
var min = tudo.getMinutes()
var hora = tudo.getHours()
var dia = tudo.getDay()
var mes = tudo.getMonth()
var ano = tudo.getFullYear()
var temporeal = tudo.getUTCMinutes()
var segundoreal = tudo.getUTCSeconds()
var segundo = tudo.getSeconds()
var real = tudo.setTime()
console.log(`Hoje é dia ${dia} do mes de ${mes} do ano de ${ano}, ${hora} Horas, ${min} minutos e ${segundo} segundos. `)

var tempo = document.querySelector(".tempo")
var time = document.querySelector(".time")
var volta = document.querySelector(".volta")
time.innerHTML=`${hora}:${min}:${segundo}`
tempo.innerHTML=`${hora} horas ${temporeal} minutos e ${segundoreal} segundos`



/*for ( var segundo = 0; segundo <= 59; segundo++ ) {
    var whil = document.querySelector(".while")
    whil.innerHTML =`${segundo}`
}*/