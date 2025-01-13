/*Nesse arquivo iremos criar a classe Author (autor):
Iremos criar essa classe porque estamos trabalhando com livros e todo livro tem um author.*/
class Author {
  /*Essa classe tambem será bem simples com somente 3 parametros:
  name - o nome desse author
  nacionality - a nacionalidade desse author
  bio - uma biografia desse author */
  constructor(name, nacionality, bio) {
    this.name = name;
    this.nacionality = nacionality;
    this.bio = bio;
  }
}

//Agora iremos EXPORTAR esse metodo usando o ESModules
module.exports = Author;
