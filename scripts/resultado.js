let txtCorpo = document.getElementById("txtCorpo");
let btnRecomecar = document.getElementById("btnRecomecar");
let loader = document.getElementById("loader");
let body = document.getElementsByTagName("body")[0];
let idForm = document.getElementById("idForm");

window.onload = () => {    
    loader.style.visibility = "visible";
    body.style.opacity = "0.5";
    idForm.style.visibility = "hidden"

    setTimeout(() => {
        console.log("Waited for 2 seconds");

        loader.style.visibility = "hidden";
        body.style.opacity = "1";
        idForm.style.visibility = "visible"

        let estado = sessionStorage.getItem("estado");
        let dados = sessionStorage.getItem("resultado");
        
        console.log("OnLoad: " + estado);
        console.log(dados);
        if (estado == 3)
            txtCorpo.innerText = dados;

    }, 2000);
};

btnRecomecar.addEventListener("click", function (event) {
    event.preventDefault();
    sessionStorage.setItem("estado", 0);
    sessionStorage.setItem("escolhaEstado0", 0);
    sessionStorage.setItem("escolhaEstado1", 0);
    sessionStorage.setItem("escolhaEstado2", 0);
    window.location.href = "index.html";
  });