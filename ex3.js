//CRIANDO UM CONSTRUTOR DE OBJETOS:

function criarFilme(titulo, notaAvaliacao, duracao, anoPublicacao, genero){
    let filme = {};

    filme.titulo = titulo;
    filme.notaAvaliacao = notaAvaliacao;
    filme.duracao = duracao;
    filme.anoPublicacao = anoPublicacao;
    filme.genero = genero;

    filme.show = function () {
        console.log(this.titulo);
        console.log(this.notaAvaliacao);
        console.log(this.duracao);
        console.log(this.anoPublicacao);
        console.table(this.genero); 
    }

    filme.set = function(titulo, notaAvaliacao, duracao, anoPublicacao, genero){
        this.titulo = titulo;
        this.notaAvaliacao = notaAvaliacao;
        this.duracao = duracao;
        this.anoPublicacao = anoPublicacao;
        this.genero = genero;

    }

return filme; 

}

let filme1 = criarFilme("O jogo da Imitação", 8.0, 114, 2014, ["Biografia", "Drama", "Suspense","Guerra"]);

filme1.show();

filme1.set("Estrelas Além do Tempo", 7.8, 127, 2016, ["Biografia", "Drama", "História"]);

filme1.show();

let filme2 = criarFilme("Top Gun", 8.6, 130, 2022, ["Ação", "Drama"]);

filme2.show();