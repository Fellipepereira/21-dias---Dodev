//DESAFIO:
//Escreva um algoritmo onde seu usuário deve informar nome, idade, peso, altura e profissão, 
// a partir disso você deve exibir um texto com todas essas informações. 
// Ex: Usuário inseriu nome: Giovanni, idade: 21, peso: 74kg, profissão: Programador, altura: 1.83, Você exibe: 
// Olá Giovanni, você tem 21 anos, é programador, tem 1.83M de altura e pesa 74kg.


// Verifique se o usuário é maior ou menor de idade, se ele for maior exiba na tela 
// “Está liberado para tomar umas geladas”, se ele for menor exiba “Sem gelada para você”.


// Utilize a idade informada pelo usuário, e mostre sua idade em meses, semanas e dias. 
// Considere ano com 365 dias, mês com 30 dias e semana com 7 dias. 

// Calcule o IMC do seu usuário e informe a faixa dele.


// *O IMC é a relação entre peso e altura e o cálculo é feito de acordo com a fórmula: IMC = peso / (altura x altura)

// O peso deve estar em kg e a altura em metros, e o resultado é dado em kg/m2. Depois de obter o resultado, 
// é possível verificar em que faixa o IMC se encontra, podendo indicar:

//       - Magreza, quando o resultado é menor que 18,5 kg/m2;

//       - Normal, quando o resultado está entre 18,5 e 24,9 kg/m2;   

//       - Sobrepeso, quando o resultado está entre 24,9 e 30 kg/m2;

//       - Obesidade, quando o resultado é maior que 30 kg/m2.

// A partir da idade informada descubra o ano que o seu usuário nasceu(Considere o ano atual como 2023, 
//     faça essa conta usando apenas o ano).

// Agora você deve exibir todos os anos que o usuário já viveu até o ano atual e informar qual a idade dele no 
// determinado ano.

// *ATENÇÃO: Aqui você deve utilizar o loop FOR.

//    Ex: Nasceu em 2018 você deve exibir: 

//        2018 - 0 anos de idade

//        2019 - 1 anos de idade

//        2020 - 2 anos de idade

//        2021 - 3 anos de idade

//        2022 - 4 anos de idade

// Utilizando o loop WHILE/DOWHILE, pergunte a seu usuário se ele deseja inserir novos dados ou se deseja 
// finalizar o programa

// //CRIANDO FUNCTION

// function inserirDados() {
//     // CRIANDO VARIAVEIS
//     let nome = prompt("Digite seu nome")
//     let idade = parseInt(prompt("Digite sua idade"))
//     let peso = prompt("Digite seu peso em kg")
//     let altura = prompt("Digite sua altura em metros")
//     let profissao = prompt("Digite sua profisão")

//     console.log("Olá " + nome + ", você tem " + idade + " anos, pesa " + peso + "Kg, tem " + altura + "m de altura, e trabalha como " + profissao)

//     //VERIFICANDO IDADE

//     if (idade >= 18) {
//         console.log("Está liberado para tomar uma gelada.")
//     } else {
//         console.log("Sem gelada para você")
//     }

//     // DECOBRINDO IDADE FRACIONADA

//     let meses = idade * 12
//     let semanas = idade * 52
//     let dias = idade * 365

//     console.log("Sua idade em meses é: " + meses)
//     console.log("Sua idade em semanas é: " + semanas)
//     console.log("Sua idade em dias é: " + dias)

//     //DESCOBRINDO O IMC

//     let imc = peso / (altura * altura)

//     if (imc < 18.5) {
//         console.log("Seu IMC é: Magreza")
//     } else if (imc >= 18.5 && imc <= 24.9) {
//         console.log("Seu IMC é: Normal")
//     } else if (imc >= 25 && imc <= 30) {
//         console.log("Seu IMC é: Sobrepeso")
//     } else {
//         console.log("Seu IMC é: Obesidade")
//     }

//     // DESCOBRINDO ANO DE NASCIMENTO

//     let anoAtual = 2023
//     let anoNasc = anoAtual - idade
//     console.log("Você nasceu no ano de " + anoNasc)

//     //EXIBINDO ANOS E IDADES

//     let anoVivido = anoNasc
//     let idadeAtual = 0

//     for (let anoVivido = anoNasc; anoVivido <= anoAtual; anoVivido++) {
//         console.log(anoVivido + " - " + idadeAtual + " anos de idade")
//         idadeAtual++
//     }
// }

// //LOOP DOWHILE
// do {
//     inserirDados();
//     //IINSERINDO LOGICA ANTERIOR
//     var continuar = prompt("Deseja inserir os dados novamente? (s/n)")
// } while (continuar == "s");

//CRIANDO VARIAVEIS/LOOP
let confirmar = "n"
let salarioAtual
while (confirmar != "s") {
    let nome = prompt("Digite seu nome")
    let idade = parseInt(prompt("Digite sua idade"))
    salarioAtual = parseInt(prompt("Digite seu salário atual"))
    console.log("nome: " + nome + ", idade: " + idade + ", salário atual: " + salarioAtual)
    confirmar = prompt("As informações estão Corretas? (s/n)")
}

//FAZENDO A PREVISÃO DO SALÁRIO
let aumento = 0.015
console.log("Previsão salarial  para os próximos 10 anos: ")

for (let ano = 1; ano <= 10; ano++) {
    salarioAtual += salarioAtual * aumento + aumento
    aumento *= 2

    console.log((2023 + ano) + " = R$ " + salarioAtual)
}