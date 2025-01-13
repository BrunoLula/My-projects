/*Aqui iremos criar o nossa class App:
Essa classe irá ser a operação dessa nossa 'loja' aqui iremos fazer a INTERAÇÃO entre todas as
nossas classes criadas até agora.

Aqui estou IMPORTANDO a classes*/
const Database = require("./database.js");
const Author = require("./entities/Author.js");
const Book = require("./entities/Book.js");
const Product = require("./entities/Product.js");
const User = require("./entities/User.js");
const Poster = require("./entities/Poster.js");
const Order = require("./entities/Order.js");

class App {
  /*Essa classe terá uma propriedade ESTATICA pois quero que esse propriedade possa ser acessada
  pela classe sem precisar que tenha uma instancia, e esse propriedade estatica será uma INSTANCIA
  de database*/
  static #Storage = new Database();

  //Agora irei criar um metodo para a CRIAÇÃO de um novo user.
  newUser(name, email, password) {
    let newUser = new User(name, email, password);

    /*Apos a criação irei colocar esse novo usuario no DataBase atraves da nossa propriedade estatica
    que como sabemos chamamos ela utilizando o nome DA CLASSE*/
    App.#Storage.saveUser(newUser);
  }

  //Agora iremos criar um metodo que irá REMOVER um user da nossa dataBase
  removeUser(user) {
    App.#Storage.removeUser(user);
  }

  //Agora irei criar um metodo que irá pegar os user do database utilizando o metodo key do proprio
  getUsers() {
    return App.#Storage.find("User");
  }

  //Agora teremos o mesmo metodo só que para a criação de Author
  newAuthor(name, nacionality, bio) {
    let newAuthor = new Author(name, nacionality, bio);
    //Agora irei colocar esse author no database
    App.#Storage.saveAuthor(newAuthor);
  }
  //Agora irei criar um metodo que irá pegar os author do database utilizando o metodo key da propria
  getAuthor() {
    return App.#Storage.find("Author");
  }

  //Agora teremos um metodo de criação de Products
  newProduct(name, description, price, inStock) {
    let newproduct = new Product(name, description, price, inStock);
    //Agora irei adicionar esse Product ao database
    App.#Storage.saveProduct(newproduct);
  }

  /*Agora iremos criar o metodo responsavel por acrescentar uma determinada quantia ao estoque
  de um determiando produto*/
  addProduct(productName, quantity) {
    /*Aqui eu estou usando a propriedade estatica que é uma instancia de 'dataBase' para acessar o
    metodo 'addProductToStock' e passar os argumentos productName, quantity*/
    App.#Storage.addProductToStock(productName, quantity);
    console.log(`Produto(s) adicionado com sucesso ! `);
  }

  /*Agora iremos criar o metodo responsavel por remover uma determinada quantia ao estoque
  de um product*/
  removeProduct(productName, quantity) {
    /*Aqui eu estou usando a propriedade estatica que é uma instancia de 'dataBase' para acessar o
    metodo 'removeProductToStock' e passar os argumentos productName, quantity*/
    App.#Storage.addPosterToStock(productName, quantity);
    console.log(`Product(s) removidos com sucesso ! `);
  }

  //Agora irei criar um metodo que irá pegar os products do database utilizando o metodo key da propria
  getProduct() {
    return App.#Storage.find("Product");
  }
  //Agora teremos um metodo de criação de Books
  newBook(tittle, sinopsys, genre, pages, author, description, price, inStock) {
    let newbook = new Book(
      tittle,
      sinopsys,
      genre,
      pages,
      author,
      description,
      price,
      inStock
    );
    //Agora irei adicionar esse Book ao database
    App.#Storage.saveBook(newbook);
  }

  /*Agora iremos criar o metodo responsavel por acrescentar uma determinada quantia ao estoque
  de um book*/
  addBook(bookName, quantity) {
    /*Aqui eu estou usando a propriedade estatica que é uma instancia de 'dataBase' para acessar o
    metodo 'addBookToStock' e passar os argumentos bookName, quantity*/
    App.#Storage.addBookToStock(bookName, quantity);
    console.log(`livro(s) adicionado com sucesso ! `);
  }

  /*Agora iremos criar o metodo responsavel por remover uma determinada quantia ao estoque
  de um book*/
  removeBook(bookName, quantity) {
    /*Aqui eu estou usando a propriedade estatica que é uma instancia de 'dataBase' para acessar o
    metodo 'removeBookToStock' e passar os argumentos bookName, quantity*/
    App.#Storage.removeBookToStock(bookName, quantity);
    console.log(`livro(s) removido com sucesso ! `);
  }

  //Agora irei criar um metodo que irá pegar os books do database utilizando o metodo key da propria
  getBooks() {
    return App.#Storage.find("Books");
  }
  //Agora teremos um metodo de criação de Poster
  newPoster(name, description, height, width, price, inStock) {
    let newposter = new Poster(
      name,
      description,
      height,
      width,
      price,
      inStock
    );
    //Agora irei adicionar esse Poster ao database
    App.#Storage.savePoster(newposter);
  }

  /*Agora iremos criar o metodo responsavel por acrescentar uma determinada quantia ao estoque
  de um poster*/
  addPoster(posterName, quantity) {
    /*Aqui eu estou usando a propriedade estatica que é uma instancia de 'dataBase' para acessar o
    metodo 'addPosterToStock' e passar os argumentos posterName, quantity*/
    App.#Storage.addPosterToStock(posterName, quantity);
    console.log(`Poster(s) adicionado com sucesso ! `);
  }

  /*Agora iremos criar o metodo responsavel por remover uma determinada quantia ao estoque
  de um poster*/
  removePoster(posterName, quantity) {
    /*Aqui eu estou usando a propriedade estatica que é uma instancia de 'dataBase' para acessar o
    metodo 'removeProductToStock' e passar os argumentos posterName, quantity*/
    App.#Storage.removePosterToStock(posterName, quantity);
    console.log(`Poster(s) removidos com sucesso ! `);
  }

  //Agora irei criar um metodo que irá pegar os poster do database utilizando o metodo key da propria
  getPoster() {
    return App.#Storage.find("Poster");
  }
  //Agora teremos um metodo de criação de Order
  newOrder(items, user) {
    let neworder = new Order(items, user);
    App.#Storage.saveOrder(neworder);

    /*Agora SE essa ordem acima for executada com sucesso teremos que remover ela do estoque:
    Pra isso iremos acessar essa instancia, e depois acessaremos o seu metodo 'getData' onde o mesmo irá
    me retornar um object com suas propriedades privadas contendo o qual é o produto e a quantidade dessa order
    e então eu irei o metodo 'ForEach'.
    Para o metodo 'forEach' eu estarei DESCONSTRUINDO o object 'itens' nas propriedades que eu quero trabalhar
    (product,quantity).*/
    neworder.getData().items.forEach(({ product, quantity }) => {
      /*Dentro do forEach eu irei fazer a verificação SE o product é uma instancia de Book, se for irei chamar
      o metodo removeBook e passar os parametros necessarios, iremos fazer essa verificação pra cada tipo de
      product (poster,book ou product)*/
      if (product instanceof Book) {
        /*Aqui eu estou acessando o proprio metodo dessa classe por isso o uso do 'this', e como o product é
        uma instancia então estou acessando a sua propriedade name e passando como parametro para o metodo.*/
        this.removeBook(product.name, quantity);
      } else if (product instanceof Poster) {
        //Aqui estamos fazendo o mesmo processo SE essa product for uma isntancia de Poster.
        this.removePoster(product.name, quantity);
      } else if (product instanceof Product) {
        this.removeProduct(product.name, quantity);
      }
    });
  }
  //Agora irei criar um metodo que irá pegar as orders do database.
  getOrder() {
    let orders = App.#Storage.find("Order");
    orders.forEach((order) => order.getData());
  }

  showDataBase() {
    App.#Storage.showStorage();
  }
}

//Aqui estou EXPORTANDO a classe 'App'.
module.exports = App;

//Agora o projeto irá continuar no arquivo 'index.js' onde iremos criar as instancias.
