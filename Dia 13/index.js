// Diferença de classe e objeto

//exercicio 1: 1 - Crie uma classe para representar o seu computador:
// .Tipo - desktop ou notebook;
// .Processador - nome do seu processador, ex: Ryzen 5
// .Video - Integrado ou Dedicado;
// .Armazenamento - número em GB de memória, ex: 500 ou 1000;
// .MemoriaRam - número em GB de memória, ex: 4, 8 ou 16;
// .SSD - True ou False

// 2 - Implemente um método nessa classe para exibir as informações no console;

// Se você não souber todas essas informações do seu computador, não tem problema preencha com os valores de exemplo mesmo.

// class Computador {
//     Tipo
//     Processador
//     Video
//     Armazenamento
//     MemoriaRam
//     Ssd

//     constructor(tipo, processador, video, armazenamento, memoriaRam, ssd) {
//         this.Tipo = tipo;
//         this.Processador = processador;
//         this.Video = video;
//         this.Armazenamento = armazenamento;
//         this.MemoriaRam = memoriaRam;
//         this.Ssd = ssd;
//     }

//     ExibirInformacoes() {
//         console.log("Informações do Computador:");
//         console.log(`Tipo: ${this.Tipo}`);
//         console.log(`Processador: ${this.Processador}`);
//         console.log(`Vídeo: ${this.Video}`);
//         console.log(`Armazenamento: ${this.Armazenamento} GB`);
//         console.log(`Memória RAM: ${this.MemoriaRam} GB`);
//         console.log(`SSD: ${this.Ssd}`);
//     }
// }

// //EXEMPLO DE USO
// const meuComputador = new Computador("notebook acer", "i5", "Dedicado", 240, 8, true);
// meuComputador.ExibirInformacoes();

//exercicio 2: 
// 1 - Crie uma classe Carro com as seguintes propriedades:
// Nome - qual a equipe do carro Ferrari, Mercedes, McLaren, etc;
// Potencia - número de cavalos de potência do carro;
// VelocidadeMaxima - qual a maior velocidade que o carro pode alcançar;
// Aceleracao - o tempo em segundos que o carro leva para ir de 0 a 100 km/h

// 2 - Adicione na classe carro um método que recebe como parâmetro uma distância em metros e calcula o tempo em segundos 
// para percorrer essa distância. Use a seguinte fórmula para o cálculo: 

// resultado = distância / (VelocidadeMaxima / Aceleracao). 

// A função deve retornar esse resultado;

// 3 - Crie uma classe Corrida com as seguintes propriedades:
//     Nome - nome do local da corrida;
//    Tipo - uma corrida pode ser Fórmula 1, Stock Car, Rally, etc;
//    Distancia - o total em metros da corrida;
//    Participantes - um array de objetos da classe Carro
//    Vencedor - qual a equipe que ganhou a corrida;

// 4 - Adicione na classe Corrida um método que verifica qual foi o carro que completou a corrida em menor tempo, 
//para isso utilize o método criado na classe carro. Salve o nome do carro que fez o menor tempo na propriedade “Vencedor”.

// 5 - Adicione na classe Corrida um método que exibe na tela quem é o vencedor da corrida.

// 6 - Crie um objeto da classe Corrida e preencha a propriedade Participantes com alguns objetos da calsse Carro.

// 7 - Chame o método para verificar quem fez o menor tempo e por fim o método que exibe o vencedor.

class Carro {
    // Nome
    // Potencia
    // VelocidadeMaxima
    // Aceleracao

    constructor(nome, potencia, velocidadeMaxima, aceleracao) {
        this.nome = nome;
        this.potencia = potencia;
        this.velocidadeMaxima = velocidadeMaxima;
        this.aceleracao = aceleracao;
    }

    calcularTempo(distancia) {
        const resultado = distancia / (this.velocidadeMaxima / this.aceleracao);
        return resultado;
    }
}
class Corrida {
    // Nome
    // Tipo
    // Distancia
    // Vencedor
    // Participantes

    constructor(nome, tipo, distancia, participantes) {
        this.nome = nome;
        this.tipo = tipo;
        this.distancia = distancia;
        this.vencedor = null;
        this.participantes = participantes;
    }

    verificarVencedor() {
        //     let menorTempo = this.Participantes[0].CalcularTempoMedio(this.Distancia)
        //     let vencedor = this.Participantes[0]

        //     for (let index = 1; index < this.Participantes.length; index++) {
        //         let tempo = this.Participantes[index].CalcularTempoMedio(this.Distancia)
        //         if (tempo < menorTempo) {
        //             menorTempo = tempo
        //             vencedor = this.Participantes[index]
        //         }
        //     }

        //     return this.Vencedor = vencedor
        // }

        let menorTempo = Infinity;
        for (let i = 0; i < this.participantes.length; i++) {
            const tempo = this.participantes[i].calcularTempo(this.distancia);
            if (tempo < menorTempo) {
                menorTempo = tempo;
                this.vencedor = this.participantes[i].nome;
            }
        }

    }

    exibirVencedor() {
        // alert("O vencedor é: " + this.Vencedor.Nome)
        console.log(`O vencedor da corrida é a equipe ${this.vencedor}!`);
    }
}

// let corrida = new Corrida("Monza", "Fórmula 1", 60000)

// corrida.Participantes[0] = new Carro("kicks", 120, 160, 5)
// corrida.Participantes[1] = new Carro("Marea", 210, 200, 9)
// corrida.Participantes[2] = new Carro("Peugeot 206", 300, 220, 10)

const ferrari = new Carro("Ferrari", 800, 350, 3.5);
const mercedes = new Carro("Mercedes", 750, 330, 4.0);
const mclaren = new Carro("McLaren", 700, 320, 4.5);

const participantes = [ferrari, mercedes, mclaren];

const corrida = new Corrida("Circuito de Mônaco", "Fórmula 1", 3000, participantes);

corrida.verificarVencedor();
corrida.exibirVencedor();