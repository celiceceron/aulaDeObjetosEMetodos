// ENXUGANDO O CÓDIGO:
const exibeFilme = (filme) => {
    console.log(filme.titulo);
    console.log(filme.notaAvaliacao);
    console.log(filme.duracao);
    console.log(filme.anoPublicacao);
    console.table(filme.genero); 
};

let filme = {
    titulo: "O jogo da Imitação",
    notaAvaliacao: 8.0,
    duracao: 114,
    anoPublicacao: 2014,
    genero: ["Biografia", "Drama", "Suspense", "Guerra"], 
    show: function () {
        console.log(this.titulo);
        console.log(this.notaAvaliacao);
        console.log(this.duracao);
        console.log(this.anoPublicacao);
        console.table(this.genero); 
    },
    set: function(titulo, notaAvaliacao, duracao, anoPublicacao, genero){
        this.titulo = titulo;
        this.notaAvaliacao = notaAvaliacao;
        this.duracao = notaAvaliacao;
        this.anoPublicacao = anoPublicacao;
        this.genero = genero;
    }
     
};

filme.show();

filme.set("Estrelas Além do Tempo", 7.8, 127, 2016, ["Biografia", "Drama", "História"]);

filme.show(filme);
