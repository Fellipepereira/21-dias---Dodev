// exemplo 1 while

// let condicao = true;
// while(condicao === true){
//     let idade = Number(prompt('Insira a sua idade!'))
//     if(idade < 18){
//         console.log('você é menor de idade')
//         condicao = false;
//     }
// }

// console.log('acabou o while')

// exemplo 2 while

// let idade = 18;
// while(idade >= 18){
//     idade = Number(prompt('Insira a sua idade!'))
//     console.log(idade)

// }

// console.log('Você é menor de idade!')

//exemplo do while

// let idade = 17;

// do{
//     idade = Number(prompt('Insira a sua idade!'))
//     console.log(idade)
// }while(idade >= 18);

// console.log('Você é menor de idade!')

//exercicio 1 Desenvolva um algoritmo que receba a nota e o sexo do aluno, 
//usando a estrutura WHILE, e pergunte ao usuario se ele deseja cadastrar outra
//nota. No final, exiba no console:
//  - A média geral dos alunos
//  - Quantos homens enviaram as notas
//  - Quantas mulheres tiveram nota acima de 7
//  - Qual a maior nota entre os homens
//     *Obs.: para obter a média geral deve somar todas as notas e 
// dividir pelo número de alunos!

// Criando variavel:
// let mediageral = 0
// let qtdHomens = 0
// let qtdMulheresAcimaDe7 = 0
// let maiorNotaHomens = 0
// let contador = 1

// //nota,sexo

// while(contador <= 10){
//     nota = parseInt(prompt("Digite a nota do " + contador + "º aluno"))
//     sexo = prompt("Digite o sexo do aluno (m/f)")

//     if(sexo == "m"){
//         if(nota > maiorNotaHomens){
//             maiorNotaHomens = nota 
//         }
//         qtdHomens++
//     }
//     if(sexo == "f" && nota > 7){
//         qtdMulheresAcimaDe7++
//     }
//     mediageral += nota
//     contador++
// }

// mediageral = mediageral / 10

// console.log("A média geral dos alunos foi: " + mediageral)
// console.log("A quantidade de homens cadastrados foi: " + qtdHomens)
// console.log("A quantidade de mulheres que tiveram a nota acima de 7 foi: " + qtdMulheresAcimaDe7)
// console.log("A maior nota entre os homens foi: " + maiorNotaHomens)

// exercicio 2 - Caixa eletrônico
// Solicite o nome e o cpf do seu cliente.
// Pergunte um valor.
// Ofereça a opção de saque ou depósito.
// Caso a opção de saque seja a escolhida, remova o valor inserido do saldo total.
// Caso a opção de depósito seja escolhida, adicione o valor inserido do saldo total.
// Pergunte se o seu usuário deseja continuar. (Insira 1 para continuar e 2 para parar).
// Exiba o saldo total.
// Exiba o maior valor inserido(independente de ser depósito ou saque).
// Exiba a média dos valores inseridos(independente de ser depósito ou saque).


// REGRAS: 
// 1- Considere iniciar a variável saldo com algum valor

// 2- Não deve ser permitido sacar um valor não disponível no saldo.

// 3- Não deve ser permitido sacar nem depositar um valor negativo.

// // Criando variavel:
let saldo = 1000; //inicializando o saldo com um valor inicial
let maiorValorInserido = 0;
let somaValoresInseridos = 0;
let totalTransacoes = 0;
let continuar = false

// //iniciando o DO
do{
    const nome = prompt("Digite seu nome: ");
    const cpf = prompt("Digite seu CPF: ");
    const valor = Number(prompt("Digite o valor da transação: "));
    const operacao = prompt("Qual operação deseja fazer? 1 = SAQUE / 2 = DEPOSITO")
    
    if (valor < 0) {
        console.log("Valor inválido. A transação não foi realizada.");
    } else if (operacao == "1" && valor > saldo) {
        console.log("Saldo insuficiente. A transação não foi realizada");
    } else if (operacao == "1") {
        console.log(`Olá, ${nome} (${cpf}), seu saldo atual é R$${saldo}.`);
        saldo -= valor;
        totalTransacoes++;
        somaValoresInseridos += valor;
        if (valor > maiorValorInserido) {
            maiorValorInserido = valor;
        }
        console.log(`Transação realizada com suscesso. Seu saldo atual é R$${saldo}.`);
    } else if (operacao === "2") {
        console.log(`Olá, ${nome} (${cpf}), seu saldo atual é R$${saldo}.`);
        saldo += valor;
        totalTransacoes++;
        somaValoresInseridos += valor;
        if (valor > maiorValorInserido) {
            maiorValorInserido = valor;
        }
        console.log(`Transação realizada com suscesso. Seu saldo atual é R$${saldo}.`);
    } else {
        console.log("Opção inválida. Programa encerrado.");
        continuar = false;
    }
    
    const opcao = prompt("Deseja continuar? (1 para continuar, 2 para parar): ");
    if (opcao === "1") {
        continuar = true 
    } else if (opcao === "2") {
        continuar = false
    } else {
        console.log("Opção inválida. Programa encerrado.");
        continuar = false;
    }

} while (continuar);

console.log(`Saldo final: R$${saldo}`);
console.log(`Maior valor inserido: R$${maiorValorInserido}`);
if (totalTransacoes > 0) {
    console.log(`Média dos valores inseridos: R$${(somaValoresInseridos / totalTransacoes).toFixed(2)}`);
} else {
    console.log("Nenhuma transação realizada.")
}