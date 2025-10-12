//console.log(` O dia de hoje  é ${dia} do mês de ${mes} `)


function meses(mesatual) {
    let all = new Date()
    let dia = all.getDate()
    let mes = all.getMonth()
    let ano = all.getFullYear()

    if ( mesatual <= dia ) {
        console.log(` Valido `)
    }
    return   mesatual*dia
    
}
console.log(` O retorno da função é ${meses(10)} `)
