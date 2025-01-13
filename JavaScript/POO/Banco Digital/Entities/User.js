const Account = require("./account");

/*Agora iremos criar o metodo do User.
Essa classe terá os seguintes atributos:
fullName - o nome compelto do dono da conta
email - o email do dono da conta
conta - quando uma instancia de user for criada já será instanciada uma conta
*/
class User {
  constructor(fullname, email) {
    this.name = fullname;
    this.email = email;
    this.account = new Account(this);
  }
}

//Agora irei EXPORTAR essa classe User
module.exports = User;
