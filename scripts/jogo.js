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
        console.log("Waited for 1 seconds");

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

      }, 1000);
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
                    "Paula é uma moça esforçada, que trabalha como Auxiliar Administrativa numa Escola Municipal de dia e faz faculdade à noite. Um belo dia ela teria uma prova na faculdade às 19:00, então ela estava muito nervosa, pois com o trânsito no deslocamento do trabalho até a faculdade, ela poderia se atrasar. O que ela poderia fazer?"
                ],
                escolha1: [
                    "Falar com a chefe e pedir para sair mais cedo nesse dia."
                ],
                escolha2: [
                    "Contar com a sorte e talvez se atrasar para a prova"
                ]
            },
            {
                situacao: [
                    "No dia anterior à prova, ela falou com a chefa dela que precisaria sair mais cedo no dia seguinte para não se atrasar para a prova, mas prometeu que chegaria mais cedo para poder compensar. Só que na noite anterior à prova ela ficou estudante até muito tarde e acabou perdendo a hora de acordar e chegou atrasada no trabalho. A chefa dela nesse dia teve uma reunião na Secretaria e só chegou na escola quase na hora do almoço. Nesse caso, a Paula deve avisar que se atrasou?",
                    "Na noite anterior à prova, a Paula ficou estudando até tarde e acabou perdendo a hora no dia seguinte. Com isso ela acabou chegando atrasada no trabalho. Nesse dia ela precisava entregar um relatório muito importante até 18:00. Além disso, a chefa dela veio da Secretaria com mais trabalho para ela fazer. O que ela pode fazer para não se atrasar para a prova?"
                ],
                escolha1: [
                    "Fala que chegou cedo e altera o livro de ponto com a hora que deveria ter chegado.",
                    "Fazer logo o relatório que é mais urgente e pedir para entregar os outros trabalhos no dia seguinte."
                ],
                escolha2: [
                    "Confessa para a chefa que se atrasou e promete compensar em um outro dia essas horas.",
                    "Não negociar com a chefa e dar o sangue para fazer tudo a tempo de sair para ir fazer a prova."
                ]
            },
            {
                situacao: [
                    "Justo nesse dia, houve uma tentativa de entrega da Merenda da Escola e para liberar os alimentos, o funcionário da Secretaria de Educação precisava da assinatura de alguém do setor Administrativo. Na ausência de sua chefa, quem deve assinar esse documento é a Paula. Só que na hora que eles passaram, nem uma das duas estava presente. Eles passam novamente a tarde e falam com a chefa de Paula, que então descobre que Paula mentiu para ela. O que Paula deve fazer?",
                    "A chefa da Paula já foi estudante também e sabe bem como a pessoa fica na véspera de uma prova. Ela falou que não tem problema o atraso, contanto que a Paula entregue os documentos que ela precisava entregar até o dia seguinte. Mais tarde nesse dia, houve uma queda de energia na escola e a Paula acabou atrasando um relatório que era para ser entregue até 18:00, mas e a prova, como fica?",
                    "A chefa concordou que ela poderia entregar as outras coisas no dia seguinte, contanto que ela terminasse o relatório mais urgente e até falou que se ela entregasse antes das 18:00, a Paula poderia sair mais cedo para não se atrasar para a prova. Só que justo nesse dia houve uma queda de energia na escola, o que atrasou a Paula e ela viu que terminaria o relatório muito em cima da hora. O que fazer?",
                    "Justo nesse dia, houve uma queda de energia na escola. Juntando isso, ao fato de que a Paula ficou muito tempo em reunião com a chefa sobre as novas demandas, a Paula viu que o relatório ia sair só perto das 18:00 mesmo. E agora, o que fazer?"
                ],
                escolha1: [
                    "Falar a verdade e se desculpar por ter mentido sobre o horário de chegada.",
                    "Ficar até às 18:00 e terminar o relatório.",
                    "Ficar até às 18:00 e terminar o relatório.",
                    "Ficar até às 18:00 e terminar o relatório."
                ],
                escolha2: [
                    "Continuar firme na mentira e dizer que quem está mentindo são os funcionários da Secretaria, que na verdade não passaram lá de manhã e querem tirar o deles da reta.",
                    "Falar que não vai poder entregar o relatório, se não vai acabar se atrasando para a prova.",
                    "Falar que não vai poder entregar o relatório, se não vai acabar se atrasando para a prova.",
                    "Sair de fininho sem a chefa ver e não entregar o relatório, rezando para que ainda consiga finaliza-lo na manhã do dia seguinte."
                ]
            },
        ],
        resultado: [
            "A chefa de Paula ficou bem chateada com a mentira que ela contou e deu a Paula uma advertência tanto por ter mentido, quanto por ter adulterado o livro de ponto. Essa advertência foi colocada no arquivo da Paula e poderá impactar futuras promoções e pedidos de licença no futuro. Além disso, a Paula ainda levou um puxão de orelha da chefa, que ficou chateada e disse que entendia que ela tivesse perdido a hora por estar estudando.",
            "A Paula só esqueceu que na entrada da escola tem câmeras. Como a discussão ficou acalorada entre a chefa e os funcionários, ela então pegou as imagens da câmera e descobriram quem estava mentindo. Como a Paula mentiu, adulterou o ponto e ainda tentou prejudicar outras pessoas, a chefa dela não viu outra opção, senão demitir a Paula, pois ela perdeu a confiança em seu trabalho.",
            "Vendo toda a dedicação da Paula, mesmo num dia estressante como aquele, a chefa dela ficou muito feliz e, em agradecimento pelo esforço,resolveu pagar um Uber Moto para a Paula para que ela não se atrasasse para a prova.",
            "A Paula pegou dois ônibus lotados e muito trânsito, o que fez ela acabar chegando um pouco atrasada na prova. O relatório que não foi entregue era necessário para ativar o Bolsa Família dos alunos da escola naquele mês. Por causa do atraso, o Bolsa Família ficou suspenso por 15 dias, e os pais dos alunos vieram em peso na escola reclamar.",
            "Como a Paula falou para a chefa dela sobre a prova e como ela estava preocupada em se atrasar, a chefa dela ficou compadecida da situação. Além disso, o relatório ficou muito bom, então a chefa dela resolveu pagar um Uber Moto para que a Paula chegasse a tempo de fazer a prova.",
            "A Paula pegou dois ônibus lotados e muito trânsito, o que fez ela acabar chegando um pouco atrasada na prova. O relatório que não foi entregue era necessário para ativar o Bolsa Família dos alunos da escola naquele mês. Por causa do atraso, o Bolsa Família ficou suspenso por 15 dias, e os pais dos alunos vieram em peso na escola reclamar.",
            "A Paula conseguiu terminar o relatório já era 17:55. Quando ela falou para a chefa dela que tinha uma prova 19:00 e teria que correr, a chefa dela falou para ela que numa próxima elas poderiam ter negociado para ela sair mais cedo. A Paula então achou melhor pegar um Uber Moto para chegar na prova a tempo. No dia seguinte, a chefa elogiou muito o relatório da Paula e sua dedicação e resolveu reembolsar o valor do Uber Moto.",
            "A Paula correu para a faculdade, porém nesse dia tinha chovido e até por isso caiu a energia. Com isso o trânsito estava bem pior do que o normal. A Paula pegou dois ônibus lotados e acabou se atrasando muito para a prova. Além disso, a chefa descobriu que o relatório não foi entregue da pior maneira possível, pois o Bolsa Família de todos os alunos ficou suspenso por 15 dias, já que dependia desse relatório ser enviado no tempo certo. Os pais queriam sangue nos dias seguintes."
        ]
    }; 

    /*let grupos = {
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
    }; */

    if (estado == 0)
    {
        return [
            grupos.niveis[estado].situacao[estado],
            grupos.niveis[estado].escolha1[estado],
            grupos.niveis[estado].escolha2[estado]
        ]
    }
    else if (estado == 1)
    {
        let pos = escolhaEstado0 - 1;

        return [
            grupos.niveis[estado].situacao[pos],
            grupos.niveis[estado].escolha1[pos],
            grupos.niveis[estado].escolha2[pos]
        ]
    }
    else if (estado == 2)
    {
        let pos = ((escolhaEstado0 - 1) * 2) + (escolhaEstado1 - 1);

        return [
            grupos.niveis[estado].situacao[pos],
            grupos.niveis[estado].escolha1[pos],
            grupos.niveis[estado].escolha2[pos]
        ]
    }
    else if (estado == 3)
    {
        let pos = ((escolhaEstado0 - 1) * 4) + ((escolhaEstado1 - 1) * 2) + (escolhaEstado2 - 1);
        
        console.log("pos3: " + pos);

        return [
            grupos.resultado[pos]
        ]
    }
}