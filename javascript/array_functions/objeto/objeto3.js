import {meses, numeros} from '../modulos.js'

let all = new Date()
let mes = meses[all.getMonth()]
 console.log(mes)

 let obj = {
    valores: [3,1,5,12,56,1,31],
    mese: ['Jan','Fev','Mar','Abr','Mac','Jun','Jul']
 }
 let retorno = obj.mese[obj.valores]
 console.log(`Temos os seguintes valores ${retorno}`)