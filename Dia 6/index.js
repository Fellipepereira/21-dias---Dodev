// exemplo de como se usar o for
// let tabuada = Number(prompt('Escolha a tabuada desejada!'))

// for(let contador = 0; contador <= 10; contador++){
//     console.log(tabuada + " x " + contador + " = " + tabuada*contador)
// }

// exercicio 1 - Faça um algoritmo que receba um valor, inteiro e positivo,
// e usando a estrutura FOR, mostre no console uma contagem de 0 até o número recebido:

// let numero = parseInt(prompt('Digite um numero inteiro e positivo!'))

// for(let i = 0; i <= numero; i++){
//     console.log(i)
// }

//exercicio 2 - Desenvolva um algoritmo que usando a estrutura FOR mostre no console
//uma contagem de 0 a 50, porém, essa contagem tem que ser feita de 5 em 5.
//Ex.: 0 5 10 15 20 25 … 45 50:

// for(let i = 0; i <= 50; i += 5){
//     console.log(i)
// }

//exercicio 3 - Agora faça com que o algoritmo do exercício anterior exiba a mesma
//contagem mas na ordem inversa.Ex.: 50 45 40 35 30 25 … 5 0 Fim!
   
// for(let i = 50; i >= 0; i -= 5){
//     console.log(i)
// }  

//exercicio 4 - Faça um algoritmo utilizando a estrutura de repetição FOR que receba 1 número
//e exiba na tela qual o resultado da sua tabuada e dos próximos 2 números.
   
let numero = parseInt(prompt('Digite um numero inteiro e positivo!'))

for(let i = numero; i <= numero + 2; i++){
    console.log("tabuada do numero: " + i)
    for(let j =0; j <= 10; j++){
        console.log(i + " X " + j + " = " + (i*j))
    }
}