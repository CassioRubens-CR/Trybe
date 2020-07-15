// Exercício 1
// Para o primeiro exercício de hoje,
// faça um programa que, dado um valor n qualquer, seja n > 1,
// imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

let n = 10;
let asteriscos = "*";
let espaco = "";
let quadrado;

for (quadrado = 0; quadrado < n; quadrado += 1) {
    espaco = espaco + " " + asteriscos;
}

for (quadrado = 0; quadrado < n; quadrado += 1) {
    console.log(espaco);
}