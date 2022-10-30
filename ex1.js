
const exibeFilme = (filme) => {
    console.log(filme.titulo);
    console.log(filme.notaAvaliacao);
    console.log(filme.duracao);
    console.log(filme.anoPublicacao);
    console.table(filme.genero); 
};

let f = {
    titulo: "O jogo da Imitação",
    notaAvaliacao: 8.0,
    duracao: 114,
    anoPublicacao: 2014,
    genero: ["Biografia", "Drama", "Suspense", "Guerra"] 

};

exibeFilme(f);


f.titulo = "Estrelas Além do Tempo",
f.notaAvaliacao = 7.8,
f.duracao = 127,
f.anoPublicacao = 2016,
f.genero = ["Biografia", "Drama", "História"] 

exibeFilme(f);

