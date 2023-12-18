//EXERCICIO 1 : 1 - Crie 2 arrays: um para nomes e um para senhas

// 2- Solicite ao seu usuário o que ele deseja fazer: cadastrar, fazer login, excluir um cadastro ou encerrar o programa.

// 3 - Faça o fluxo de funcionamento do código, considere que o usuário pode escolher quando encerrar o programa 
// conforme as opções.

// 4 - Se a opção escolhida for cadastro, solicite dois valores ao usuário, um nome e uma senha e guarde cada um no 
// seu respectivo array.

// 5 - Se a opção escolhida for login solicite ao usuário um nome e uma senha, depois procure o nome recebido no array de 
// nomes e em caso positivo compare a senha no array de senhas. Se as duas comparações forem válidas exiba uma mensagem 
// de sucesso

// 6 - Se a opção escolhida for excluir um cadastro solicite um nome ao usuário, então procure pelo nome no array de 
// nomes e exclua ele e a senha correspondente do outro array, por fim organize o array para eliminar os espaços vazios.

//CRIANDO 2 ARRAYS PARA NOMES E SENHAS:
// let nomes = [];
// let senhas = [];
// let contador = 0;

// let continuar = true;

// while (continuar) {
//     //SOLICITANDO A OPERAÇÃO QUE O USUARIO DESEJA FAZER E ORGANIZANDO A EXECUÇÃO DO CODIGO COM UM SWITCHcASE DENTRO DE UM WHILE
//     let opcao = prompt("O que deseja fazer? 1 - Cadastro / 2 - Login / 3 - Excluir / 4 - Encerrar");

//     switch (opcao) {
//         case "1":
//             //CRIANDO UM CADASTRO DE USUARIO
//             nomes[contador] = prompt("Qual o nome?");
//             senhas[contador] = prompt("Qual a senha");
//             contador++;

//             break;
//         case "2":
//             //CRIANDO LOGIN
//             let nome = prompt("Qual o nome?");
//             let senha = prompt("Qual a senha");
//             let loginValido =  false;
            
//             for (let i = 0; i < nomes.length; i++) {
//                 if (nome == nomes[i] && senha == senhas[i]) {
//                     loginValido = true;
//                 }
//             }

//             if (loginValido) {
//                 alert("Loguin feito com suscesso. Bem-vindo!")
//             } else {
//                 alert("Login ou senha incorretos!")
//             }

//             break;
//         case "3":
//             // CRIANDO A OPÇÃO "EXCLUIR"
//             let nomeExcluir = prompt("Qual o nome que deseja excluir?");
//             let nomesAux = [];
//             let senhasAux = [];
//             let contadorAux = 0;
            
//             for (let i = 0; i < contador; i++) {
//                 if (nomeExcluir == nomes[i]) {
//                     alert("Cadastro excluido com suscesso")
//                 } else {
//                     nomesAux[contadorAux] = nomes[i];
//                     senhasAux[contadorAux] = senhas[i];
//                     contadorAux++;
//                 }
//             }

//             nomes = nomesAux;
//             senhas = senhasAux;
//             contador--

//             break;
//         case "4":
//             continuar = false;
//             break;
//         default:
//             console.log("Opção invalida, escolha outra!");
//             break;        
//     }
// }

//Resolução alternativa para login e exclusão

//FUNÇÃO PARA ENCONTRAR O INDICE DE UM NOME NO ARRAY DE NOMES
function encontrarIndice(nome) {
    for (let i = 0; i < nomes.length; i++) {
        if (nomes[i] === nome) {
            return i;
        }
    }
    return -1;
}

let nomes = [];
let senhas = [];

while (true) {
    const opcao = prompt("Digite a opção desejada: 1 -cadastrar, 2 - fazer login, 3 - excluir um cadastro ou 4 - encerrar o programa.");

    if (opcao === "1") {
        //LOGICA DO LOGIN
        const nome = prompt("Digite o nome de usuário:");
        const senha = prompt("Digite a senha:");

        nomes.push(nome);
        senhas.push(senha);

        console.log("Cadastro realizado com sucesso!");

    } else if (opcao === "2") {
        const nome = prompt("Digite o nome de usuário:");
        const senha = prompt("Digite a senha:");
        
        const indice = encontrarIndice(nome);

        if (indice !== -1 && senhas[indice] === senha) {
            console.log("Loguin bem-suscedido!");
        } else {
            console.log("Nome de usuário ou senha incorretos.")
        }
    } else if (opcao === "3") {
        //LOGICA PARA EXCLUIR UM CADASTRO
        const nomeExcluir = prompt("Digite o nome de usuário a ser excluido:");

        const indiceExcluir = encontrarIndice(nomeExcluir);

        if (indiceExcluir !== -1) {
            nomes.splice(indiceExcluir, 1);
            senhas.splice(indiceExcluir, 1);
            
            console.log("Cadastro excluido com suscesso!");
        } else {
            console.log("Nome de usuário não encontrado.");
        }
    } else if (opcao === "4") {
        console.log("Programa encerrado.");
        break;
    } else {
        console.log("Opção inválida. Tente novamente.");
    }
}