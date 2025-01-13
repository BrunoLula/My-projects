const { json } = require("express");

/*Aqui vamos criar a função assincrona responsavel pela requisição GET:
  Onde essa requisição irá recuperar TODAS as movimentações feitas e chamar a função render para exibi-las na tela
  ao carrgear da pagina*/
const get = async () => {
  const response = await fetch("http://localhost:3000/");
  const content = await response.json();

  content.forEach((moviment) => render(moviment));
};

/*Aqui vamos criar a função render em que a mesma recebe uma movimentação (moviment) de parametro:
   Essa mesma função ira criar elementos na tela e exibi-las*/
const render = (moviment) => {
  const card = document.createElement("div");
  card.ClassList.add("card");
  card.id = `card${moviment.id}`;

  const name = document.createElement("h5");
  name.textContent = "Nome de quem fez essa movimentação:";
  name.inneHTML = `<span>${moviment.name}</span>`;

  const value = document.createElement("p");
  value.textContent = "valor dessa movimentação:";
  value.inneHTML = `<span>${moviment.value}</span>`;
  value.id = `value${moviment.id}`;

  const date = document.createElement("p");
  date.textContent = "data dessa movimentação:";
  date.inneHTML = `<span>${moviment.date}</span>`;
  card.id = `date${moviment.id}`;

  card.append(name, value, date);

  const section = document.getElementByID("minhasMovimentacoes");
  section.appendChild(card);
};

//Agora vamos atrelar o event pra quando a pagina ser carregada
document.addEventListener("DOMContentLoaded", get());

//Abaixo estaremos criando um object para armazenas nele os value dos inputs do nosso form
const moviment = {
  name: document.getElementById("name").value,
  value: document.getElementById("value").value,
  date: document.getElementById("date").value,
};

/*Agora iremos fazer a função responsavel pela requisição POST:
Primeiro passo que vamos fazer é atrelar um event ao submit do form*/
document.getElementById("forms").addEventListener("submit", async (ev) => {
  //Aqui iremos previnir o funcionamento padrão do form (carregamento da pagina)
  ev.preventDefault();

  /*Agora iremos criar a variavel para o resposta da requisição:*/
  const response = await fetch("http://localhost:3000/", {
    /*Aqui dentro do object que passamos por parametro para o metodo fetch vamos setar as proprieda-
    des necessarias para que a requisição post funcione:
    A primeira dessas propriedades é o method*/
    method: "POST",
    /*Agora iremos setar o headers (cabeçalho):
    Essa propriedade iremos setar o tipo de conteudo dessa requisição*/
    headers: {
      "Contenty-type": "application/json",
    },
    /*Agora iremos setar o que vai estar no body dessa requisição que é o object com os value dos
    inputs que foi criado acima, e obviamente estamos convertendo ele pra JSON*/
    body: JSON.stringify(moviment),
  });

  /*Agora iremos recuperar o return da nossa requisição (onde ela retorna em JSON o object que foi
    'enviado' ao servidor) e vamos converte-lo para object novamente e passa-lo como parametro para
    a função render*/
  const newMoviment = await response.json();
  forms.reset();
  render(newMoviment);
});

/*Agora vamos criar a função responsavel pela requisição delete:
Essa requisição em especifico precisa que nós enviamos o ID do object a ser removido do 'servidor',
essa função será atrelada ao button existente na pagina*/
document.getElementById("deleteButton").addEventListener("click", async () => {
  //Aqui estou fazendo uma pergunta ao usuario sobre o id da movimentação que ele deseja excluir
  const id = parseFloat(
    prompt("Qual o ID da movimentação que deseja excluir ?")
  );

  //Agora iremos criar a função para a requisição DELETE:
  const removeMoviment = await fetch(`http://localhost:3000/:${id}`, {
    /*Na requisição DELETE nos TAMBEM passamos um object como parametro para setarmos algumas propri-
    edades da requisição:
    Que no caso serão NOVAMENTE o method e o typeContent*/
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
    //Como NÃO ESTOU ENVIANDO NADA não precisamos setar a body
  });

  /*Agora nos iremos recuperar a resposata e mandar ela pra função removeCard onde a mesma irá
  remover aquele card da tela:*/
  const content = await removeMoviment.json();

  removeCard(content);
});

/*Agora iremos criar a função que irá remover um card da tela:
Essa função irá simplismente receber um moviment de parametro, localizar seu id e dar um remove
child passando ele de parametro.*/
const removeCard = (moviment) => {
  const section = document.getElementById("minhasMovimentacoes");
  const movimentToRemove = document.getElementById(`card${moviment.id}`);
  section.removeChild(movimentToRemove);
};

/*Agora iremos realizar a requisição PATCH:
Essa requisição serve para nós ATUALIZARMOS um dado salvo no servidor/banco de dados, e estruturamos
essa requisição de uma maneira parecida com a delete e a post, pois eu preciso passar um ID na URL,
para identificar qual dado eu quero atualizar, e no BODY da requisição eu passo QUAIS propriedades
eu quero setar novamente*/
document.getElementById("putButton").addEventListener("click", async () => {
  //Agora irei recuperar o ido dado que o usuario quer atualizar
  const id = parseFloat(prompt("Qual id voce deseja atualizar ?"));

  //Aqui iremos criar um object para receber as informações atualizadas que o usuario passar
  const updatedMoviment = {
    name: prompt("Qual o nome ?"),
    value: parseFloat(prompt("Qual o valor ?")),
    date: prompt("Qual a nova data ?"),
  };

  //Agora iremos fazer o processo da requisiçõa:
  const response = await fetch(`http://localhost:3000/${id}`, {
    /*Aqui no object da requisição eu seto novamente a propriedade method*/
    method: "PATCH",
    //Seto novamente a propriedade HEADERS (cabeçalho), com qual o tipo de conteudo dessa requisição:
    headers: {
      "Content-type": "application-json",
    },
    //Agora na propriedade body eu passo novamente o 'body' das informações atualizadas desse dado
    body: JSON.stringify(updatedMoviment),
  });

  /*Agora APÓS enviar as novas informações ao servidor/banco de dados vamos atualizar essas informa-
  ções no card, pra isso vamos recuperar esse card pelo seu id e atribuir os novos valores a cada
  propriedade.*/
  const card = document.getElementById(`card${id}`);
  card.getElementsByTagName("h5").value = updatedMoviment.name;
  card.getElementByID(`value${id}`).value = updatedMoviment.value;
  card.getElementByID(`date${id}`).value = updatedMoviment.name;
});

/*Agora vamos fazer a função responsavel por mostrar o saldo na tela, onde o saldo nada mais é do q
a soma dos values de cada movimentação*/
const updateValue = async () => {
  const values = await get();
};
