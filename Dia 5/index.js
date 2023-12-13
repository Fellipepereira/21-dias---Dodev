// // CRIANDO VARIAVEL exemplo
// var opcao = prompt("Escolha uma opção de 1 a 5")
// // CRIANDO SWITCHCASE exemplo
// switch(opcao){
//     case "1":
//         console.log("Você escolheu a opção 1")
//         break;
//     case "2":
//         console.log("Você escolheu a opção 2")
//         break;
//     case "3":
//         console.log("Você escolheu a opção 3")
//         break;
//     case "4":
//         console.log("Você escolheu a opção 4")
//         break;
//     case "5":
//         console.log("Você escolheu a opção 5")
//         break;
//     default:
//         console.log("Opção inválida")
//         break;
// }

// //ATIVIDADE: 
// // 1.1 - Crie um algoritmo que peça 2 números ao usuário
// // 1.2 - Utilizando o switchCase dê a opção do usuário escolher qual operação matemática será realizada com esses números
// // 1.3 - Exiba no console a operação feita e o resultado da conta

// //Variaveis
// let num1 = parseInt(prompt("Digite o primeiro número"))
// let num2 = parseInt(prompt("Digite o segundo número"))
// let opcao = parseInt(prompt("Escolha uma operação que deseja realizar:" + "\n1 = +; \n2 = -; \n3 = *; \n4 = /"))
// // switchCase
// switch(opcao){
//     case "1":
//         console.log(num1 + "+" + num2 + "=" + (num1 + num2))
//         break;
//     case "2":
//         console.log(num1 + "-" + num2 + "=" + (num1 - num2))
//         break;
//     case "3":
//         console.log(num1 + "*" + num2 + "=" + (num1 * num2))
//         break;
//     default:
//         console.log(num1 + "/" + num2 + "=" + (num1 / num2))
//         break;
// }

// ATIVIDADE 2:
// 1.1 - Crie um algoritmo que peça para o usuário escolher entre 3 opções em um posto de gasolina: abastecer com gasolina, com álcool ou calibrar os pneus.
// 1.2 - Se o usuário escolher abastecer com gasolina, você deve solicitar o valor desejado e exibir no console a quantidade em litros que foi abastecida (litro de gasolina = R$5) 
// 1.3 - Se o usuário escolher abastecer com álcool, você deve solicitar o valor desejado e exibir no console a quantidade em litros que foi abastecida (litro de álcool = R$3)
// 1.4 - Se o usuário escolher calibrar os pneus, exiba no console a mensagem: "pneus calibrados com sucesso".

//VARIAVEIS
let valor
let quantidade
let opcoes = prompt("Escolha uma opção de abastecimento:" + "\n1 = Gasolina; \n2 = Alcool; \n3 = calibrar pneus")
// switchCase
switch(opcoes){
    case "1":
        valor = parseInt(prompt("Qual valor você quer abastecer?"))
        quantidade = valor / 5
        console.log("Foram abastecidos " + quantidade + "L de gasolina")
        break;
    case "2":
        valor = parseInt(prompt("Qual valor você quer abastecer?"))
        quantidade = valor / 3
        console.log("Foram abastecidos " + quantidade + "L de alcool")
        break;
    default:
        console.log("Pneus calibrado com suscesso!")
        break;
}