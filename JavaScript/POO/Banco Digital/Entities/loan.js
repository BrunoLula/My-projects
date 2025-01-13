const Installments = require("./Installments.js");
const Deposit = require("./deposit.js");

/*Agora iremos criar a classe dos emprestimos desse banco (loan):
Essa classe herdará as duas propridades da classe 'Deposit' (value e date)
Essa classe terá uma PROPRIEDADE PRIVADA e ESTATICA para a taxa de juros.
Terá um GET ESTATICO para LER essa propriedade privada (taxa de juros).
Terá um SET ESTATICO para setar um novo valor a taxa de juros a partir de uma porcentagem.
Tambem terá uma propriedade para as parcelas do emprestimo, sendo que essa propriedade irá receber
uma calculo do numero de parcelas que o constructor receberá de parametro e da instancia da classe
das parcelas (installments)*/
class Loan extends Deposit {
  //Primeiro iremos criar a propriedade estatica e privada
  static #interestRate = 3;

  /*Agora iremos utilizar o metodo constructor para passar as seguintes propriedades:
  (value e date) - que foram herdadas da classe mae 'Deposit'
  portion (parcela) - essa propriedade receberá o valor das parcelas desse emprestimo.*/
  constructor(value, date, numberOfPortion) {
    super(value, date);
    let portion = [];
    for (i = 0; i < numberOfPortion; i++) {
      let newPortion = new Installments(value, i, "pendente");
      portion.push(newPortion);
    }
    this.portion = portion;
  }

  //Agora iremos fazer o GET para LER o valor da propriedade privada '#interestRate'
  get Rate() {
    return Loan.#interestRate;
  }

  //Agora iremos fazer o SET para setarmos um novo valor a propriedade privada '#interestRate'
  static set newrate(newRate) {
    Loan.#interestRate = newRate;
  }
}

//Agora iremos exportar essa classe Loan
module.exports = Loan;
