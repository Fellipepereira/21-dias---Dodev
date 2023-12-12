//let condicao = false;
// == igual | != diferente | < menor que e > maior que | <= >= maior e menor ou igual
// === é igual o valor e o tipo | !== é diferente o valor e o tipo!

//if(condicao){
    //console.log('entrou no if')
//}else{
    //console.log('entrou no else')
//}

//exemplo:

// let idade = Number(prompt('Insira a sua idade'))

// if(idade <= 10){
//     console.log(idade)
//     let dentroEscopo = 'Fellipe'
//     console.log(dentroEscopo)
//     console.log('Você tem menos ou tem 10 anos')
//     if(true){
//         console.log("estou no terceiro escopo")
//         console.log(dentroEscopo)
//     }
// }else{
//     console.log('Você tem mais de 10 anos')
// }
// console.log("SAI DO ESCOPO DO IF")
// console.log(dentroEscopo)

// let idade = Number(prompt('Insira a sua idade'))
// let nome = prompt('Insira seu nome')
// if (idade === 27 && nome === "Fellipe"){
//     console.log("Seu nome é Fellipe e você tem 27 anos")
// }
// if(idade === 23 || nome === "Fellipe"){
//     console.log("Você tem 27 anos ou o seu nome é Fellipe")
// }else{
//     console.log('Seu nome não é Fellipe e você não tem 27 anos')
// }
// exercicio 1
// let fome = prompt('Você está com fome?')
// let dinheiro = prompt('VocÊ tem dinheiro?')
// let restaurante = prompt('O restaurante está aberto?')
// if (fome === "nao" || dinheiro === "nao"){
//     console.log("Hoje a janta será em casa");
// }else if (dinheiro === "sim" && restaurante === "sim"){
//     console.log("Hoje o jantar será no seu restaurante preferido!");
// }else{
//     console.log("Peça em delivery!")
// }
//exercicio 2
//criando variavel
let nome
let idade
let temCarta = false
let temCarro = false
//pedindo informacoes ao usario
nome = prompt("Insira seu nome!")
idade = prompt("Qual a sua idade?")
let cartaDeMotorista = prompt("Possui carteira de motorista?")
if (cartaDeMotorista == "sim"){
    temCarta = true
}
let carro = prompt("Você tem algum carro?")
if (carro == "sim"){
    temCarro = true
}
//exibindo mensagem no console
if ( idade < 18 || !temCarta){
    console.log(nome + ", você não pode dirigir!");
}else if (idade >= 18 && temCarta && !temCarro){
    console.log(nome + ", você pode dirigir mas nao tem carro!")
}else{
    console.log(nome + ", você será o motorista!")
}