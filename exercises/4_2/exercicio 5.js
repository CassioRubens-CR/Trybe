// Você irá utilizar esse array nos exercícios:
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maiorNumero = 0;

for (let number = 0; number < numbers.length; number += 1) {
    if (numbers[number] > maiorNumero) {
      maiorNumero = numbers[number];
    }
}
console.log(maiorNumero);


