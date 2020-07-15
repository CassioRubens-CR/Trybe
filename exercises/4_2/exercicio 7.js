// Você irá utilizar esse array nos exercícios:
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menorNumero = numbers[0];

for (let buscaNumero = 0; buscaNumero < numbers.length; buscaNumero += 1) {
    if (numbers[buscaNumero] < menorNumero) {
      menorNumero = numbers[buscaNumero];
    }
}
console.log(menorNumero);
