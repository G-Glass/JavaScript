function* contator() {
    for (let s = 0; s <= 12 ; s++) {
        console.log(s)
    }
}

const conta = contator()

console.log(conta.next().value)