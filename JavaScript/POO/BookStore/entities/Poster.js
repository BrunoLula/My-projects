//Aqui estou IMPORTANDO a classe Product
const Product = require("./Product.js");

/*Aqui estamos criando mais uma classe filha da classe Product, que sera uma classe de poster, mais
um produto dessa nossa loja*/
class Poster extends Product {
  /*Aqui estou usando o metodo construtor para definir 2 atributos que essa classe filha terá:
  width - o peso do poster
  height - a altura desse poster

  E como sabemos nos passamos TODOS os parametros pra dentro do constructor e nele chamamos o super
  e então passamos pra ele as propriedades que TAMBEM pertencem a classe mae, lembrando que a propri-
  edade 'inStock' casoNÃO seja passada por parametro assumira o valor de 0*/
  constructor(name, description, height, width, price, inStock = 0) {
    super(name, description, price, inStock);
    this.height = height;
    this.width = width;
  }
}

//Aqui estou EXPORTANDO a classe Poster
module.exports = Poster;
