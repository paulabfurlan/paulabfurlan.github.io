let txtCorpo = document.getElementById("txtCorpo");
let btnEscolha1 = document.getElementById("btnEscolha1");
let btnEscolha2 = document.getElementById("btnEscolha2");
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
        let dados = pegaItem(estado, sessionStorage.getItem("escolhaEstado0"), sessionStorage.getItem("escolhaEstado1"),
        sessionStorage.getItem("escolhaEstado2"));
        
        console.log("OnLoad: " + estado);
        console.log(dados);
        if ((estado >= 0) && (estado < 3))
        {
            txtCorpo.innerText = dados[0];
            btnEscolha1.innerText = dados[1];
            btnEscolha2.innerText = dados[2];
        }

      }, 2000);
}; 

btnEscolha1.addEventListener("click", function (event) {
    event.preventDefault();
    console.log(sessionStorage.getItem("estado"));

    let estado = sessionStorage.getItem("estado");
    if (estado == 0)
    {
        sessionStorage.setItem("escolhaEstado0", 1);
        sessionStorage.setItem("estado", 1);
        window.location.reload();
    }
    else if (estado == 1)
    {
        sessionStorage.setItem("escolhaEstado1", 1);
        sessionStorage.setItem("estado", 2);
        window.location.reload();
    }
    else if (estado == 2)
    {
        sessionStorage.setItem("escolhaEstado2", 1);
        sessionStorage.setItem("estado", 3);

        let dados = pegaItem(3, sessionStorage.getItem("escolhaEstado0"), sessionStorage.getItem("escolhaEstado1"),
        sessionStorage.getItem("escolhaEstado2"));

        sessionStorage.setItem("resultado", dados[0]);
        window.location.href = "resultado.html";
    }
});

btnEscolha2.addEventListener("click", function (event) {
    event.preventDefault();
    console.log(sessionStorage.getItem("estado"));

    let estado = sessionStorage.getItem("estado");
    if (estado == 0)
    {
        sessionStorage.setItem("escolhaEstado0", 2);
        sessionStorage.setItem("estado", 1);
        window.location.reload();
    }
    else if (estado == 1)
    {
        sessionStorage.setItem("escolhaEstado1", 2);
        sessionStorage.setItem("estado", 2);
        window.location.reload();
    }
    else if (estado == 2)
    {
        sessionStorage.setItem("escolhaEstado2", 2);
        sessionStorage.setItem("estado", 3);

        let dados = pegaItem(3, sessionStorage.getItem("escolhaEstado0"), sessionStorage.getItem("escolhaEstado1"),
        sessionStorage.getItem("escolhaEstado2"));

        sessionStorage.setItem("resultado", dados[0]);
        window.location.href = "resultado.html";
    }
});

function pegaItem(estado, escolhaEstado0, escolhaEstado1, escolhaEstado2) {
    console.log("pegaItem: " + estado);

    let grupos = {
        niveis:
        [
            {
                situacao: [
                    "Situação"
                ],
                escolha1: [
                    "Escolha 1"
                ],
                escolha2: [
                    "Escolha 2"
                ]
            },
            {
                situacao: [
                    "Situação 1",
                    "Situação 2"
                ],
                escolha1: [
                    "Escolha 1_1",
                    "Escolha 2_1"
                ],
                escolha2: [
                    "Escolha 1_2",
                    "Escolha 2_2"
                ]
            },
            {
                situacao: [
                    "Situação 1_1",
                    "Situação 1_2",
                    "Situação 2_1",
                    "Situação 2_2"
                ],
                escolha1: [
                    "Escolha 1_1_1",
                    "Escolha 1_2_1",
                    "Escolha 2_1_1",
                    "Escolha 2_2_1"
                ],
                escolha2: [
                    "Escolha 1_1_2",
                    "Escolha 1_2_2",
                    "Escolha 2_1_2",
                    "Escolha 2_2_2"
                ]
            },
        ],
        resultado: [
            "Resultado 1_1_1",
            "Resultado 1_1_2",
            "Resultado 1_2_1",
            "Resultado 1_2_2",
            "Resultado 2_1_1",
            "Resultado 2_1_2",
            "Resultado 2_2_1",
            "Resultado 2_2_2"
        ]
    };

    let escolhaAnterior, escolhaAtual;
    if (estado == 1)
    {
        escolhaAnterior = 0;
        escolhaAtual = escolhaEstado0;
    }
    else if (estado == 2)
    {
        escolhaAnterior = escolhaEstado0;
        escolhaAtual = escolhaEstado1;
    }

    if (estado == 0)
    {
        return [
            grupos.niveis[estado].situacao[estado],
            grupos.niveis[estado].escolha1[estado],
            grupos.niveis[estado].escolha2[estado]
        ]
    }
    else if ((estado == 1) || (estado == 2)) 
    {
        let pos = ((escolhaAnterior - 1) * (estado - 1)) + ((escolhaAtual - 1) * estado);
        console.log("pos1e2: " + pos);

        return [
            grupos.niveis[estado].situacao[pos],
            grupos.niveis[estado].escolha1[pos],
            grupos.niveis[estado].escolha2[pos]
        ]
    }
    else if (estado == 3)
    {
        let pos = ((escolhaEstado1 - 1) * 2) + (escolhaEstado2 - 1);
        
        if (escolhaEstado0 == 2)
            pos = pos + 4;

        console.log("pos3: " + pos);

        return [
            grupos.resultado[pos]
        ]
    }
}