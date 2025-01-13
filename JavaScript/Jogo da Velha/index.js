//Aqui irei criar referencias para os elementos que quero gerenciar, como o button para comecar o jgo uma variavel quee ira ter todas as spans dentro da nossa section.
let gameRegions = document.querySelectorAll("#game-screen span");
let buttonArea = document.getElementById("buttonGame");
let buttonGame = document.getElementById("start-game");

//Aqui estou criando uma variavel fazia para o jogador da vez
let turnPlayer = "";

//Aqui irei criar uma function chamada updateTittle onde ela sera responsavel por  mudar o tittle com a vez do jogador
function updateTittle() {
  //Aqui irei criar uma function chamada 'playerInput' onde ela ira pegar o elemento que tenha o id 'Turnplayer'que foi a varaivel criada acima. Logo apos irei pegar a span que ira mostrar o texto e dizzer que o valor que ela ira receber e o do playerInput
  let playerInput = document.getElementById(turnPlayer);
  document.getElementById("turnPlayer").innerText = playerInput.value;
}

//Agora irei criar um array vazio chamado de vboard (virtual board) pois nele  farei um controle virtual de como esta o jogo,
let vboard = [];

//Agora irei criar uma function que sera resposanvel por inicar o jogo, NAO IRA COMECAR mas sim inicia-lo
function initializeGame() {
  //Primeira coisa que iremos fazer e transformar o vboard num array bidimensional, onde ele recebera 3 arrays representando cada linha, e cada array tera 3 espacos vazios representando cada coluna
  vboard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  //Agora irei dizer que a minha variavel vazia 'turnPlayer' ira receber 'player1' pois e ele que vai comecar jgoando
  turnPlayer = "player1";

  //Agora irei pegar o meu elemento 'h2' e colocar o mesmo html que ele ja tem, pois como irei alterar ele quando um jogador ganahr quando o jogo for reiniciado o elemento tem que ter o mesmo texto
  document.querySelector("h2").innerHTML =
    'Vez De : <span id="turnPlayer"></span>';

  //Agora irei chamar a function updateTittle()
  updateTittle();

  //Agora irei pegar e utilziar o metodo foreach para cada span da minha gameRegions
  gameRegions.forEach(function (element) {
    //Aqui primeiro eu irei remover todo elemento que contenha a class 'win', pois novamente quando o jogo for reiniciado ele precisa voltar ao padrao
    element.classList.remove("win");

    //Apos isso tambem irei tirar qualque text que o elemento tenha
    element.innerText = "";

    //Agora irei colocar um event de click para cada element, onde esse event ira chamar um function de mesmo nome que sera responsavel por marcar a area em que o jogador clicou
    element.addEventListener("click", handleBoardClick);
  });
}

//Agora irei criar a function que foi declarada no event acima
function handleBoardClick(ev) {
  //Aqui iremos criar uma variavel chamda span e ela ira receber a  exata regiao que recebeu esse click e acionou o event (currentTarget)
  const span = ev.currentTarget;

  //Aqui irei criar outra variavel que ira receber o valor do data dessa regiao recupera acima
  const region = span.dataset.region;

  //Agora esse valor que nos recuperamos acima vem no seguinte formato N.N, sendo que o primeiro representa a linha e o segundo a coluna, porem vamos separar esses dois valores atraves do metodo 'split', pois esse metodo separa os valores pelo caractere passado por parametro criando assim dois elementos diferentes, e obviamente o caractere que usaremos para fazer a separacao e o ponto '.'
  const rowAndColumn = region.split(".");

  //Agora criarei variaveis individuais para row e column, e irei dizer que cada uma ira receber o seu devido valor que foi separado acima.
  let row = rowAndColumn[0];
  let column = rowAndColumn[1];

  //Agora irei fazer uma verificacao, porque SE o turnPlayer for igual a 'player1' ira marcar com um X, agora se nao for ira marcar com O
  if (turnPlayer === "player1") {
    //Aqui irei colocar que a span ira receber  o text de X
    span.innerText = "X";
    //Tabem irei colocar no vboard a area que o player clicou passando os valores de row e column que recuperamos mais acima
    vboard[row][column] = "X";
  } else {
    //Agora irei fazer o mesmo processo para caso seja o outro jogador
    span.innerText = "O";
    vboard[row][column] = "O";
  }

  //Porem esse codigo ainda tem um problema, pois eu tenho que desabilitar  a regiao que ja foi clicada para que o usuario nao consiga clicar e executar o seu event mais, por isso aqui no final do codigo irei chamar a function disableRegion e passar a span como parametro.
  disableRegion(span);
}

//Aqui irei criar a function disableRegion
function disableRegion(region) {
  //Aqui irei mudar o style do cursor do mouse quando passar sobre a span, como tambem irei remover o event que esta atrelada a ela.
  region.style.cursor = "default";
  region.removeEventListener("click", handleBoardClick);
}

//Aqui irei criar uma function para verifcar se o jogador venceu e pegar as regioes em que ele marcou.
function getWinRegions() {
  //Aqui estou criando um array vazio pois nele irei colocar as regions que o player marcou
  const winRegions = [];
  //Aqui estou fazendo diversas verificacoes se o jogador marcou as colunas primeiro na horizontal, e se marcou fazendo um push pro array acima
  if (
    vboard[0][0] &&
    vboard[0][0] === vboard[0][1] &&
    vboard[0][0] === vboard[0][2]
  )
    winRegions.push("0.0", "0.1", "0.2");
  if (
    vboard[1][0] &&
    vboard[1][0] === vboard[1][1] &&
    vboard[1][0] === vboard[1][2]
  )
    winRegions.push("1.0", "1.1", "1.2");
  if (
    vboard[2][0] &&
    vboard[2][0] === vboard[2][1] &&
    vboard[2][0] === vboard[2][2]
  )
    winRegions.push("2.0", "2.1", "2.2");
  //Abaixo se o jogador marcou as regioes na verical
  if (
    vboard[0][0] &&
    vboard[0][0] === vboard[1][0] &&
    vboard[0][0] === vboard[2][0]
  )
    winRegions.push("0.0", "1.0", "2.0");
  if (
    vboard[0][1] &&
    vboard[0][1] === vboard[1][1] &&
    vboard[0][1] === vboard[2][1]
  )
    winRegions.push("0.1", "1.1", "2.1");
  if (
    vboard[0][2] &&
    vboard[0][2] === vboard[1][2] &&
    vboard[0][2] === vboard[2][2]
  )
    winRegions.push("0.2", "1.2", "2.2");
  //Abaixo se marcou as regioes na diagonal
  if (
    vboard[0][0] &&
    vboard[0][0] === vboard[1][1] &&
    vboard[0][0] === vboard[2][2]
  )
    winRegions.push("0.0", "1.1", "2.2");
  if (
    vboard[0][2] &&
    vboard[0][2] === vboard[1][1] &&
    vboard[0][2] === vboard[2][0]
  )
    winRegions.push("0.2", "1.1", "2.0");
  //Aqui estou retornando o array com as regions marcadas pra quem a chamou.
  return winRegions;
}

//Aqui estou criando uma function que ira pintar as regions que o jogador que ganhou marcou, essa function ira receber as regions de parametro
function handleWin(regions) {
  //Aqui estou criando um foreach para cada region
  regions.forEach(function (region) {
    //Aqui estou pegando exatamente a region que o jogador marcou pelo atributo 'querySelector('[data-region="' + region + '"]')' passando a region envolvida pro asbas para ser entendida como string pelo JS, e estou adicionando a class 'win'
    document
      .querySelector('[data-region="' + region + '"]')
      .classList.add("win");
  });
  //Aqui estou criando um variavel que ira pegar o nome do jogador que venceu a partida
  const playerName = document.getElementById(turnPlayer).value;
  //Aqui estou pegando a minha h2 que mostra qual o jogador da vez e alterando ela, para que ela mostre o jogador que venceu a partida
  document.querySelector("h2").innerHTML = playerName + " venceu!";
}

// Aqui estou criando uma variavel que ira receber o return da function 'getWinRegions()' que e o array com as regions que o player que ganhou marcou
const winRegions = getWinRegions();
//Aqui estou fazendo uma verificacao q SE o lenght  dessa variavel acima e maior que zero, se for signifca que alguem ganhou
if (winRegions.length > 0) {
  //E se for verdade a verificacao acima eu chamo a function responsavel por pintar as regions e passo ela por parametro
  handleWin(winRegions);
  //Aqui eu estou fazendo uma verificacao SE ainda tem algum region vazia no meu vboard, porque se tiver significa que o jogo ainda nao acabou e ainda tem regions a ser marcadas.
} else if (vBoard.flat().includes("")) {
  //SE a verificacao acima for verdadeira utilizando o operador ternario abaixo eu faco a mudanca do nome do jogador da vez
  turnPlayer = turnPlayer === "player1" ? "player2" : "player1";
  //E estou chamando a function que trocara o nome do jogador da vez
  updateTitle();
} else {
  //Aqui se nenhum jogador ganhou e nao tem mais regions para serem marcada significa que o jogo deu empate, entao estou pegando o meu h2 e colocando a msg de empate
  document.querySelector("h2").innerHTML = "Empate!";
}

//Aqui irei adicionar o event ao meu button para iniciar o jogo
buttonGame.addEventListener("click", initializeGame);
