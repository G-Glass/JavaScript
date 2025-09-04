function valores(n1=0 , n2=0) {
    return n1*n2
}
console.log(valores(4, 1)) 

//ou 
let v = function(m) {
    return m*9
}
console.log(v(5+5))

//fatorial de um numero 5! = 5x4x3x2x1 = 120

function fatorial(n) {
    let f = 1
    for (let s = n ; s >1 ;s--)
        f*=s
    return f
}
console.log(fatorial(5))