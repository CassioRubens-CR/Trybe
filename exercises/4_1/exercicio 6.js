// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

let pecaDeXadrez = "cavalo";

switch (pecaDeXadrez) {
  case "peão":
    console.log("o Peão Movem somente para frente, uma casa por vez. Salvo a primeira vez em que pode se mover por duas casas.");
    break;
  case "torre":
    console.log("A Torre move em linha reta horizontalmente e verticalmente pelo número de casas não ocupadas, até atingir o final do tabuleiro ou ser bloqueado por outra peça.");
    break;
  case "bispo":
    console.log("O Bispo move em uma linha reta diagonalmente no tabuleiro. Ele pode mover-se por tantas casas quantas quiser, até encontrar o final do tabuleiro ou outra peça.");
    break;
  case "rainha":
    console.log("A Rainha pode mover-se qualquer número de casas em linha reta - verticalmente, horizontalmente ou diagonalmente. A rainha se move como a torre e o bispo combinados. A menos que esteja realizando uma captura, o movimento deve terminar em uma casa desocupada e ela não pode pular outras peças.");
    break;
  case "rei":
    console.log("O Rei tem pouca mobilidade, assim ele é considerado também uma das peças mais fracas no jogo. O rei pode se mover para qualquer casa adjacente. Assim, ele pode mover-se uma casa em qualquer direção: horizontalmente, verticalmente ou diagonalmente. Ele não pode se mover para uma casa ocupada por uma peça da mesma cor.");
    break;
  case "cavalo":
    console.log("O Cavalo é a única peça do tabuleiro que pode pular sobre outras peças. O cavalo move-se por duas casas horizontalmente ou verticalmente e então uma casa a mais em uma ângulo reto. O movimento do cavalo forma um “L”. O cavalo sempre termina seu movimento em uma casa de cor oposta à inicial.");
    break;
  default:
    console.log("Erro, peça inválida!");
    break;
}