//FUNCAO ANONIMA

const anonima = function(...nr){
    let res = 0
    for (let s of nr) {
        res+=s
    }
    return res
}

console.log(`Os valores anonimos são ${anonima(32,3,3,2)}`)

//FUNCAO CONSTRUDOR

const g = new Function('v1','v2','return v1+v2')  //FUNÇÃO CONSTRUDOR
console.log(g(12,8))