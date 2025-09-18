let cbGrupos = document.getElementById("grupos");
let txtGrupo = document.getElementById("txtGrupo");
let btnJogar = document.getElementById("btnJogar");
let txtCorpo = document.getElementById("txtCorpo");

window.onload = () => {
  txtGrupo.innerText = "Grupo 1";
  txtCorpo.innerText = "Texto 1";
  cbGrupos.value = "1";
};

cbGrupos.addEventListener("click", function (event) {
  let grupos = {
    nomes: [
      "Grupo 1",
      "Grupo 2",
      "Grupo 3",
      "Grupo 4"
    ],
    textos: [
      "Texto 1",
      "Texto 2",
      "Texto 3",
      "Texto 4"
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
