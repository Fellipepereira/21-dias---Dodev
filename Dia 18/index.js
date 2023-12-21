//Objetos + Funções

// 1 - Crie uma classe Livro com as seguintes propriedades:
// Titulo - qual o nome do livro;
// Autor- quem escreveu o livro;
// Editora - qual empresa que publicou o livro;
// Ano de publicação - o ano em que o livro foi publicado;
// Disponibilidade - se o livro está disponível ou não (verdadeiro ou falso);

// 2 - Crie um método construtor para a classe Livro que recebe como parâmetro as informações que serão atribuídas as 
// propriedades, com exceção de “Disponibilidade” que deve ter por padrão o valor “true” quando o objeto for criado

// 3 - Crie alguns objetos da classe Livro e adicione-os em um array;

// 4 - Crie uma classe Biblioteca com as seguintes propriedades:
//    - Nome - nome da biblioteca;
//    - Endereco - onde a biblioteca fica localizada;
//    - Telefone - telefone de contato da biblioteca;
//    - Acervo de livros - todos os livros que existem na biblioteca

// 5 - Crie um método construtor para a classe Biblioteca que deve receber como parâmetro as informações que serão atribuídas 
// as propriedades, a propriedade Acervo de Livros deve receber um array;

// 6 - Adicione na classe Biblioteca um método para buscar um livro específico, deve passar como parâmetro o nome do livro e 
// exibir no console todas as informações de um livro;

// 7 - Adicione na classe Biblioteca um método de empréstimo de um livro, deve ser passado como parâmetro o nome do livro, 
// então verificar a disponibilidade e se estiver disponível retornar true e trocar o valor da propriedade do livro para 
// false, se não estiver disponível retornar false.

// 8 - Adicione na classe Biblioteca um método de devolução de um livro, deve ser passado como parâmetro o nome do livro, 
// então trocar o valor da propriedade de disponibilidade desse livro para true;

// 9 - Crie um objeto da classe Biblioteca e chame seus métodos.

//CRIANDO CLASSE LIVRO
class Livro {
    Titulo
    Autor 
    Editora 
    AnoDePublicacao
    Disponibilidade = true
    constructor(titulo, autor, editora, anoDePublicacao) {
        this.Titulo = titulo
        this.Autor = autor
        this.Editora = editora 
        this. AnoDePublicacao = anoDePublicacao 
    }
}

//CRIANDO OBJETOS DA CLASSE LIVRO
let livros = []
livros.push(new Livro("livro1", "Marcos", "editora A", 2001))
livros.push(new Livro("livro2", "Marcos", "editora F", 1997))
livros.push(new Livro("livro3", "Carlos", "editora F", 2010))
livros.push(new Livro("livro4", "João", "editora A", 2005))
livros.push(new Livro("livro5", "Fábio", "editora C", 2020))

//CRIANDO CLASSE BIBLIOTECA
class Biblioteca {
    Nome 
    Endereco
    Telefone
    AcervoLivros = []
    constructor(nome, telefone, endereco, livro) {
        this.Nome = nome;
        this.Telefone = telefone;
        this.Endereco = endereco;
        this.AcervoLivros = livro; 
    }
    BuscarLivroPeloTitulo(titulo) {
        this.AcervoLivros.forEach(livro => {
            if (livro.Titulo == titulo) {
                console.log(livro);
            }
        });
    }
    EmprestarLivro(titulo) {
        let emprestado = false;
        this.AcervoLivros.forEach(livro => {
            if (livro.Titulo == titulo) {
                if (livro.Disponibilidade == true) {
                    livro.Disponibilidade = false;
                    emprestado = true;
                }
            }
        });
        if (emprestado) {
            return true;
        } else {
            return false;
        }
    }
    DevolverLivro(titulo) {
        this.AcervoLivros.forEach(livro => {
            if (livro.Titulo == titulo) {
                livro.Disponibilidade = true;
                console.log("Livro devolvido");
            }
        });
    }
}

let biblioteca = new Biblioteca("Biblioteca Fellipe", "123456", "Rua 2", []);

biblioteca.AcervoLivros.push(new Livro("livro1", "autor1", "editora1", 2022));
biblioteca.AcervoLivros.push(new Livro("livro2", "autor2", "editora2", 2021));

biblioteca.BuscarLivroPeloTitulo("livro2")
biblioteca.EmprestarLivro("livro1")
biblioteca.DevolverLivro("livro1")