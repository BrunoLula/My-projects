//Aqui iremos criar uma classe para as Order (pedidos) feitos na nossa loja
class Order {
  /*Essa classe terá 3 propriedades PRIVADAS:
  Total - onde nela ficara armazenada o valor TOTAL desse pedido
  Items - nela ficara armanezado os items desse pedido onde esse item será um OBJECT com o tipo do
  produto e sua quantidade (exemplo:{product: 'livro' , quantity: 2})
  user - o usuario que fez esse pedido.*/
  #total;
  #items;
  #user;

  /*Agora iremos chamar o metodo construtor onde o mesmo irá receber dois parametros:
    Items - nela ficara armanezado os items desse pedido onde esse item será um OBJECT com o tipo do
  produto e sua quantidade (exemplo:{product: 'livro' , quantity: 2})
  user - o usuario que fez esse pedido.*/
  constructor(items, user) {
    /*A primeira coisa que iremos fazer é uma VERIFICAÇÃO que SE a quantidade de items pedido esta
    no estoque:
    Como explicado antes esse parametro 'items' é uma ARRAY então usaremos o METODO  ForEach para passar
    por cada item e verificar se a quantidade pedida é maior que esta no estoque, perceba que eu estou
    DESCONSTRUINDO esse object itens em 'product' e 'quantity' e então irei verificar SE  a qunatity é
    maior do que a propriedade inStock desse product*/
    items.forEach(({ product, quantity }) => {
      if (quantity > product.inStock) {
        /*E se caso for eu irei lançar um erro:
        Para fazer isso usamos o prefixo 'throw' em seguida do new Error (pois esse 'Error' se trata
        de uma classe e estamos instanciando um novo object dela), dentro dos colchetes '()' eu passo
        a mensagem que quero que apareça quando esse erro for lançado*/
        throw new Error(`Quantidade insuficiente em estoque !`);
      }
    });

    //Aqui fora da verificação eu irei atribuir as propriedades passadas por parametro.
    this.#items = items;
    this.#user = user;

    /*E agora iremos fazer o calculo da propriedade total, onde iremos usar o metodo REDUCE:
    Onde como sabemos ele recebe 2 parametros o primeiro é onde ficara a soma 'sum' e o 2 eu estarei
    DESCONSTRUINDO o object itens novamente. então estou fazendo o parametro sum receber a multiplicação
    da 'quantity' pela propriedade 'product.price' tendo assim o total dessa Order (pedido).*/
    this.#total = items.reduce(
      (sum, { product, quantity }) => sum + quantity * product.price,
      0
    );
  }

  //Agora iremos criar um metodo que irá simplismente nos retornar um object com as PROPRIEDADES PRIVADAS
  getData() {
    return { items: this.#items, total: this.#total, user: this.#user };
  }
}

module.exports = Order;
