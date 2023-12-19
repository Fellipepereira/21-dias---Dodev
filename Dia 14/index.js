// EXERCICIO REAJUSTE
// 1 - Crie uma função que pergunte o nome e o salário de um colaborador;

// 2 - Depois crie uma função que deve ser chamada dentro da função que solicita as informações, 
// essa função irá calcular o aumento de salário conforme a seguinte tabela:
//        - ATÉ R$1.500,00 : aumento de 20%

//        - R$1.501,00 até R$2.000,00 : aumento de 15%

//        - R$2.001,00 até R$3.000,00 : aumento de 10%

//        - R$3.001,00 em diante : aumento de 5%

// Essa função tem que receber dois parâmetros: o salário e o nome do colaborador. Para calcular o aumente basta 
// multiplicar o salário pela porcentagem.

// 3 - Depois de calcular o aumento você deve exibir: o nome do colaborador, o salário, a % de aumento e o salário reajustado.

// 4 - Crie uma função que  deve ser chamada no final da função que calcula o reajuste salarial, essa função deve 
// perguntar se o usuário deseja calcular novamente com novas informações.

// 5 - Para testar basta chamar a primeira função criada, e as outras serão chamadas na sequência conforme a execução do código

// * Para calcular o aumento, faça o valor do salário multiplicado

//    pela porcentagem em decimal. 

//      Ex.: salário R$1.000,00 aumento de 10%   |   salário R$1.000,00 aumento de 15%

//           1000 * 1.10 = 1100                  |   1000 * 1.15 = 1150

// FUNÇÃO PARA PERGUNTAR NOME E SALÁRAIO DO COLABORADOR
var nome;
var salario;

function perguntarColaborador() {
    nome = prompt("Digite o nome do colaborador:");
    salario = parseFloat(prompt("Digite o salário do colaborador:"));
    calcularAumentoSalario(nome, salario);
}

// FUNÇÃO PARA CALCULAR O AUMENTO DE SALÁRIO
function calcularAumentoSalario(nome, salario) {
    var aumento = 0;

    if (salario <= 1500) {
        aumento = 0.2; // 20%
    } else if (salario <= 2000) {
        aumento = 0.15; // 15%
    } else if (salario <= 3000) {
        aumento = 0.1; // 10%
    } else {
        aumento = 0.05; // 5%
    }

    var novoSalario = salario + (salario * aumento);

    //EXIBINDO OS RESULTADOS
    console.log("Nome do colaborador: " + nome);
    console.log("Salário: R$" + salario);
    console.log("Aumento: " + (aumento * 100) + "%");
    console.log("Salário reajustado: R$" + novoSalario.toFixed(2));

    perguntarNovamente(); // PERGUNTAR SE DESEJA CALCULAR NOVAMENTE
}

// FUNÇÃO PARA PERGUNTAR SE O USUÁRIO DESEJA CALCULAR NOVAMENTE
function perguntarNovamente() {
    var resposta = prompt("Deseja calcular novamente? (1 - sim / 2 - não)");

    if (resposta.toUpperCase() === "1") {
        perguntarColaborador(); //REINICIAR O PROCESSO
    } else {
        console.log("Programa encerrado.");
    }
}
perguntarColaborador();