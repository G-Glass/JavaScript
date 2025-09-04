let all = new Date()
let dia = all.getDate()
let mes = 8 //all.getMonth()
let ms = [ 'janeiro', 'fevereiro','março' , 'abril', 'maio' , 'junho' , 'julho' , 'agosto' , 'setembro' , 'outubro' , 'novembro' , 'dezembro'  ]
switch (mes) {
    case 0:
        console.log(`Janeiro`)
        break
    default :
    console.log(`A accão não foi encontrada`)
    
}
console.log(`Viva o dia ${dia} de ${mes} `)