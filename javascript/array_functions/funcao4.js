//COPIANDO UM VETOR PARA O OUTRO

/*let vetor_A = [2 , 4 , 6, 7, 9]
let vetor_B = []

for(let r = 0; r < vetor_A.length;r++) {
    vetor_B.push(vetor_A[r])
}*/

//OU

let vetor_A = [2 , 4 , 6, 7, 9]
let vetor_B = vetor_A.slice()
console.log(`Os valores do Vetor_A são ${vetor_A} e do Vetor_B ${vetor_B} `)