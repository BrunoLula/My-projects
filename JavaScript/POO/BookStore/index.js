//Aqui estou IMPORTANDO a classe 'App':
const App = require("./App.js");

//Aqui estou INTANCIANDO uma object da classe App
const app = new App();

//Aqui estou criando dois author
app.newAuthor("J. R. R. Tolkien", "British", "...");
app.newAuthor("Rick Riordan", "American", "...");

//Aqui estou pegando os author e armazenando na const 'authors'
const authors = app.getAuthor();

/*Aqui estou criando quatro livros, observe que no parametro dos author eu passo o indice dele
 na variavel criada acima:*/
app.newBook("O Hobbit", "...", "fantasy", 300, authors[0], "...", 19.99, 100);
app.newBook(
  "A Sociedade do Anel",
  "...",
  "fantasy",
  400,
  authors[0],
  "...",
  24.99,
  100
);
app.newBook(
  "O Ladrão de Raios",
  "...",
  "fantasy",
  500,
  authors[1],
  "...",
  24.99,
  100
);
app.newBook(
  "A Pirâmide Vermelha",
  "...",
  "fantasy",
  600,
  authors[1],
  "...",
  24.99,
  100
);

//Aqui novamente estou criando uma variavel para armazenar todos os livros criados
const books = app.getBooks();

//Aqui estou criando um User
app.newUser("Bruno", "bruno@email.com", "123456");

//Aqui estou criando uma variavel para armazenar esse User criado
const users = app.getUsers();

//Aqui estou mostrando tudo que está salvo na database
app.showDataBase();

/*Aqui estou criando um array com uma 'order' de exemplo, perceba como explicamos no arquivo com a
classe order que um 'item' é na verdade um object qur contem qual o product e a quantity desse mesmo
produto que está sendo 'comprado'.*/
const items = [
  {
    product: books[0],
    quantity: 2,
  },
  {
    product: books[1],
    quantity: 1,
  },
  {
    product: books[3],
    quantity: 1,
  },
];

//Aqui estou chamando o metoodo de criação de order e passando a order e user criados acima.
app.newOrder(items, users[0]);

//Aqui estou mostrando novamente tudo que esta salvo na database
app.showDataBase();
