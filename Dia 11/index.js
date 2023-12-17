// DESAFIO 1: 1 - Crie um array para receber os nomes dos alunos e outro para receber as notas;

// 2 - Para cada aluno inserido pergunte o nome e a nota da prova;

// 3 - Seu usuário deve ter a opção de parar de inserir informações quando desejar;

// 4 - No final exiba a nota de cada aluno, a soma das notas e a média geral da turma. 
// Para calcular a média deve dividir a soma das notas pelo total de alunos.

// CRIANDO VARIAVEIS
// let alunos = [];
// let notas = [];
// let continuar = true;
// let contador = 0;

// //CRIANDO LOOP
// while (continuar) {
//     let nome = prompt("Digite o nome do " + (contador + 1) + "º aluno");
//     let nota = parseInt(prompt("Digite a nota do aluno"));
//     alunos[contador] = nome;
//     notas[contador] = nota;
//     contador++;
//     let resposta = prompt("Deseja inserir informações sobre outro aluno? (s/n)");
//     if (resposta == "n") {
//         continuar = false;
//     }
// }

// //EXIBINDO INFORMAÇÃO
// console.log("Notas dos alunos: ");
// for (let i = 0; i < alunos.length; i++) {
//     console.log(alunos[i] + " - " + notas[i]);
// }
// let somaNotas = 0
// for (let i = 0; i < notas.length; i++) {
//     somaNotas += notas[i];
// }
// let medida = somaNotas / alunos.length;
// console.log("A soma das notas foi: " + somaNotas);
// console.log("A média geral da turma foi: " + medida);
//-----------------------------------------------------------------------------------------------

//EXERCICIO 2 : 1 - Crie três arrays, um para guardar  os modelos, um para guardar os anos e um para guardar os valores 
// do carro

// 2 - Utilizando o WHILE, peça para o usuário cadastrar novos carros(modelo, ano e valor), popule os 3 arrays nas mesmas 
// posições.

// 3 - Seu usuário deve definir quando parar de inserir informações.

// 4 - Exiba o nome, ano e valor dos carros inseridos.
//        ex: Celta, 2020 Valor: 50.000

// 5 - Ordene seus vetores pelo preço dos carros. 
// (Aqui você deve usar seu algoritmo de ordenação, não use os nativos do javascript, como o OrderBy)
// Ex:
// [prisma,celta,porsche] [2015,2020,2022] [70.000,50.000,300.000] -> 
// -> [celta,prisma,porsche] [2020,2015,2022] [50.000,70.000,300.000]

//CRIANDO VARIAVEIS
let modelos = [];
let anos = [];
let valores = [];
let continuar = true;
let contador = 0;

//CRIANDO LOOP
while (continuar) {
    let modelo = prompt("Digite o modelo do carro");
    modelos [contador] = modelo;
    let ano = prompt("Digite o ano do carro");
    anos [contador] = ano;
    let valor = parseInt(prompt("Digite o valor do carro"));
    valores [contador] = valor;
    contador++;

    let resposta = prompt("Deseja inserir outro carro? (s/n)");
    if (resposta == "n") {
        continuar = false
    }
}

//EXIBINDO INFORMAÇÕES
console.log("Carro cadastrado: ");
for (let i = 0; i < modelos.length; i++) {
    console.log(`${modelos[i]}, ${anos[i]} Valor: ${valores[i]}`);
}

//ORDENAR POR PREÇO
for (let i = 0; i < valores.length - 1; i++) {
    for (let j = 0; j < valores.length - i - 1; j++){
        if (valores[j] > valores[j + 1]) {
            
            let modeloMaiorValor = modelos[j];
            modelos[j] = modelos[j + 1];
            modelos[j + 1] = modeloMaiorValor;

            let anoMaiorValor = anos[j];
            anos[j] = anos[j + 1];
            anos[j + 1] = anoMaiorValor;

            let maiorValor = valores[j];
            valores[j] = valores[j + 1];
            valores[j + 1] = maiorValor;
        }
    }
}

console.log("Carros ordenados pelo preço: ");
for (let i = 0; i < modelos.length; i++) {
    console.log(`${modelos[i]}, ${anos[i]} Valor: ${valores[i]}`);
}