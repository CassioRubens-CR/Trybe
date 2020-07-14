// Você irá utilizar esse array nos exercícios:
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Para o segundo exercício, 
// você deve somar todos os valores contidos no array e imprimir o resultado;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;

for (let number = 0; number < numbers.length; number++) {
    soma = soma + numbers[number];
}
console.log(soma);
