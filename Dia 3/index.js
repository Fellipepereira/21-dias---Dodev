//let e const   

//let meuNome = 'Fellipe Pereira'
//console.log(meuNome)
//meuNome = 'Fellipe Borges'
//console.log(meuNome)

//console.log('====== Constante ======')

//const a = 2
//console.log(a)
//a = 3
//console.log(a)

//let numUm = 1;
//let numDois = 2;

//let soma = numUm + numDois;

//console.log(soma)

// DECLARACAO DE VARIAVEIS
let nome = ""
let idade = 0
let altura = 0
//SOLICITANDO INFORMACOES AO USARIO E ATRIBUINDO VALORES AS VARIAVEIS
nome = prompt("Digite seu nome: ")
idade = parseInt(prompt("Digite sua idade: "))
altura = parseFloat(prompt("Digite sua altura: "))
peso = parseInt(prompt("Digite seu peso: "))
//CALCULANDO O ANO QUE A PESSOA NASCEU E O IMC
let anoNasc = 0
anoNasc = 2023 - idade

let imc = 0
imc = peso / (altura * altura)

//EXIBINDO AS INFORMACOES NO CONSOLE
console.log("Olá " + nome + ", você tem " + idade + " anos, nasceu em " + anoNasc + ", tem " + altura + " de altura, pesa " + peso + "kg e seu UMC é " + imc + "kg/m")