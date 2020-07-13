// Faça um programa que retorne o maior de três números. 
// Defina, no começo do programa, três variáveis com os valores que serão comparados.

let a = 10;
let b = 20;
let c = 30;

if (a > b && a > c) {
  console.log("O maior número é: " + a + " (a)");
} else if (b > a && b > c) {
  console.log("O maior número é: " + b + " (b)");
} else {
  console.log("O maior número é: " + c + " (c)");
}