const senha = document.querySelector("#dsenha").value
const conf_senha  = document.querySelector("#xdsenha").value
const e_mail = document.querySelector("#gmail")
const conf_email = document.querySelector("#xgmail")
const res = document.querySelector(".responde")
const ret = document.querySelector(".retorno")


if (senha == conf_senha) {
    res.style.display="block"
}
else {
    res.style.display="none"
}
