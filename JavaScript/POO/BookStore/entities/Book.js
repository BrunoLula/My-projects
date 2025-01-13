/*Aqui iremos criar uma classe para os books (livros):
Essa classe será uma classe FILHA da classe Product e portanto herdará todas as suas propriedades
e metodos.

Então para começar iremos IMPORTAR a classe Product*/
const Product = require("./Product.js");

//Aagora iremos criar a classe Book
class Book extends Product {
  /*Aqui dentro da classe eu irei usar o metodo construtor porque ALEM das propriedades ja herdadas
  da classe Product eu irei setar mais algumas:
  tittle - o titulo desse livro
  sinopsys - uma sinopse para esse livro
  genre - o genero do livro
  pages - a quantidade de paginas desse livro
  author - onde essa propriedade irá receber uma instancia da classe author
  e obviamente estou passando novamente as propriedades herdadas*/
  constructor(
    tittle,
    sinopsys,
    genre,
    pages,
    author,
    description,
    price,
    inStock = 0
  ) {
    /*Aqui dentro do constructor o PRIMEIRO passo como ja aprendemos é chamar o metodo Super e passar
    todas as propriedades que pertencem tambem a classe mae (Product) que nesse caso é o name, description
    o price e o inStock*/
    super(`Livro ${tittle}`, description, price, inStock);

    //Agora abaixo irei estanciar as propriedades exlcusivas DESSA CLASSE
    this.tittle = tittle;
    this.sinopsys = sinopsys;
    this.genre = genre;
    this.pages = pages;
    this.author = author;
  }
}

//Agora iremos EXPORTAR essa classe Book usando o ESModules
module.exports = Book;
