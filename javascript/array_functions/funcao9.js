//FUNÇÃO

function dolar() {
    console.log('Js')
}
dolar()

for( let i = 0; i < 10; i++) {
    dolar()
}

//FUNÇÃO QUE RETORNA VALOR

function loop() {
    return 'Jas'
}
console.log(loop())

//OU 

function num() {
    let n1 = 48
    let n2 = 32 
    const f = n1*n2

    return f
}
console.log(num())

function zero() {
    let z1 = 32
    if (z1%2 == 0) {
        return 'Par'
    }
    else {
        return 'impar'
    }
}
let tudo = zero()
console.log(tudo)