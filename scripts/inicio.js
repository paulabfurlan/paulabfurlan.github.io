let cbGrupos = document.getElementById("grupos");
let txtGrupo = document.getElementById("txtGrupo");
let btnJogar = document.getElementById("btnJogar");
let txtCorpo = document.getElementById("txtCorpo1");
let loader = document.getElementById("loader");
let body = document.getElementsByTagName("body")[0];
let idForm = document.getElementById("idForm");

window.onload = () => {
  txtGrupo.innerText = "Grupo 1";
  txtCorpo.innerText = "Será que o Grupo 1 está preparado para o desafio?";
  cbGrupos.value = "1";
  sessionStorage.setItem("grupo", 1);

  loader.style.visibility = "hidden";
  body.style.opacity = "1";
  idForm.style.visibility = "visible"
};

cbGrupos.addEventListener("click", function (event) {
  let grupos = {
    nomes: [
      "Grupo 1",
      "Grupo 2"
    ],
    textos: [
      "Será que o Grupo 1 está preparado para o desafio?",
      "Será que o Grupo 2 está preparado para o desafio?"
    ]
  }
  txtGrupo.innerText = grupos.nomes[cbGrupos.value - 1];
  txtCorpo.innerText = grupos.textos[cbGrupos.value - 1];
  sessionStorage.setItem("grupo", cbGrupos.value);
});

btnJogar.addEventListener("click", function (event) {
  event.preventDefault();
  sessionStorage.setItem("estado", 0);
  sessionStorage.setItem("escolhaEstado0", 0);
  sessionStorage.setItem("escolhaEstado1", 0);
  sessionStorage.setItem("escolhaEstado2", 0);
  window.location.href = "jogo.html";
});
