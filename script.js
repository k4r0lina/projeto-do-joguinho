const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: " Imagina que você é um presidente, e o congresso te apresenta dois projetos de leis. Uma é para diminuir as emissões de gases poluentes com o custos de que algumas empresas irão sair do país, a segunda lei é para aumentar o limite dos gases poluentes e com isso terá mais empresas ",
        alternativas: [
            {
                texto: "aprovar a primeira lei",
                afirmacao: "ter um país com menos gases poluentes. "
            },
            {
                texto: "aprovar a segunda lei",
                afirmacao: "Ter mais gases oluentes por ter mais empresas ."
            }
        ]
    },
    {
        enunciado: "As empresas de carros querem fabricar mais veículos, com isso você tem que aprovar os carros elétricos/biocombustíveis que precisará de uma verba maior para a fabricação ou carros com gases poluentes que será usado menos verba para a sua fabricação. Qual você irá aprovar?",
        alternativas: [
            {
                texto: "carros elétricos/biocombustíveis "
                afirmacao: "você escolheu um carro mais sustentável para o meio ambiente, mas a verba será maior para a fabricação."
            },
            {
                texto: "carros com gases poluentes.",
                afirmacao: "você escolheu o carro com menos verba para a fabricação, mas ele é mais poluente."
            }
        ]
    },
    {
        enunciado: "O congresso te apresenta mais duas leis, sendo elas usar mais energias limpas que você poderá colocar placas solares pelos campos e essa energia ser utilizada de noite nas ruas ou  liberar uma verba para uma pesquisa a energia de fusão nuclear tendo 50% que poderá dar certo e 50% que pode dar errado causando uma explosão nuclear",
        alternativas: [
            {
                texto: "aprova a primeira opção.",
                afirmacao: "colocar placas solares pelos campos e usar sua energia nas cidades de noite."
            },
            {
                texto: "aprova a segunda opção.",
                afirmacao: "Dar o dinheiro para a pesquisa sobre energias de fusão nuclear."
            }
        ]
    },
    {
        enunciado: "A partir de agora temos mais água em todo mundo, pois nossa água potável não é mais utilizada para gerar energia nas usinas hidrelétricas. Com isso o congresso te apresenta dois novos projetos de leis, são elas: Diminuir o uso inapropriado  da água, assim gerando uma multa para quem utilizar a água de forma inadequada. Ou abaixar o preço do uso da água.",
        alternativas: [
            {
                texto: "aprovar o primeiro projeto .",
                afirmacao: " utilizar a água da forma certa, fazendo o uso correto e adequado da água."
            },
            {
                texto: "aprovar o segundo projeto.",
                afirmacao: " a baixar o valor do preço utilizado pela água"
            }
        ]
    },
    {
        enunciado: "O último projeto que foi criado possibilitou o maior uso de água, com isso o congresso apresentou mais dois projetos de leis, assim estabelecendo eles com base no meio ambiente, primeiro projeto: fazer o plantio de mais árvores pelas cidades, possibilitando a melhora da qualidade do ar. OU o segundo projeto, onde ele apresenta pegar a verba, e fazer para uso de novas pavimentações na cidade",
        alternativas: [
            {
                texto: "aprovar o primeiro projeto.",
                afirmacao: " plantar mais árvores para melhorar a qualidade do ar."
            },
            {
                texto: "aprovar segundo projeto",
                afirmacao: "fazer novas pavimentações pela cidade. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";
s
function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();