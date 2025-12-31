// FUNÇÕES GERADORAS

function* lumi() {
    const nome = yield'Qual é o seu nome ?'
    const idade = yield 'Qual é a sua idade ?'
    return `Seu nome é ${nome} e sua idade é ${idade}`
}

const res = lumi()
console.log(res.next().value)
console.log(res.next().value)
console.log(res.next().value)