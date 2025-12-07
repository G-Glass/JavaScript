//FUNÇÃO DENTRO DA FUNÇÃO


const somar = vale => {
        let res = 0
        for( k of vale) 
            res+=k

        return res
    }
const soma = (...valores) => {
    return somar(valores)
}

console.log(soma(12,42,6))