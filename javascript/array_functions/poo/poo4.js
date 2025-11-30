//Relogio


const meses = ['JAN','FEV','MAR','ABR','MAI','JUN','JUL','AGO','SET','OUT','Novembro','DEZ']

function AtualizarRelogio() {
    const all = new Date();
    let horas = all.getHours();
    let minutos = all.getMinutes();
    let segundos = all.getSeconds();

    let dia = all.getDate();
    let mes = meses[all.getMonth()];
    let ano = all.getFullYear();
    
    const dataDia = `${dia} de ${mes} de ${ano}`
    document.querySelector(".data").textContent = dataDia;

    const tempoString = `${horas}:${minutos}:${segundos}`;
    document.querySelector(".relogio").textContent = tempoString;
}
setInterval(AtualizarRelogio,1000);