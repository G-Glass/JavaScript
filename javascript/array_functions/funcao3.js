//MULTIPLOS DE 3 NUM ARRAY

let numeros_int = [1, 2, 3, 33 ,21, 45 ,5,6, 7, 13, 59 , 19]
let multiplos_tres =[]

console.log(` São ${numeros_int.length} numeros `)

/* PRIMEIRA OPÇÃO
if ( numeros_int[0] == 1 ) {
    for (let s = 0; s<=3; s++)
        console.log(` os multiplos de ${numeros_int[0]} são ${numeros_int[0]} x ${numeros_int[0]*s} = ${numeros_int[0]*s}`)
}*/

//SEGUNDA OPÇÃO

for (let t = 0 ; t < numeros_int.length; t++) {

    if (numeros_int[t] % 3 === 0) {
        multiplos_tres.push(numeros_int[t]);
    }
}
console.log(`Há  ${multiplos_tres.length} multiplos de 3 \n Que são ${multiplos_tres}  `)