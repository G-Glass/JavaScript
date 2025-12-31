let x = [2,54,45,2,12,54,7]

for( let s = 0; s < x.length; s++) {
    console.log(s)
}

let valor1 = 12
for(let w = 0; w < valor1; w++){
    console.log(`Inicio da contagem em ${w}`)
}

let valor2 = [12,3,23,4,21,6,987,86]
for(let s of valor2) {
    console.log(`${s}`)
}

//OU 

for(let s in valor2){
    console.log(`Retorna ${valor2[s]}`)
}