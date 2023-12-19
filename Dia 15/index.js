// EXERCICIO Função + Array

// 1 - Crie dois arrays: arrayA e arrayB. Preencha os dois arrays com 10 números cada, pode declarar já com valores;
//   let arrayA = [13,20,10,22,24,20,27,17,19,14]

//   let arrayB = [24,22,23,11,15,17,29,14,16,21]

// 2 - Implemente uma função que receba dois arrays como parâmetro. Essa função deve retornar um array que contenha apenas 
// os números em comum nos dois arrays recebidos como parâmetro.

// 3 - Se um número se repetir apenas no mesmo array, ele NÃO deve ser adicionado como um número comum.

// 4 - No array de saída NÃO deve ter números repetidos

// Exemplo: 

// Entrada: arrayA = [13,20,10,22,24,20,27,17,19,14]

//          arrayB = [24,22,23,11,15,17,29,14,16,21]

// Saída:   numerosEmComum = [22,24,17,14]

// DECLARANDO ARRAYS QUE VAMOS UTILIZAR
let arrayA = [13,20,10,22,24,20,27,17,19,14]
let arrayB = [24,22,23,11,15,17,29,14,16,21]

//DECLARANDO A FUNÇÃO COM OS PARAMETROS PEDIDOS
function AcharNumerosEmComum(arrayUm, arrayDois) {
    let resultado = [] //DECLARANDO ARRAY DE NUMEROS EM COMUM
    let contadorResultado = 0 //CONTADOR DESSE ARRAY

    //O PRIMEIRO FOR PERCORRE O ARRAYUM
    for (let i = 0; i < arrayUm.length; i++) {
        //O SEGUNDO FOR PERCORRE O ARRAYDOIS, PARA CADA NUMERO DE ARRAYUM ELE COMPARA COM TODOS OS NUMEROS DE ARRAYDOIS
        for (let j = 0; j < arrayDois.length; j++) {
            //SE A COMPARAÇÃO FOR BEM SUSCEDIDA ELE ADICIONA ESSE NUMERO NO ARRAY DE NUMEROS EM COMUM E ATRIBUI O VALOR
            //MAXIMO AO CONTADOR J ASSIM ENCERRANDO A VERIFICAÇÃO PARA ESSE NUMERO E EVITA NUMEROS DUPLICADOS
            if (arrayUm[i] == arrayDois[j]) {
                resultado[contadorResultado] = arrayUm[i]
                contadorResultado++
                j = arrayDois.length
            }
        }
    }

    return resultado
}

console.log(AcharNumerosEmComum(arrayA, arrayB))