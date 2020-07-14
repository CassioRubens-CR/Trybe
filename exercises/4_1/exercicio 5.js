// Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. 
// Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário.

let anguloA = 60;
let anguloB = 60;
let anguloC = 80;

let angulototal = anguloA + anguloB + anguloC;

if (angulototal === 200) {
  console.log("true");
} else {
  console.log("false");
}