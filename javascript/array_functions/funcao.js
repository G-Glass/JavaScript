//CALCULANDO A SOMA DE UM ARRAY E SUA MEDIA

let valores = [3,4,55,6,77,21,11]
let media = 0
for (let s = 0; s < valores.length; s++) {
    media += valores[s]
    r = media / valores.length
}
console.log(`A soma dos valores em ${valores} é ${media} e sua media é ${r}`)