let livro = {
    nome: "",
    autor: "",
    tamanho: "",
    genero: "",
  };
  
  let biblioteca = [];
  
  console.log(
    "digite 'adicionar' para adicionar um livro, 'remover' para remover um livro e 'listar' para mostrar a biblioteca"
  );
  
  process.stdin.on("data", function (data) {
    entradaUser = data.toString().trim().toLowerCase();
  
    switch (entradaUser) {
      case "adicionar":
        console.log("digite o nome do livro");
        break;
      case "remover":
        console.log("digite o nome do livro que quer remover:");
        let livroRemover = data.toString().trim();
        let livroEncontrado = false;
        biblioteca.forEach((livro, index) => {
          if (livro.nome.toLowerCase() === livroRemover.toLowerCase()) {
            biblioteca.splice(index, 1);
            livroEncontrado = true;
          }
        });
        if (livroEncontrado) {
          console.log("Livro removido com sucesso.");
        } else {
          console.log("O livro não foi encontrado na biblioteca.");
        }
        break;
      case "sair":
        process.exit();
        break;
      case "listar":
        if (biblioteca === 0) {
          console.log("a biblioteca esta vazia");
        } else {
          console.log("livros na biblioteca:");
          biblioteca.forEach((livro) => {
            console.log(livro.nome, livro.autor, livro.tamanho, livro.genero);
          });
        }
        break;
      default:
        if (!livro.nome) {
          livro.nome = entradaUser;
          console.log("digite o tamanho do livro");
        } else if (!livro.tamanho) {
          livro.tamanho = entradaUser;
          console.log("escreva o autor do livro");
        } else if (!livro.autor) {
          livro.autor = entradaUser;
          console.log("escreva o genero do livro");
        } else if (!livro.genero) {
          livro.genero = entradaUser;
          biblioteca.push(livro);
          console.log("livro adicionado");
          livro = {
            nome: "",
            autor: "",
            tamanho: "",
            genero: "",
          };
        }
        break;
    }
  });
  
  console.log;