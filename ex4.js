
//AJUSTANDO O CONSTRUTOR DE OBJETOS:

function Filme(titulo, notaAvaliacao, qtdAvaliacao, duracao, anoPublicacao, genero){
    this.titulo = titulo;
    this.notaAvaliacao = notaAvaliacao;
    this.qtdAvaliacao = qtdAvaliacao;
    this.duracao = duracao;
    this.anoPublicacao = anoPublicacao;
    this.genero = genero;

    this.show = function () {
        console.log(this.titulo);
        console.log(this.notaAvaliacao);
        console.log(this.qtdAvaliacao);
        console.log(this.duracao);
        console.log(this.anoPublicacao);
        console.table(this.genero); 
    }

    this.set = function(titulo, notaAvaliacao, qtdAvaliacao, duracao, anoPublicacao, genero){
        this.titulo = titulo;
        this.notaAvaliacao = notaAvaliacao;
        this.qtdAvaliacao = qtdAvaliacao;
        this.duracao = duracao;
        this.anoPublicacao = anoPublicacao;
        this.genero = genero;

    }

    this.adicionarAvaliacao = function(nota){
        this.notaAvaliacao = (this.notaAvaliacao * this.qtdAvaliacao + nota)/(this.qtdAvaliacao + 1);
        this.qtdAvaliacao++;
    }
}

let filme1 = new Filme("O jogo da Imitação", 8.0, 1, 114, 2014, ["Biografia", "Drama", "Suspense","Guerra"]);

filme1.show();

filme1.adicionarAvaliacao(10);

filme1.show();

/*

filme1.set("Estrelas Além do Tempo", 7.8, 1, 127, 2016, ["Biografia", "Drama", "História"]);

filme1.show();

let filme2 = new Filme("Top Gun", 8.6, 1, 130, 2022, ["Ação", "Drama"]);

filme2.show();
*/