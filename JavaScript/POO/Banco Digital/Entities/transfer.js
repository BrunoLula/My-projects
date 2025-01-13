/*Agora iremos criar a classe responsavel pela transferencia de valores entre contas.
Essa classe irá ter as seguintes propriedades:
value - o valor a ser transferido
teUser - o usuario que esta MANDANDO esse valor
fromUser - o usuario que irá RECEBER esse valor
date - a data de criação dessa transferencia*/
class Transfer {
  /*Lembrando que as propriedades referentes aos user (tanto o que recebeu como o que enviou esse valor)
  serão estancias da classe User.*/
  constructor(value, fromUser, date) {
    this.value = value;
    this.fromUser = fromUser;
    this.date = new Date(date);
  }
}

//Aqui estou EXPORTANDO a classe Transfer
module.exports = Transfer;
