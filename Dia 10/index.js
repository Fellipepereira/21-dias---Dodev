//DECLARANDO UM ARRAY EXEMPLO
// let arrayDeNomes = ["valor1", "valor2", "valor3"]; //Declarando ja com valores
// let outroArray = []; // Declarando vazio

// let primeiroElemento = arrayDeNomes[0]; //Acessa o valor do primeiro elemento
// arrayDeNomes[1] = "Fellipe"; //Atribui um valor ao segundo elemento

// //Loop para exibição dos elementos de um array
// for (let index = 0; index < arrayDeNomes.length; index++) {
//     console.log(arrayDeNomes[index]);
// }
//-------------------------------------------------------------------------------------------
// exercicio 1 : 1 - Crie um algoritmo que receba um número inteiro positivo e um array. 
// Popule o array e no final exiba os índices em que número inserido aparece nesse array. 
// Para testes do exercício use até 10 elementos no array.

// 2 - Crie um algoritmo que peça 5 números ao usuário, coloque eles em um array, depois exiba esse array. 
// Modifique os elementos do array de modo que a sequência de números fique ao contrário.

// Ex.: entrada: 1, 2, 3, 4, 5 -> saída: 5, 4, 3, 2 , 1

// 3 - Refaça o script anterior, mas agora pergunte ao usuário quantos números ele deseja inserir no array. 
// Depois, o usuário vai preenchendo elemento por elemento do vetor, ao final, exiba o array e o array ao contrário

// 4 - Crie um algoritmo que peça um número inteiro positivo para o usuário. 
// Em seguida, popule um array com os números de Fibonacci (o próximo número da sequência é a soma dos 2 números anteriores).
// Na hora de somar com os termos anteriores, some com elementos anteriores do array. 
// Faça com que o array tenha no máximo 10 elementos
// Para iniciar a sequência use o (número inserido - 1).

// Ex.: inseriu o número 8, a sequência deve começar da

// eguinte maneira 7 8 15 23 ...
//-----------------------------------------------------------------------------------------------
const array = [];
const indices = [];
let contadorIndice = 0;

const numeroProcurado = parseInt(prompt("Digite o numero a ser procurado: "));

for (let i = 0; i < 10; i++) { //SUPOMOS QUE O ARRAY TEM ATÉ 10 ELEMENTOS
    const elemento = parseInt(prompt(`Digite o elemento ${i + 1}:`));
    array[i] = elemento;
}

for (let i = 0; i < 10; i++) {//SUPOMOS QUE O ARRAY TEM ATE 10 ELEMENTOS
    if (array[i] === numeroProcurado) {
        indices[contadorIndice] = i;
        contadorIndice++;
    }
}

console.log(`O numero ${numeroProcurado} foi encontrado nos indices: ${indices}`);

//CRIANDO VARIAVEIS 1
let array1 = [];
let arrayInvertido = [];

//POPULANDO O ARRAY
for (let i = 0; i < 5; i++) {
    let numero = parseInt(prompt("Digite o " + (i + 1) + "º numero"));
    array[i] = numero;
}

console.log("Array original: " + array1);

//INVERTENDO ARRAY
let contador = 4;
for (let i = 0; i < 5; i++) {
    arrayInvertido[i] = array[contador];
    contador--;
}

console.log("Array invertido: " + arrayInvertido);

//CRIANDO VARIAVEIS 2
let array2 = [];
let arrayInvertido2 = [];
let quantidade = parseInt(prompt("Digite a quantidade de numeros para inserir no array"));
//POPULANDO ARRAY
for (let i = 0; i < quantidade; i++) {
    let numero = parseInt(prompt("Digite o " + (i + 1) + "º numero"));
    array2[i] = numero;
}

console.log("Array original: " + array2);

//INVERTENDO ARRAY
contador = quantidade - 1;
for (let i = 0; i < 5; i++) {
    arrayInvertido2[i] = array2[contador];
    contador--;
}

console.log("Array invertido: " + arrayInvertido2);

//CRIANDO VARIAVEIS
numero = parseInt(prompt("Digite um numero inteiro e positivo"));
let fibonacci = [];
fibonacci[0] = 0;
fibonacci[1] = 1;

//CRIANDO LOOP
for (let i = 2; i < 10; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

console.log("Fibonacci: " + fibonacci);