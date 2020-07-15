// Exercício 2
// Para o segundo exercício, faça o mesmo que antes,
// mas que imprima um triângulo retângulo com 5 asteriscos de base. 

let n = 5;
let asteriscos = "*";
let espaco = "";
let quadrado;

for (quadrado = 0; quadrado < n; quadrado += 1) {
    espaco = espaco + " " + asteriscos;
    console.log(espaco);
}
