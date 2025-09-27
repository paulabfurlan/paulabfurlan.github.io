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
        let grupo = sessionStorage.getItem("grupo");
        let dados = pegaItem(estado, grupo, sessionStorage.getItem("escolhaEstado0"), sessionStorage.getItem("escolhaEstado1"),
        sessionStorage.getItem("escolhaEstado2"));
        
        console.log("OnLoad: " + estado);
        console.log(dados);
        console.log("Grupo: " + grupo);
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
        let grupo = sessionStorage.getItem("grupo");

        let dados = pegaItem(3, grupo, sessionStorage.getItem("escolhaEstado0"), sessionStorage.getItem("escolhaEstado1"),
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
        let grupo = sessionStorage.getItem("grupo");

        let dados = pegaItem(3, grupo, sessionStorage.getItem("escolhaEstado0"), sessionStorage.getItem("escolhaEstado1"),
        sessionStorage.getItem("escolhaEstado2"));

        sessionStorage.setItem("resultado", dados[0]);
        window.location.href = "resultado.html";
    }
});

function pegaItem(estado, grupo, escolhaEstado0, escolhaEstado1, escolhaEstado2) {
    console.log("pegaItem: " + estado);

    let grupos = [
        {
            niveis:
            [
                {
                    situacao: [
                        "Luana é uma moça esforçada, que trabalha como Auxiliar Administrativa numa Escola Municipal de dia e faz faculdade à noite. Um belo dia ela teria uma prova na faculdade às 19:00, então ela estava muito nervosa, pois com o trânsito no deslocamento do trabalho até a faculdade, ela poderia se atrasar. O que ela poderia fazer?"
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
                        "No dia anterior à prova, ela falou com a chefa dela que precisaria sair mais cedo no dia seguinte para não se atrasar para a prova, mas prometeu que chegaria mais cedo para poder compensar. Só que na noite anterior à prova ela ficou estudante até muito tarde e acabou perdendo a hora de acordar e chegou atrasada no trabalho. A chefa dela nesse dia teve uma reunião na Secretaria e só chegou na escola quase na hora do almoço. Nesse caso, a Luana deve avisar que se atrasou?",
                        "Na noite anterior à prova, a Luana ficou estudando até tarde e acabou perdendo a hora no dia seguinte. Com isso ela acabou chegando atrasada no trabalho. Nesse dia ela precisava entregar um relatório muito importante até 18:00. Além disso, a chefa dela veio da Secretaria com mais trabalho para ela fazer. O que ela pode fazer para não se atrasar para a prova?"
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
                        "Justo nesse dia, houve uma tentativa de entrega da Merenda da Escola e para liberar os alimentos, o funcionário da Secretaria de Educação precisava da assinatura de alguém do setor Administrativo. Na ausência de sua chefa, quem deve assinar esse documento é a Luana. Só que na hora que eles passaram, nem uma das duas estava presente. Eles passam novamente a tarde e falam com a chefa de Luana, que então descobre que Luana mentiu para ela. O que Luana deve fazer?",
                        "A chefa da Luana já foi estudante também e sabe bem como a pessoa fica na véspera de uma prova. Ela falou que não tem problema o atraso, contanto que a Luana entregue os documentos que ela precisava entregar até o dia seguinte. Mais tarde nesse dia, houve uma queda de energia na escola e a Luana acabou atrasando um relatório que era para ser entregue até 18:00, mas e a prova, como fica?",
                        "A chefa concordou que ela poderia entregar as outras coisas no dia seguinte, contanto que ela terminasse o relatório mais urgente e até falou que se ela entregasse antes das 18:00, a Luana poderia sair mais cedo para não se atrasar para a prova. Só que justo nesse dia houve uma queda de energia na escola, o que atrasou a Luana e ela viu que terminaria o relatório muito em cima da hora. O que fazer?",
                        "Justo nesse dia, houve uma queda de energia na escola. Juntando isso, ao fato de que a Luana ficou muito tempo em reunião com a chefa sobre as novas demandas, a Luana viu que o relatório ia sair só perto das 18:00 mesmo. E agora, o que fazer?"
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
                "A chefa de Luana ficou bem chateada com a mentira que ela contou e deu a Luana uma advertência tanto por ter mentido, quanto por ter adulterado o livro de ponto. Essa advertência foi colocada no arquivo da Luana e poderá impactar futuras promoções e pedidos de licença no futuro. Além disso, a Luana ainda levou um puxão de orelha da chefa, que ficou chateada e disse que entendia que ela tivesse perdido a hora por estar estudando.",
                "A Luana só esqueceu que na entrada da escola tem câmeras. Como a discussão ficou acalorada entre a chefa e os funcionários, ela então pegou as imagens da câmera e descobriram quem estava mentindo. Como a Luana mentiu, adulterou o ponto e ainda tentou prejudicar outras pessoas, a chefa dela não viu outra opção, senão demitir a Luana, pois ela perdeu a confiança em seu trabalho.",
                "Vendo toda a dedicação da Luana, mesmo num dia estressante como aquele, a chefa dela ficou muito feliz e, em agradecimento pelo esforço,resolveu pagar um Uber Moto para a Luana para que ela não se atrasasse para a prova.",
                "A Luana pegou dois ônibus lotados e muito trânsito, o que fez ela acabar chegando um pouco atrasada na prova. O relatório que não foi entregue era necessário para ativar o Bolsa Família dos alunos da escola naquele mês. Por causa do atraso, o Bolsa Família ficou suspenso por 15 dias, e os pais dos alunos vieram em peso na escola reclamar.",
                "Como a Luana falou para a chefa dela sobre a prova e como ela estava preocupada em se atrasar, a chefa dela ficou compadecida da situação. Além disso, o relatório ficou muito bom, então a chefa dela resolveu pagar um Uber Moto para que a Luana chegasse a tempo de fazer a prova.",
                "A Luana pegou dois ônibus lotados e muito trânsito, o que fez ela acabar chegando um pouco atrasada na prova. O relatório que não foi entregue era necessário para ativar o Bolsa Família dos alunos da escola naquele mês. Por causa do atraso, o Bolsa Família ficou suspenso por 15 dias, e os pais dos alunos vieram em peso na escola reclamar.",
                "A Luana conseguiu terminar o relatório já era 17:55. Quando ela falou para a chefa dela que tinha uma prova 19:00 e teria que correr, a chefa dela falou para ela que numa próxima elas poderiam ter negociado para ela sair mais cedo. A Luana então achou melhor pegar um Uber Moto para chegar na prova a tempo. No dia seguinte, a chefa elogiou muito o relatório da Luana e sua dedicação e resolveu reembolsar o valor do Uber Moto.",
                "A Luana correu para a faculdade, porém nesse dia tinha chovido e até por isso caiu a energia. Com isso o trânsito estava bem pior do que o normal. A Luana pegou dois ônibus lotados e acabou se atrasando muito para a prova. Além disso, a chefa descobriu que o relatório não foi entregue da pior maneira possível, pois o Bolsa Família de todos os alunos ficou suspenso por 15 dias, já que dependia desse relatório ser enviado no tempo certo. Os pais queriam sangue nos dias seguintes."
            ]
        },
        {
            niveis:
            [
                {
                    situacao: [
                        "Camila é estudante de Mestrado de tempo integral, então recebe bolsa do Governo e atua como Pesquisadora, que é uma profissão muito pouco reconhecida em nosso país. A bolsa de Mestrado é bastante defasada em relação ao seu valor e também não garante direitos trabalhistas. A Camila precisa concluir o mestrado em até 2 anos, senão ficará sem bolsa. A pesquisa da Camila envolve alto processamento computacional, os computadores do laboratório dão conta do processamento, mas o computador pessoal da Camila não. Para concluir o mestrado em tempo, ela teria que passar até 12 horas por dia no laboratório, então ela resolve comprar um computador pessoal melhor, só que ele é muito caro, o que pode fazer?"
                    ],
                    escolha1: [
                        "Parcelar em 24 vezes no cartão e rezar para que receba todas as bolsas no tempo certo."
                    ],
                    escolha2: [
                        "Continuar usando os computadores do laboratório."
                    ]
                },
                {
                    situacao: [
                        "Ela conseguiu comprar um computador que atende ao seu trabalho, mas com isso acabou com o limite de seu cartão de crédito. Com a compra, ela pôde passar a ir para o laboratório só de segunda a sexta e apenas 6 horas por dia, já que boa parte do trabalho ela poderia fazer em casa. Porém veio um dos famigerados atrasos de bolsa e a Camila ficou sem receber a bolsa por três meses. Como ela estava sem limite no cartão, ela ia ter que dar um jeito de sobreviver sem bolsa e sem poder arranjar um emprego, já que isso faria ela perder a bolsa. O que ela pode fazer?",
                        "Para fazer sua pesquisa, a Camila passou a praticamente morar no laboratório, indo lá de segunda a sábado e às vezes até tendo que dormir lá, já que seria perigoso voltar sozinha para casa de madrugada. Porém, o que mais se temia aconteceu, veio o famigerado atraso nas bolsas, o que faria Camila ficar sem receber por alguns meses. O que ela deve fazer para conseguir pagar as contas e sobreviver?"
                    ],
                    escolha1: [
                        "Começar a vender doces na faculdade, dar aulas particulares de reforço e pegar serviços de tradução de artigos.",
                        "Começar a vender doces na faculdade, dar aulas particulares de reforço e pegar serviços de tradução de artigos."
                    ],
                    escolha2: [
                        "Parcelar as faturas do cartão com juros altíssimos e pegar um empréstimo no banco também com juros altíssimos.",
                        "Usar o cartão até o limite, parcelar as faturas do cartão com juros altíssimos e pegar um empréstimo no banco também com juros altíssimos."
                    ]
                },
                {
                    situacao: [
                        "Nos meses que Camila ficou sem receber, ela teve que se virar muito para conseguir pagar as contas, e acabou não sobrando muito tempo para que ela mantivesse em dia as atividades do Mestrado. Com isso ela acabou perdendo um prazo para enviar um artigo e ela só teria outra oportunidade de enviar novamente em 6 meses. Pelo menos quando as bolsas voltaram a cair, ela não ficou com dívidas financeiras. Além do atraso no artigo, o seu experimento também não deu certo e ela acabou perdendo mais 3 meses de trabalho. Mesmo trabalhando de domingo a domingo, ao final do prazo de dois anos, Camila ainda teria que trabalhar mais 6 meses para finalizar o mestrado e sem bolsa. O que ela pode fazer?",
                        "O que parecia ser só um atraso nas bolsas acabou se tornando um corte de bolsas. Enquanto a Camila esperava uma transeferência de Bolsas entre um órgão e outro do governo, ela viu que precisaria dar um jeito nas contas. Ela então conseguiu pegar um serviço de engenharia que pagava bem, mas tinha contrato limitado de um ano. Ela tentou conciliar o trabalho com o mestrado, mas não tinha horas suficientes no dia para fazer tudo. Quando as bolsas voltaram, ela teve que escolher entre voltar ao Mestrado com bolsa ou pegar outro serviço desse tipo. O que ela deve fazer?",
                        "Como a Camila não tinha um computador em casa e ela não tinha como bancar ir para o laboratório na mesma frequência que antes, ela acabou se atrasando bastante no Mestrado. Além disso, as outras atividades tomavam muito tempo dela. Ela ficou 5 meses sem receber a bolsa e com isso acabou perdendo um prazo de um artigo, fazendo com que ela ficasse pelo menos 6 meses atrasada quando chegasse ao final do prazo máximo de 2 anos, quando ela também ficaria sem receber a bolsa.",
                        "Infelizmente o atraso das bolsas virou um corte de bolsas. Sem meios para continuar no Mestrado, a Camila teve que trancar e conseguiu um emprego numa fábrica. O computador fez falta, pois ela teve que recusar dois serviços que pagariam mais, pois não tinha essa ferramenta de trabalho. Após 3 anos trabalhando no 6x1 e quase sem alma já, a Camila conseguiu pagar suas dívidas. Ela então poderia fazer uma de duas coisas."
                    ],
                    escolha1: [
                        "Conseguir um trabalho e rezar para conseguir concluir o Mestrado em até mais 2 anos, já que após isso ela seria desligada do Mestrado.",
                        "Voltar ao Mestrado com a bolsa e dar o gás para recuperar o tempo perdido.",
                        "Conseguir um trabalho e rezar para conseguir concluir o Mestrado em até mais 2 anos, já que após isso ela seria desligada do Mestrado.",
                        "Retornar ao mestrado com o resto da bolsa e dar o gás para concluir, rezando que não tivesse mais nenhum empecilho."
                    ],
                    escolha2: [
                        "Pegar empréstimos mesmo sem saber como vai pagar depois e ficar 6 meses focada em finalizar o Mestrado.",
                        "Engatar outro serviço para ter mais estabilidade financeira e fazer o Mestrado no tempo que sobrar.",
                        "Pegar empréstimos mesmo sem saber como vai pagar depois e ficar 6 meses focada em finalizar o Mestrado.",
                        "Trabalhar mais um pouco na fábrica a fim de comprar o computador e depois retornar ao Mestrado com o restante da bolsa"
                    ]
                },
            ],
            resultado: [
                "A Camila conseguiu um emprego de 30 horas semanais, o que fazia com que ela tivesse algumas horas na semana para se dedicar ao Mestrado. Ela precisou de mais 1 ano e meio, pois o trabalho era bem longe de casa e ela perdia muito tempo no deslocamento, mas ela conseguiu concluir o mestrado em 3 anos e meio! Além disso, o trabalho dela foi numa área relacionada ao Mestrado, então isso ajudou ela a conseguir mais e mais oportunidades dali para a frente.",
                "A Camila estourou o cartão e parcelou o máximo que pôde, além de pegar empréstimo no banco. Além disso, ela começou a vender doces na faculdade e também conseguiu um serviço na sua área de atuação quando a situação realmente apertou. Em um ano ela conseguiu finalmente terminar o Mestrado! Ao final do Mestrado, ela conseguiu um emprego devido aos contatos que fez na faculdade e conseguiu um bom salário.",
                "Ela batalhou muito dia e noite e conseguiu finalizar o Mestrado com louvor em 3 anos suados. Nesse meio tempo, ela conseguiu passar no Doutorado e já engatou ele logo em seguida. Por sua dedicação, ela conseguiu uma bolsa especial concedida a alunos com ótimo desempenho, e essa bolsa tem um valor superior, o que fez com que ela tivesse um Doutorado um pouco mais tranquilo financeiramente. E o computador que ela comprou serviu também para o seu Doutorado.",
                "O serviço que a Camila pegou acabou sendo maior que o anterior, além disso, com o novo computador a Camila pôde fazer outros cursos na área tecnológica e acabou se enrolando com o tempo. Infelizmente, ela não conseguiu concluir o Mestrado a tempo e teve que cancelar a matrícula. Ela então trabalhou bastante e juntou dinheiro, e dois anos depois ela conseguiu reativar sua matrícula no Mestrado e se dedicou integralmente a ele com o resto da bolsa e o dinheiro que juntou e conseguiu finalmente após 6 anos, concluir seu tão sonhado Mestrado!",
                "A Camila conseguiu um emprego de 30 horas semanais, o que fazia com que ela tivesse algumas horas na semana para se dedicar ao Mestrado. Ela precisou de mais 1 ano e meio, pois o trabalho era bem longe de casa e ela perdia muito tempo no deslocamento, mas ela conseguiu concluir o mestrado em 3 anos e meio! Além disso, o trabalho dela foi numa área relacionada ao Mestrado, então isso ajudou ela a conseguir mais e mais oportunidades dali para a frente.",
                "Foram seis meses muito loucos, mas a Camila conseguiu terminar seu Mestrado! Ela acabou ficando com várias dívidas. Além disso, ela teve que recusar dois serviços que pagariam bem, pois ela não tinha um computador que desse conta do recado. Ela então conseguiu um emprego com um contato que conheceu na faculdade, que possibilitou ela pagar suas dívidas em 3 anos. Assim que ela conseguiu se estabilizar novamente, ela fez a prova do Doutorado e passou com bolsa. Ela então investiu em um computador, aproveitando que a bolsa do Doutorado tem um valor maior.",
                "Graza Deus não teve  mais cortes!! A Camila conseguiu concluir o Mestrado naquele esquema de acampar no laboratório, mas pelo menos toda essa dedicação não foi ignorada. Ela passou no Doutorado em primeiro lugar e acabou recebendo uma bolsa especial, que tem um valor maior que as outras. A primeira coisa que a Camila fez ao receber a primeira bolsa foi comprar seu computador parceladinho em 24 vezes.",
                "Foi sofrido foi, foi chorado foi, mas a Camila conseguiu voltar ao Mestrado com o computador e muita vontade de concluir aquilo que ela tanto queria. Esse deve ter sido o Mestrado mais longo da história, mas pelo menos a Camila o concluiu com louvor. Ela então passou em primeiro lugar no Doutorado e conseguiu uma bolsa especial, que tem um valor maior do que as outras. Com isso ela pode ter um pouco mais de tranquilidade e conseguiu até fazer uma reserva de emergência durante o Doutorado."
            ]
        }
    ]; 

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
            grupos[grupo - 1].niveis[estado].situacao[estado],
            grupos[grupo - 1].niveis[estado].escolha1[estado],
            grupos[grupo - 1].niveis[estado].escolha2[estado]
        ]
    }
    else if (estado == 1)
    {
        let pos = escolhaEstado0 - 1;

        return [
            grupos[grupo - 1].niveis[estado].situacao[pos],
            grupos[grupo - 1].niveis[estado].escolha1[pos],
            grupos[grupo - 1].niveis[estado].escolha2[pos]
        ]
    }
    else if (estado == 2)
    {
        let pos = ((escolhaEstado0 - 1) * 2) + (escolhaEstado1 - 1);

        return [
            grupos[grupo - 1].niveis[estado].situacao[pos],
            grupos[grupo - 1].niveis[estado].escolha1[pos],
            grupos[grupo - 1].niveis[estado].escolha2[pos]
        ]
    }
    else if (estado == 3)
    {
        let pos = ((escolhaEstado0 - 1) * 4) + ((escolhaEstado1 - 1) * 2) + (escolhaEstado2 - 1);
        
        console.log("pos3: " + pos);

        return [
            grupos[grupo - 1].resultado[pos]
        ]
    }
}