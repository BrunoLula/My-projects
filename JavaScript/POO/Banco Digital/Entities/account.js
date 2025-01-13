const Deposit = require("./deposit");
const Loan = require("./loan");
const Transfer = require("./transfer");

/*Agora iremos criar a classe responsavel pela conta (Account):
Essa classe será um pouco mais elaborada onde terá as seguintes propriedades:
balance - o saldo da conta onde essa propriedade será PRIVADA e somente para leitura, e seu valor só
podera ser alterado com os emprestimos, tranferencias ou depositos feitos na conta.
Tambem terá uma propriedade que será uma lista (ARRAY) pra cada operação (emprestimos, tranferencias, depositos)
onde cada operação dessas realizadas nessa conta será salva em seu determinado array.
Tabem terá uma propriedade chamada User onde a mesma irá receber uma isntancia da classe User*/
class Account {
  #balance = 0;
  constructor(user) {
    this.loan = [];
    this.deposit = [];
    this.transfer = [];
    this.user = user;
  }

  /*Teremos agora um metodo para realizar um novo depósito (deposit), onde o valor do deposito será acrescentado
  ao saldo (balance) e a instância de Deposit ao atributos array de depósitos.*/
  newDeposit(value, date) {
    let newDep = new Deposit(value, date);
    this.#balance += value;
    this.deposit.push(newDep);
  }

  /*Teremos agora um metodo para realizar um novo emprestimo (loan), onde o valor do emprestimo será acrescentado
  ao saldo (balance) e a instância de Loan ao atributos array de emprestimos.*/
  newLoan(value, date, numberOfPortion) {
    let newloan = new Loan(value, date, numberOfPortion);
    this.#balance += value;
    this.loan.push(newloan);
  }

  /*Teremos agora um metodo para transferencias (transfer), onde o valor tranferido será retirado da conta do user
  que fez essa transação*/
  newTranfer(value, fromUser, date) {
    if (this.#balance > 0 && this.#balance >= value) {
      let newtranfer = new Transfer(value, fromUser, date);
      this.#balance -= value;
      this.transfer.push(newtranfer);
      console.log(`Transferencia realizada com sucesso !`);
    } else {
      throw new Error(`Valor insuficiente para realizar transferencia`);
    }
  }
}

//Agora iremos EXPORTAR a classe account
module.exports = Account;
