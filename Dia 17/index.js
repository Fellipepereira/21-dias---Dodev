// Array + Funções
//EXERCICIO:
// Criando um sistema de reservas para um hotel:

// - Um hotel deve possuir: id, nome, categoria, endereço e telefone;

// - Uma reserva deve possuir: id, id do hotel, nome do responsável, dia de entrada e dia de saída;

// 1 - Crie 2 arrays, um para guardar hotéis e um para reservas

// 2 - Crie funções para cadastrar um hotel e uma reserva;

// 3 - Crie uma função que recebe como parâmetro o id do hotel e exibe na tela todas as reservas neste hotel com as 
// seguintes informações: nome do hotel - nome do responsável da reserva - dia de entrada - dia de saída

// 4 - Crie uma função que recebe como parâmetro o id de uma reserva e exibe no console: nome do hotel - endereço - 
// dia de entrada - dia de saída

// 5 - Crie uma função que recebe como parâmetro o nome de uma pessoa e exibe na tela todas as suas reservas;

// 6 - Crie uma função que recebe como parâmetro uma categoria e retorna um array com todos os hotéis nessa categoria;

// 7 - Crie uma função que recebe o id de um hotel e um telefone como parâmetro, a função deve atualizar o telefone de 
// cadastro com o número recebido;

// 8 - Crie um fluxo de funcionamento para o algoritmo, o usuário deve poder escolher quando encerrar o programa.

// Regras:

// O id não pode ser igual a nenhum outro já existente;
// O dia de entrada não pode ser maior que o de saída;
// No cadastro de uma reserva o id do hotel deve ser válido, ou seja, não deve permitir o cadastro de um hotel que não 
// esteja no sistema;

// CRIANDO CLASSE HOTEL
class Hotel {
    Id 
    Nome 
    Categoria
    Endereco
    Telefone
    constructor (id, nome, categoria, endereco, telefone) {
        this.Id = id
        this.Nome = nome
        this.Categoria = categoria 
        this.Endereco = endereco 
        this.Telefone = telefone
    }
}

//CRIANDO CLASSE RESERVA
class Reserva {
    Id 
    IdHotel 
    Responsavel 
    DiaEntrada
    DiaSaida
    constructor (id, idHotel, responsavel, diaEntrada, diaSaida) {
        this.Id = id
        this.IdHotel = idHotel 
        this.Responsavel = responsavel 
        this.DiaEntrada = diaEntrada 
        this.DiaSaida = diaSaida
    }
}

//CRIANDO ARRAYS
let hoteis = []
let reservas = []
let idHotel = 1
let idReserva = 1

//FUNÇÃO PARA CADASTRAR HOTEL
function CadastrarHotel() {
    let nome = prompt("Digite o nome do hotel:")
    let categoria = parseInt(prompt("Digite a categoria do hotel"))
    let endereco = prompt("Digite o endereço do hotel:")
    let telefone = prompt("Digite o telefone do hotel:")
    let hotel = new Hotel(idHotel, nome, categoria, endereco, telefone)
    idHotel++
    hoteis.push(hotel)
}

//FUNÇÃO PARA CADASTRAR RESERVA
function CadastrarReserva() {
    let idHotel
    let existe = false
    do {
        idHotel = parseInt(prompt("Digite o id do hotel"))
        for (let i = 0; i < hoteis.length; i++) {
            if (idHotel == hoteis[i].Id) {
                i = hoteis.length
                existe = true
            } else if (i == hoteis.length - 1) {
                console.log("id de hotel não cadastrado")
            }
        }
    } while (!existe)

    let nome = prompt("Digite o nome do responsável:")
    let diaEntrada = parseInt(prompt("Digite o dia de entrada:"))
    let diaSaida
    do {
        diaSaida = parseInt(prompt("Digite o dia de saída"))
        if (diaSaida < diaEntrada) {
            console.log("O dia de saída deve ser maior que o dia de entrada")
        }
    }while (diaSaida < diaEntrada)

    let reserva = new Reserva(idReserva, idHotel, nome, diaEntrada, diaSaida)
    idReserva++
    reservas.push(reserva)
}
//FUNÇÃO PARA PROCURAR RESERVAS PELO HOTEL
function ProcurarReservasPeloHotel(idHotel) {
    reservas.forEach(reserva => {
        if (idHotel == reserva.IdHotel) {
            let i = idHotel -1
            console.log("hotel:", hoteis[i].Nome)
            console.log("responsável:", reserva.Responsavel)
            console.log("Dia de entrada:", reserva.DiaEntrada)
            console.log("Dia de saída:", reserva.DiaSaida)
        }
    })
}

//FUNÇÃO PARA PROCURAR HOTEL PELA RESERVA
function ProcurarHotelPelaReserva(idReserva) {
    let idHotel = reservas[idReserva - 1].IdHotel
    console.log("hotel:", hoteis[idHotel - 1].Nome)
    console.log("endereço:", hoteis[idHotel - 1].Endereco)
    console.log("Dia de entrada:", reservas[idReserva - 1].DiaEntrada)
    console.log("Dia de saída:", reservas[idReserva - 1].DiaSaida)
}

//FUNÇÃO PARA PROCURAR RESERVAS PELO RESPONSAVEL
function ProcurarReservasPeloNome(nome) {
    for (let i = 0; i < reservas.length; i++) {
        if (nome == reservas[i].Responsavel) {
            console.log("id da Reserva: " + reservas[i].Id)
            console.log("hotel: " + hoteis[(reservas[i].IdHotel) - 1].Nome)
        }
    }
}

//FUNÇÃO PARA PROCURAR HOTEIS PELA CATEGORIA
function ProcurarHotelPelaCategoria(categoria) {
    let hoteisProcurados = []
    for (let i = 0; i < hoteis.length; i++) {
        if (categoria == hoteis[i].Categoria) {
            hoteisProcurados.push(hoteis[i].Nome)
        }
    }
    return hoteisProcurados
}

//FUNÇÃO PARA ATUALIZAR TELEFONE DO HOTEL
function AtualizarTelefone(idHotel, telefone) {
    hoteis[idHotel - 1].Telefone = telefone
    console.log("Número de telefone atualizado!")
}

//FLUXO DE FUNCIONAMENTO
let continuar = true
do {
    let opcao = prompt("Escolha uma opção: \n1 - Cadastrar hotel \n2 - Cadastrar Reserva \n3 - Procurar reserva pelo hotel" + "\n4 - Procurar hotel pela reserva \n5 - Procurar reserva pelo responsável \n6 - Procurar hotéis por categoria" + "\n7 - Atualizar telefone de um hotel \n8 - Encerrar o programa")

    switch (opcao) {
        case "1":
            CadastrarHotel()
            break;
        case "2":
            CadastrarReserva()
            break;
        case "3":
            ProcurarReservasPeloHotel(prompt("Digite o id do hotel"))
            break;
        case "4":
            ProcurarHotelPelaReserva(prompt("Digite o id da reserva"))
            break;
        case "5":
            ProcurarReservasPeloNome(prompt("Digite o nome do responsável pela reserva"))
            break;
        case "6":
            let hoteisProcurados = ProcurarHotelPelaCategoria(parseInt(prompt("Digite a categoria que deseja procurar")))
            console.log(hoteisProcurados)
            break;
        case "7":
            let idHotel = parseInt(prompt("Digite o id do hotel que deseja atualizar"))
            let telefone = prompt("Digite o novo telefone")
            AtualizarTelefone(idHotel, telefone)
            break;
        case "8":
            console.log("Programa encerrado")
            continuar = false
            break;
        default:
            console.log("Opção inválida")
            break;
    }
} while (continuar)