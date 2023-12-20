// Funções de array

//EXERCICIO:
// 1 - Crie uma função que solicite ao seu usuário o que ele deseja fazer: cadastrar, fazer login, excluir um cadastro ou 
// encerrar o programa. Essa função deve retornar a opção escolhida pelo usuário.


// 2 - Crie uma função de cadastro que solicite dois valores ao usuário, um nome e uma senha e guarde cada um no seu 
// respectivo array.


// 3 - Crie uma função de login que recebe dois valores como parâmetro, um nome e uma senha, depois procure o nome 
// recebido no array de nomes e em caso positivo compare a senha no array de senhas. Se as duas comparações forem válidas 
// retorne true se uma delas não for válida retorne false.

// 4 - Crie uma função de exclusão de cadastro que recebe um nome como parâmetro, então procure pelo nome no array de 
// nomes e exclua ele e a senha correspondente do outro array.


// 5 - Utilizando as funções criadas, faça o fluxo de funcionamento do código, considere que o usuário pode escolher 
// quando encerrar o programa conforme as opções e que no login caso seja bem sucedido retorna uma mensagem “Login feito 
// com sucesso!” e em caso negativo “Nome ou senha incorretos!”

// ARRAYS PARA ARMAZENAR OS NOMES E SENHAS
let nomes = [];
let senhas = [];

//FUNCAO PARA SOLICITAR A OPCAO AO USUARIO
function solicitarOpcao() {
    let opcao = prompt("Escolha uma opção:\n1. Cadastrar\n2. Fazer login" + "\n3. Excluir cadastro\n4. Encerrar programa");
    return opcao;
}

//FUNCAO PARA SOLICITAR NOME E SENHA AO USUARIO
function cadastrarUsuario() {
    let nome = prompt("Digite o seu nome:")
    let senha = prompt("Digite a sua senha:")
    nomes.push(nome)
    senhas.push(senha)
}

// FUNCAO PARA FAZER LOGIN
function fazerLogin(nome, senha) {
    let indice = nomes.indexOf(nome);
    if (indice !== -1 && senhas[indice] == senha) {
        return true;
    } else {
        return false;
    }
}

//FUNCAO PARA EXCLUIR UM CADASTRO
function excluirCadastro(nome) {
    let indice = nomes.indexOf(nome);
    if (indice !== -1) {
        nomes.splice(indice, 1);
        senhas.splice(indice, 1);
        console.log("Cadastro excluído com suscesso!");
    } else {
        console.log("Usuário não encontrado.");
    }
}

//FLUXO DE FUNCIONAMENTO DO PROGRAMA
let continuar = true;
while (continuar) {
    let opcao = solicitarOpcao();

    switch (opcao) {
        case "1":
            cadastrarUsuario();
            break;
        case "2":
            let nome = prompt("Digite seu nome:")
            let senha = prompt("Digite sua senha:")
            let login = fazerLogin(nome, senha);
            if (login) {
                console.log("Login efetuado com suscesso!")
            } else {
                console.log("Nome ou senha incorretos!");
            }
            break;
        case "3":
            let nomeExcluir = prompt("Digite o nome do usuário que deseja excluir:")
            excluirCadastro(nomeExcluir);
            break;
        case "4":
            continuar = false;
            break;
        default:
            console.log("Opção inválida. Tente novamente.");
            break;
    }
}