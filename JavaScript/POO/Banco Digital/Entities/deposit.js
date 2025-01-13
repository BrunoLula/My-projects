/*Nossa primeira classe criada será a de deposito (deposit):
Essa classe será simples e terá apenas duas propriedades, uma com a quantia a ser depositada em conta
e outra com a data de criação desse deposito:*/
class Deposit {
  /*Essa classe como explicado antes irá receber o parametro com o valor desse deposito (value) e a
  data desse deposito onde estamos trabalhando com o object Date para passar essa data*/
  constructor(value, date) {
    this.value = value;
    this.date = new Date(date);
  }
}

//Aqui iremos EXPORTAR essa classe
module.exports = Deposit;
