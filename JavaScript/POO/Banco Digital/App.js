const User = require("./entities/User.js");
const Loan = require("./entities/loan.js");

/*Agora apos criarmos todas as entidadaes (entities) iremos criar a classe App para o funcionamento
de todas as nossas outras classes.
Essa classe terá uma propriedade PRIVADA e ESTATICA com uma lista (array) de todos os user.

Terá um metodo ESTATICO para a criação de novos usuarios, onde SÓ SERÁ POSSIVEL criar usuarios
que NÃO tiverem emails associados a outras contas, ou seja será preciso fazer uma verificação SE
tem alguma conta criada com o email que está sendo passado por parametro.

Terá um metodo ESTATICO para encontrar um User apartir de um email.

Terá um metodo ESTATICO par cada operação (loan,tranfer e deposit), eles dever ter como parametro
as informações necessarias para as realizações dessas operações.

Tambem terá um metodo para a ALTERAÇÃO da taxa de juros.*/
class App {
  //Agora iremos fazer a propriedade PRIVADA e ESTATICA com a lista de todos os user
  static #allUser = [];

  //Agora iremos criar o metodo ESTATICO que irá encontrar um User a apartir de um email
  static findUserByEmail(email) {
    return this.#allUser.find((u) => u.email === email);
  }

  //Agora iremos criar o metodo ESTATICO que irá ALTERAR a taxa de juros
  static alterRate(newRate) {
    Loan.newrate = newRate;
  }

  /*Agora iremos criar o metodo ESTATICO para a criação de novos User, onde como dizemos antes
  só será possivel criar novos user SE o mesmo não tiver um email registrado em outra conta.*/
  static createUser(fullname, email) {
    let hadAccount = App.findUserByEmail(email);
    if (hadAccount) {
      throw new Error(`Email ${email} já foi registrado em outra conta !`);
    } else {
      let newUser = new User(fullname, email);
      App.#allUser.push(newUser);
    }
  }

  //Abaixo iremos criar os metodos ESTATICOS reservados a cada operação (loan,tranfer e deposit)
  static newLoan(value, date, numberOfPortion, email) {
    let hadAccount = App.findUserByEmail(email);
    if (hadAccount) {
      hadAccount.account.newLoan(value, date, numberOfPortion);
    }
  }

  //Agora estamos fazendo o metodo para a operação de deposito.
  static newDeposit(value, date, email) {
    let hadAccount = App.findUserByEmail(email);
    if (hadAccount) {
      hadAccount.account.newDeposit(value, date);
    }
  }

  //Agora vamos fazer o metodo para a operação de transferencia
  static newTranfer(value, fromUser, date, email) {
    let hadAccount = App.findUserByEmail(email);
    if (hadAccount) {
      hadAccount.account.newTranfer(value, fromUser, date);
    }
  }
}

//Agora iremos EXPORTAR  a classe App
module.exports = App;
