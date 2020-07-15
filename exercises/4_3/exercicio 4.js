// Exercício 4
// Depois, faça uma pirâmide com n asteriscos de base

let n = 5;
let linha;
let coluna;
let espaco = '';
let asteriscos = '*';

let piramide = (n + 1) / 2;
let ladoEsquerdo = piramide;
let ladoDireito = piramide;

for (linha = 0; linha <= piramide; linha += 1) {
  for (coluna = 1; coluna <= n; coluna += 1) {
    if (coluna > ladoDireito  && coluna < ladoEsquerdo) {
      espaco = espaco + asteriscos;
    } else {
      espaco = espaco + ' ';
    }
  }
  console.log(espaco);
  espaco = '';
  ladoDireito --;
  ladoEsquerdo++;
};