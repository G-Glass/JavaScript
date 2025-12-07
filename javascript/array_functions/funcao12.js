//PARAMETROS REST

function soma(...valores) { //PARAMETRO REST
    let r = valores.length
    let ret = 0
    for (let i = 0;i<r; i++) {
        ret+=valores[i]
    }
    let d = ret%r
    return d
}
/*
for (let v of valores) {
ret+=v
}
 */

let tudo = soma(12,32,4,5,65)
console.log(`${tudo}`)