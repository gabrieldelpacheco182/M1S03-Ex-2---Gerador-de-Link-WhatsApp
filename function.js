/* let numero = document.getElementById("numero").value;
let texto = document.getElementById("texto").value; */

function gerarLink(){
let numero = document.getElementById("numero").value;
let texto = document.getElementById("texto").value;
let link = `api.whatsapp.com/send?phone=${numero}&text=${texto}`
console.log(link);

document.getElementById('link').innerHTML = `<a href="${link}">Link gerado para enviar whatsapp</a>`
}


