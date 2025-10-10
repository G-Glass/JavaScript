//ARRAYS OU VETORES
console.log("Array 2")
let coisas = ['Manga', 12 ,'Mochila', 'Sapatos' , 90]
//console.log(` Temos ${coisas.indexOf(12)} `)
//console.log(` Temos ${coisas.length} elementos, que são ${coisas} `)
let all = new Date()
let dia = all.getDay()
let mes = all.getMonth()
let ano = all.getFullYear()
let ms = ['J','F','M','A','M','JU','JL','AG','S','O','N','D']
let s = ms.indexOf('S')
s = 'Setembro'

/*if (ms.indexOf('S') == 8) {

    console.log(` Hojé é dia ${dia} do mês de ${s} do ano ${ano} `)
}else {
    console.log(`Valor não encontrado `)
}*/
/*for (cos in ms) {
    console.log(` Temos ${cos} na posição ${ms[cos]} `)

}*/
if (  mes == ms.indexOf('S') ) {
    console.log(` ${ms[8]} `)
}else {
    console.log(` Valor não encontrado `)
}


/*if (ms.indexOf(s)) {
    console.log(` Mês de Setembro `)
}*/