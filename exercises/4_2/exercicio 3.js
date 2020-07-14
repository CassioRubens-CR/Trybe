// Você irá utilizar esse array nos exercícios:
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Para o terceiro exercício, 
// calcule e imprima a média aritmética dos valores contidos no array;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;

for (let number = 0; number < numbers.length; number += 1) {
    soma = soma + numbers[number];
}

let media = soma / numbers.length;

console.log(media);
