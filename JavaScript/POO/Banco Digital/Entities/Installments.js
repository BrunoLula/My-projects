/*Agora iremos criar a classe das parcelas (installments):
Essa classe irá receber 3 propriedades:
value - o valor de cada parcela
numberOfPoison - o numero daquela parcela
situation - se a situação daquela parcela está pendente ou paga*/
class Installments {
  constructor(value, numberOfPoison, situation) {
    this.value = value;
    this.numberOfPoison = numberOfPoison;
    this.situation = situation;
  }
}

//Agora estarei EXPORTANDO a classe installments
module.exports = Installments;
