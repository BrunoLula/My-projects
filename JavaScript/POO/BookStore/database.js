/*Nesse arquivo iremos criar uma classe que funcionara como um banco de dados (database) da nossa
 aplicação:
 Basicamente essa classe terá  um ARRAY para cada entities (entidade) criada na pasta de mesmo nome
 onde cada instancia criada de cada classe será armazenada nesse array.*/
class Database {
  //Essa classe terá uma propriedade privada e ela recebera um object com cada um desses ARRAYS
  #storage = {
    Author: [],
    Books: [],
    Order: [],
    Poster: [],
    Product: [],
    User: [],
  };

  /*Aqui iremos criar um metodo para acessar esses propriedade privada:
  esse metodo ira receber um parametro chamado 'key' (chave) e ele irá retornar o array da 'key'
  que ele quis acessar.*/
  find(key) {
    return this.#storage[key];
  }

  /*Aqui iremos criar um metodo que irá novos autores (author) e ele irá receber um parametro q é
  a propria instancia de author que será salva*/
  saveAuthor(author) {
    this.#storage.Author.push(author);
  }

  //Aqui iremos criar um metodo que acha o livro pelo nome:
  findBookByName(bookName) {
    /*Aqui nesse metodo nos iremos retornar SE com o metodo FIND nos acharmos o livro com o mesmo
    nome do que foi passado por parametro.*/
    return this.#storage.Books.find((b) => b.name === bookName);
  }
  /*Aqui iremos criar um outro metodo que irá salvar os books:
  Esse metodo irá receber book como parametro.*/
  saveBook(book) {
    /*Aqui dentro desse metodo faremos uma verificação SE o livro passado por parametro JÁ existe
    dentro desse array:
    Pra isso iremos criar uma variavel chamada 'bookExist' e nela será salvo o retorno do nosso
    metodo findBookByName, lembrando que pra esse metodo passamos o nome do book*/
    let bookExist = this.findBookByName(book.name);

    /*E agora faremos a verificação onde SE a variavel 'bookExist' estiver vazia, ela irá pegar
    o parametro e adicionar ao array dos Books*/
    if (!bookExist) {
      this.#storage.Books.push(book);
    }
  }

  /*Aqui iremos criar um metodo que adiciona uma quantidade passada por parametro ao estoque de um
   livro passado por parametro*/
  addBookToStock(bookname, quantity) {
    /*Aqui iremos criar uma variavel que irá armazenar esse livro encontrado pelo nome pra isso
    iremos chamar o metodo findBookByName.*/
    let book = this.findBookByName(bookname);

    /*Aqui eu irei usar o encadeamento opcional onde ele só irá prosseguir com o encadeamento SE
    o book existir caso não exista não irá prosseguir com a ação, então estarei usando o metodo
    addToStock que é um metodo da classe Product e como a classe Book é filha da classe Product
    ela tambem tem esse metodo, e por fim estou passando o parametro quantity para ele adicionar ao
    estoque*/
    book?.addToStock(quantity);
  }

  /*Aqui estarei criando um metodo que remove uma quantidade passada por parametro ao estoque de um
   livro passado por parametro*/
  removeBookToStock(bookname, quantity) {
    /*Aqui iremos criar uma variavel que irá armazenar esse livro encontrado pelo nome pra isso
    iremos chamar o metodo findBookByName.*/
    let book = this.findBookByName(bookname);

    /*Aqui eu irei usar o encadeamento opcional onde ele só irá prosseguir com o encadeamento SE
    o book existir caso não exista não irá prosseguir com a ação, então estarei usando o metodo
    removeToStock que é um metodo da classe Product e como a classe Book é filha da classe Product
    ela tambem tem esse metodo, e por fim estou passando o parametro quantity para ele adicionar ao
    estoque*/
    book?.removeToStock(quantity);
  }

  //Agora iremos repetir o mesmo processo acima para os poster:
  findPosterByName(posterName) {
    /*Aqui nesse metodo nos iremos retornar SE com o metodo FIND nos acharmos o poster com o mesmo
    nome do que foi passado por parametro.*/
    return this.#storage.Poster.find((p) => p.name === posterName);
  }

  /*Aqui iremos criar um outro metodo que irá salvar os poster:
  Esse metodo irá receber poster como parametro.*/
  savePoster(poster) {
    /*Aqui dentro desse metodo faremos uma verificação SE o poster passado por parametro JÁ existe
    dentro desse array:
    Pra isso iremos criar uma variavel chamada 'posterExist' e nela será salvo o retorno do nosso
    metodo findPosterByName, lembrando que pra esse metodo passamos o nome do poster*/
    let posterExist = findPosterByName(posterName);

    /*E agora faremos a verificação onde SE a variavel 'posterExist' estiver vazia, ela irá pegar
    o parametro e adicionar ao array dos Poster*/
    if (!posterExist) {
      this.#storage.Poster.push(poster);
    }
  }

  /*Aqui iremos criar um metodo que adiciona uma quantidade passada por parametro ao estoque de um
  livro passado por parametro*/
  addPosterToStock(postername, quantity) {
    /*Aqui iremos criar uma variavel que irá armazenar esse poster encontrado pelo nome pra isso
  iremos chamar o metodo findPosterByName.*/
    let poster = this.findPosterByName(postername);

    /*Aqui eu irei usar o encadeamento opcional onde ele só irá prosseguir com o encadeamento SE
  o psoter existir caso não exista não irá prosseguir com a ação, então estarei usando o metodo
  addToStock que é um metodo da classe Product e como a classe Poster é filha da classe Product
  ela tambem tem esse metodo, e por fim estou passando o parametro quantity para ele adicionar ao
  estoque*/
    poster?.addToStock(quantity);
  }

  /*Aqui estarei criando um metodo que remove uma quantidade passada por parametro ao estoque de um
   livro passado por parametro*/
  removePosterToStock(postername, quantity) {
    /*Aqui iremos criar uma variavel que irá armazenar esse livro encontrado pelo nome pra isso
    iremos chamar o metodo findBookByName.*/
    let poster = this.findPosterByName(postername);

    /*Aqui eu irei usar o encadeamento opcional onde ele só irá prosseguir com o encadeamento SE
    o book existir caso não exista não irá prosseguir com a ação, então estarei usando o metodo
    removeToStock que é um metodo da classe Product e como a classe Book é filha da classe Product
    ela tambem tem esse metodo, e por fim estou passando o parametro quantity para ele adicionar ao
    estoque*/
    poster?.removeToStock(quantity);
  }

  //Aqui iremos criar o metodo que irá 'achar' um user baseado no seu email passado por parametro
  findUserByEmail(email) {
    return this.#storage.User.find((user) => user.email === email);
  }

  /*Agora iremos fazer um metodo que ira salvar os novos usuarios:
  Esse metodo irá receber uma propria instancia de User como parametro: */
  saveUser(user) {
    /*Aqui dentro iremos fazer uma verificação SE já tem algum user salvo com o MESMO email que o
    user passado por parametro tem:
    Por isso estamos criando a variavel user e aramazenando nela o retorno da funçõa 'findUserByEmail'.*/
    let userExist = this.findUserByEmail(user.email);

    //Aqui iremos fazer a verificação SE a variavel criada acima voltar com algo salvo nela
    if (userExist) {
      throw new Error(`Usuario já cadastrado no sistema`);
    } else {
      this.#storage.User.push(user);
      console.log(`Usuario cadastrado com sucesso !`);
    }
  }

  //Agora iremos criar um metodo para REMOVER um user do database:
  removeUser(user) {
    //Aqui iremos criar novamente a variavel userExist para armazenar nela o retorno do metodo findUserByEmail:
    let userExist = this.findUserByEmail(user.email);

    //Aqui iremos fazer a verificação SE essa variavel criada acima voltar verdadeira então iremos remover o user.
    if (userExist) {
      this.#storage.User.splice(userExist, 0);
      console.log(`Usuario removido com sucesso !`);
    } else {
      throw new Error(`Usuario NÃO encontrado no banco de dados ! `);
    }
  }

  //Agora iremos criar um metodo pra salvas as Order:
  saveOrder(order) {
    this.#storage.Order.push(order);
  }

  //Agora iremos criar um metodo pra salvas os Products:
  saveProduct(product) {
    this.#storage.Product.push(product);
  }

  //Aqui estou criando um metodo que irá encontrar um product pelo seu nome
  findProductByName(productName) {
    return this.#storage.Product.find((p) => p.name === productName);
  }

  //Aqui estou criando um metodo que irá adicionar ao estoque de um produto passado por parametro
  addProductToStock(productName, quantity) {
    //Aqui estou criando uma variavel que irá receber o retorno do metodo 'findProductByName'
    let product = this.findProductByName(productName);
    //Aqui estou acessando o metodo 'addToStock' desse product e adicionando a quantidade passada por parametro
    product.addToStock(quantity);
  }

  //Aqui estou criando um metodo que irá remover do estoque de um produto passado por parametro
  removeProductToStock(productName, quantity) {
    //Aqui estou criando uma variavel que irá receber o retorno do metodo 'findProductByName'
    let product = this.findProductByName(productName);
    //Aqui estou acessando o metodo 'removeToStock' desse product e removendo a quantidade passada por parametro
    product.removeToStock(quantity);
  }

  //Agora iremos criar um metodo para retornar em uma tabela os dados PRIVADOS que foram salvos:
  showStorage() {
    //Aqui dentro eu irei mostrar uma table para cada array da nossa database
    console.table(this.#storage.Author);
    console.table(this.#storage.Books);

    /*Aqui no map como TODOS os atributos dessa classe são PRIVADOS estamos utilizando o metodo 'map',
    para chamar esse metodo em cada instancia*/
    console.table(this.#storage.Order.map((order) => order.getData()));
    console.table(this.#storage.User);
  }
}

//Agora irei EXPORTAR a class DataBase
module.exports = Database;
