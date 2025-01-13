/*Aqui no arquivo TS vamos começar a escrever o nosso programa:
Vamos criar uma função chamada 'sendSpaceShip' (enviando espaço nave) onde essa função esta receben
do DOIS parametros 'name e 'captain' e perceba que eu estou TIPANDO elas como STRING*/
function sendSpaceShip(name, captain) {
    /*Aqui dentro da função iremos criar um OBJECT para representar essa nave:
    Perceba que tambem estamos criando outras propriedades para incrementar esse OBJECT dessa nave.
    Note que a propriedade crew (tripulaçõa) recebe um array VAZIO.*/
    var SpaceShip = {
        name: name,
        captain: captain,
        speed: 20,
        inMission: true,
        crew: []
    };
    /*Agora iremos colocar um alert informando algumas informações sobre essa nave e iremos RETORNAR
    ela pra podermos trabalhar no restante da aplicação:*/
    alert("A name ".concat(SpaceShip.name, " do capit\u00E3o ").concat(SpaceShip.captain, " partiu em miss\u00E3o !"));
    return SpaceShip;
}
;
/*Agora iremos criar uma segunda Função chamada accelerate:
Essa fnção irá receber DOIS parametros, um chamado 'targetSpeed' que será um number onde eu passo
a velocidade que quero q essa nave atinja.
O outro parametro é o OBJECT SpaceShip POREM perceba que estamos DESCONTRUINDO ele e passando
SOMENTE as propriedades e os seus tipos que no caso são: name e speed*/
function accelerate(targetSpeed, SpaceShip) {
    /*Aqui dentro da função iremos fazer uma verificação:
    Onde SE a targetSpeed for MENOR ou igual a propriedade speed da SpaceShip iremos msotrar um alert na tela*/
    if (SpaceShip.speed > targetSpeed) {
        alert("A velocidade da nave J\u00C1 \u00C9 maior ou igual a velocidade desejada ! ");
    }
    else {
        /*Aqui no bloco de else iremos pegar o targetSpeed e subtrair pela propriedade speed da nave, e
        iremos adicionar a diferença na propriedade, fazendo assim com que a nave alcance a velo desejada*/
        SpaceShip.speed += (targetSpeed - SpaceShip.speed);
        //Tambem iremos colocar um alert para informar a conclusão do processo acima
        alert("A velocidade da nave foi de ".concat(SpaceShip.speed, " km/h para ").concat(targetSpeed, " km/h"));
    }
}
/*Agora FORA das funções iremos criar DOIS prompts para perguntar ao usuario o nome da nave e do
piloto.*/
var spaceShipName = prompt("Informe o nome da nave ?");
var captainName = prompt("Informe o nome do piloto da nave ?");
/*Agora iremos criar uma variavel chamada currentSpaceShip para armazenar o retorno da função
sendSpaceShip q esse retorno nada mais é do que a nave criada e eu estou passando os dois argumentos
que essa função necessita*/
var currentSpaceShip = sendSpaceShip(spaceShipName, captainName);
/*Agora iremos criar uma variavel que irá armazenar a resposata do usuario para qual velocidade ele
quer acelerar a nave. POREM perceba que estamos convertendo essa resposta para number atraves do
parseFloat, porque um dos parametros da função accelerate PRECISA SER number, caso fosse algum outro
tipo a função daria errado*/
var speed = parseFloat(prompt('Digite qual velocidade deseja ?'));
accelerate(speed, currentSpaceShip);
//Apos isso iremos compilar o arquivo pelo terminal
