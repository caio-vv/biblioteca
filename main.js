let livro = {
  nome: "",
  autor: "",
  tamanho: "",
  genero: "",
};

let biblioteca = [];
let opcao = 0;

console.log(
  "digite '1' para adicionar um livro, '3' para remover um livro, '2' para mostrar a biblioteca e '4' para pesquisar um livro"
);

process.stdin.on("data", function (data) {
  entradaUser = data.toString().trim().toLowerCase();
  if (!opcao) {
    opcao = Number(entradaUser);
  } else {
    switch (opcao) {
      case 1:
        if (!livro.nome) {
          livro.nome = entradaUser;
          console.log("digite autor");
        } else if (!livro.autor) {
          livro.autor = entradaUser;
          console.log("digite tamanho");
        } else if (!livro.tamanho) {
          livro.tamanho = entradaUser;
          console.log("digite genero");
        } else if (!livro.genero) {
          livro.genero = entradaUser;
          biblioteca.push(livro);
          livro = {
            nome: "",
            autor: "",
            tamanho: "",
            genero: "",
          };
          opcao = 0;
        }
        break;
      case 2:
        if (biblioteca === 0) {
          console.log("a biblioteca esta vazia");
          opcao = 0;
        } else {
          console.log("livros na biblioteca:");
          biblioteca.forEach((livros) => {
            console.log(
              livros.nome,
              livros.autor,
              livros.genero,
              livros.tamanho
            );
          });
        }
        break; 

      case 3:
        let livroRemover = data.toString().trim().toLowerCase();
        let livroEncontrado = false;
        biblioteca.forEach((livro, index) => {
          if (livro.nome.toLowerCase() == livroRemover.toLowerCase()) {
            biblioteca.splice(index, 1);
            livroEncontrado = true;
          }
        });
        if (livroEncontrado) {
          console.log("Livro removido com sucesso.");
          opcao = 0
        } else {
          console.log("O livro não foi encontrado na biblioteca.");
          opcao = 0
        }
        break;
    }
  }
});
