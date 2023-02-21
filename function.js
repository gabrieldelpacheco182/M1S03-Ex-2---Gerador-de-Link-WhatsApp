/* let numero = document.getElementById("numero").value;
let texto = document.getElementById("texto").value; */

function gerarLink() {
  let numero = document.getElementById("numero").value;
  let texto = document.getElementById("texto").value;
  let link = `https://wa.me/send?phone=${numero}&text=${texto}`;

  /*innerHTML pegar tag chama atrasves do id (''), e substituir por um nova tag `<a>`*/
  document.getElementById("urlFinal").innerHTML = `<a href="${link}" target="_blank">Abra aqui o whatsapp</a>`;
}
