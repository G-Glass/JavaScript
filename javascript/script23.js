// ASSIMILAÇÃO DE REPETIÇÕES for,do,while
/*console.log(`Inicio da operação`)
for (var n = 5; n <= 22; n+=2) {
    console.log(`Adicione ${n}`)
}
console.log(`Fim da operação`)*/

/*function ver() {
    let inicio = document.querySelector("input.one")
    let passo = document.querySelector("input.two")
    let fim = document.querySelector("input.tree")
    let resto = document.querySelector("p.resulta")
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('Erro preencha os espaços')
    }else {
        let i = Number(inicio.value)
        let p = Number(passo.value)
        let f = Number(fim.value)
        let resultado = "Contando: ";
        
        for ( var n = i ; n <= f ; n+=p   ) {
            //console.log(`Resultou ${n}`)
            resto.innerHTML += `${n} \u{1F609}`
        }
        resto.innerHTML= resultado;
    }
        
}*/

function ver() {
    let inicio = document.querySelector("input.one");
    let passo = document.querySelector("input.two");
    let fim = document.querySelector("input.tree");
    let resto = document.querySelector("p.resulta");
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('Erro: preencha todos os espaços');
    } else {
        let i = Number(inicio.value);
        let p = Number(passo.value);
        let f = Number(fim.value);
        let n = i;
        
        // Limpa o conteúdo antes de começar
        resto.innerHTML = "Contando: "; 
        
        function exibirProximo() {
            //Contagem crescente
            if (n <= f) {
                // Adiciona o próximo número ao conteúdo existente
                resto.innerHTML += `${n} \u{1F600} `; 
                n += p;
                
                // Chama a próxima exibição com um pequeno atraso (ex: 200 milissegundos)
                setTimeout(exibirProximo, 200); 

                
                
            }
        
            //Contagem regressiva
            else { for(let n = i ; n >= f; n -= p ) {
                    resto.innerHTML += `${n} \u{1f614} `
                }

                //Anuncia o fim da contagem
                if ( n > p) {

                    resto.innerHTML += `Fim da contagem`
                }
            }

        }
        
        
        exibirProximo(); // Inicia a primeira exibição
    }
}