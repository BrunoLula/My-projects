/*Aqui vamos comecar a trabalhar com o JS da nossa calcauladora:

Primeiro estou criando referencias para os inputs e algumas tags do DOM: */
const main = document.querySelector("main");
const root = document.querySelector(":root");
const input = document.getElementById("input");
const resultInput = document.getElementById("result");
const copyToClipboard = document.getElementById("copyToClipboard");
const themeSwitcher = document.getElementById("themeSwitcher");

/*Aqui estou criando um array com todas as telcas permitidas de serem inseridas na calculadora: */
const allowedKeys = [
  "(",
  ")",
  "/",
  "*",
  "-",
  "+",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "1",
  "0",
  ".",
  "%",
  " ",
];

/*Aqui estou pegando TODOS os meus buttons que contenham a class 'charKey' atraves do 'querySelectorAll()', e atraves do metodo forEach() estou adicionando em event a cada um deles.
Esse event sera de click e ele executara um function que ira incrementar no value do input o value do atributo data que cada button tem.*/
document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", function () {
    //Aqui eu estou criando uma variavel que ira armazenar o value do atributo data do button
    const value = charKeyBtn.dataset.value;
    //Aqui eu estou incrementando o value criado acima no value do input
    input.value += value;
  });
});

/*Aqui estou adicionando um event ao meu button que tem o id 'clear':
Onde sera um event de click que ira limpar o value do input, e deixar o mesmo com um focus para o usuario realizar uma nova operacao.*/
document.getElementById("clear").addEventListener("click", function () {
  input.value = "";
  input.focus();
});

/*Aqui estou atrelando um event ao meu input, onde esse event seda de 'keydown' ou seja do usuario presionar uma tecla, estou adicionando esse evento pois quero fazer uma verificacao de que a tecla que o usuario digitou esteja presente no meu array de teclas validas 'allowedKeys': */
input.addEventListener("keydown", function (ev) {
  //Primeiro estou prevenindo o comportamento padrao desse event keydown, onde o seu comportamento padrao seria inserir a tecla digitada no input, estou impedindo isso pois queremos fazer a verificacao primeiro.
  ev.preventDefault();

  /*Aqui estou fazendo a verficacao:
  Onde eu pego qual a tecla que ele digitou atraves do ev.key, e utilizando a funcao includes() verifico se essa tecla esta presente no array 'allowedKeys'. */
  if (allowedKeys.includes(ev.key)) {
    //Se tiver incluso o value do input ira acrescentar, e a cada tecla que o usuario digitar ira ocorrer a mesma verificacao, logo apos estou dando um return para sair desse if.
    input.value += ev.key;
    return;
  }

  /*Aqui estou faznedo outra verificacao dentro do event:
  Onde eu verifico se a tecla que o usuario digitou foi a tecla de excluir 'backspace'. */
  if (ev.key === "Backspace") {
    //E se for eu estarei utilizando o metodo splice pra fazer essa acao dentro do value do input eu removo o ultimo caractere adicionado (-1).
    input.value = input.value.slice(0, -1);
  }

  /*Aqui estou fazendo mais uma verificacao:
  Onde eu verifico que se a tecla que o usuario digitou foi o enter, ile ira chamar a funcao calculate*/
  if (ev.key === "Enter") {
    calculate();
  }
});

//Aqui estou pegando o element que tem o id 'equal' e adicionando um event de click nele que ira chamar a function calculate.
document.getElementById("equal").addEventListener("click", calculate);

//Aqui eu estou criando a function calculate
function calculate() {
  //Dentro da function eu estarei alterando o value do input que mostrara o resultado (resultInput) para "ERROR"
  resultInput.value = "ERROR";
  //Aqui eu estou adicionando a class 'error' ao resultInput
  resultInput.classList.add("error");
  /*Aqui eu estou criando uma variavel que ira armanezenar o return da fucntion eval() onde eu passei para essa function o value do input em que o usuario digita a operacao:
  A funcao eval e MUITO PERIGOSA por essa trata o que a gente passar por parametro como codigo JS, ou seja essa funcao ira tratar o que estiver no input.value como codigo JS, assim nao precisaremos nos preocupar com tratar os valores que o usuario digitar.*/
  const result = eval(input.value);
  //Aqui eu estou colocando no value do input do resultado a variavel criada acima
  resultInput.value = result;
  //Aqui eu estou removendo a class 'error' do resultInput
  resultInput.classList.remove("error");
}

//Aqui eu estou adicionando o event de click ao button 'copyToClipboard' onde esse event ira copiar o resultado da conta pra area de transferencia do computador:
copyToClipboard.addEventListener("click", function (ev) {
  //Aqui eu estou recuperando o que foi que disparou esse event atraves da propriedade 'ev.currentTarget' e salvando na variavel button
  const button = ev.currentTarget;

  //Aqui eu estou fazendo uma verficacao que SE o text que estiver dentro dessa variavel criada acima for igual a 'copy'
  if (button.innerText === "Copy") {
    //SE for igual eu irei alterar o text para 'Copied!'
    button.innerText = "Copied!";
    //Aqui estou estou adicionando a class 'success' ao button
    button.classList.add("success");
    /*Aqui eu estou acessando o object navigator, a sua propriedade clipboard que seria uma espaco onde fica armazenado as copias, e atraves do metodo 'writeText()' estou colocando la o value que esta no resultInput.*/
    navigator.clipboard.writeText(resultInput.value);
  } else {
    //Aqui SE o text que estiver dentro dessa variavel criada no comeco da fucntion NAO for igual a 'copy'
    //Eu irei alterar o text para 'copy'
    button.innerText = "Copy";
    //E irei remover a class 'success' do button
    button.classList.remove("success");
  }
});

//Aqui estou adicionando um event ao meu button que sera responsavel pela troca do tema da pagina:
themeSwitcher.addEventListener("click", function () {
  //Aqui dentro da function eu estou fazendo um verificacao de que SE o atributo data.theme e igual a 'dark'.
  if (main.dataset.theme === "dark") {
    //Se for eu irei acessar o style do root e setar as propriedades abaixo, atraves do metodo setProperty() onde eu passo primeiro qual propriedade eu quero setar e depois o seu value a ser setado.
    root.style.setProperty("--bg-color", "#f1f5f9");
    root.style.setProperty("--border-color", "#aaa");
    root.style.setProperty("--font-color", "#212529");
    root.style.setProperty("--primary-color", "#26834a");
    //Aqui eu estou alterando o value do atributo data pra 'light'
    main.dataset.theme = "light";
  } else {
    //Aqui SE o atributo data.theme NAO for igual a 'dark' eu tambem irei acessar o style do root e setar as propriedades abaixo, atraves do metodo setProperty() onde eu passo primeiro qual propriedade eu quero setar e depois o seu value a ser setado.
    root.style.setProperty("--bg-color", "#212529");
    root.style.setProperty("--border-color", "#666");
    root.style.setProperty("--font-color", "#f1f5f9");
    root.style.setProperty("--primary-color", "#4dff91");
    //Aqui eu estou alterando o value do atributo data pra 'dark'
    main.dataset.theme = "dark";
  }
});
