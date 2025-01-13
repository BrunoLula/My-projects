/*Nesse arquivo iremos criar a classe User (usuario):
Essa classe será responsavel por criar as instancias para cada usuario dessa loja.*/
class User {
  /*Pra essa classe eu usarei o metodo construtor para receber apenas 3 parametros:
  name - o nome desse usuario ]
  email - o email desse usuario
  password - a senha desse usuario*/
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

//Agora iremos EXPORTAR esse metodo usando o ESModules
module.exports = User;
