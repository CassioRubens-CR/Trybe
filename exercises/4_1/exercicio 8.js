// Exercicio 8
// Escreva um programa que defina três números em variáveis no seu começo e retorne true se uma das três for par. 
// Caso contrário, ele deve retornar false.

let number1 = 15;
let number2 = 8;
let number3 = 7;

let temNumeroPar = false;

if ((number1 % 2 == 0 || number2 % 2 == 0 || number3 % 2 == 0)) {
    temNumeroPar = true;
}
console.log(temNumeroPar);
