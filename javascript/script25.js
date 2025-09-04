//ARRAY/VETOR 
//PERCURSO DE ARRAYS

let num = [ 4, 3, 5, 7] //FORMADO DE ARRAY/VETOR
num[4]=8 //ADICIONA NOVO  ELEMENTO 8 NO VARIAVEL NUM SERA NUM=[4,3,5,7,8]
num.push(9) //ADICIONA O NUMERO 7 NA VARIAVEL NUM , isso será num=[4,3,5,7,8,9]
num.length // mostra o comprimento do variavel, nesse caso variavel num
num.push(1,2)
num.sort()  // ordena os elementos no variavel de forma crescente 
console.log(`O nosso vetor é ${num} e tem ${num.length} posições `)

for (let v = 0; v <= num.length ; v ++) {
    console.log(` A posição  ${v} tem ${num[v]}`)
}

//OU 

/*for (let v in num ) { //LE-SE PARA CADA VARIAVEL  V NO OU EM NUM 
    console.log(num[v])
}*/

//OU 
for(let vi in num) {
    console.log(num[vi])
}


//BUSCANDO VALORES EM VETORES/ARRAY
// CASO RETORNE -1 quer dizer que o valor não foi enconto
num.indexOf(8) //busca a posição 8 no variavel num
console.log(`O 8 esta na posição  ${num.indexOf(8)} `)