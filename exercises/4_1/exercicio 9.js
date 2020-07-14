// Escreva um programa que defina três números em variáveis no seu começo
// e retorne true se uma das três for ímpar. 
// Caso contrário, ele deve retornar false.

let number1 = 35;
let number2 = 10;
let number3 = 60;

let resultado = false;

if ((number1 % 2 != 0 || number2 % 2 != 0 || number3 % 2 != 0)) {
  resultado = true;
}
console.log(resultado);
