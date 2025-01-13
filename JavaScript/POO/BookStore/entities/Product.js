/*Aqui iremos criar a classe dos Products:
Como nessa book store não será vendidio só livros estamos criando essa classe para QUALQUER produto
dessa loja*/
class Product {
  /*Aqui dentro da classe iremos setar os seguintes atributos:
  name - nome do produto
  description - uma descrição para o produto
  price - o preço do produto
  inStock - a quantidade que esse produto terá no estoque, esse atributo pode ser passado por parametro
  MAS caso não seja seu valor inicial é zero*/
  constructor(name, description, price, inStock = 0) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.inStock = inStock;
  }

  //Agora iremos fazer um METODO para ADICIONAR uma quantidade passada por parametro ao estoque
  addToStock(quantity) {
    this.inStock += quantity;
  }

  //Agora iremos criar outro METODO para REMOVER uma quantidade passada por parametro ao estoque
  removeToStock(quantity) {
    this.inStock -= quantity;
  }
}

//Agora irei EXPORTAR essa classe com ESModules
module.exports = Product;
