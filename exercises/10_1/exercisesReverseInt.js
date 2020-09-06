// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  n = n.toString();
  let nFormatado = '';
  for (let i = n.length - 1 ; i >= 0; i -= 1) {
    nFormatado += n[i]; 
  };
  return Number.parseInt(nFormatado, 10);
}

// function reverseInt(n) {
//   n = n.toString();
//   var nFormatado = '';
//   for (var i = n.length; i > 0; i = i - 3) {
//     nFormatado += '.' + n.substring(i - 3, i);
//   };
//   return nFormatado.split(".").slice(1).reverse().join(".");
// }

module.exports = reverseInt;

// toString() retorna uma string representando o objeto Number especificado.
// parseInt() analisa um argumento string e retorna um inteiro na base especificada.
// parseFloat() analisa um argumento string e retorna um número de ponto flutuante.
// Number.parseInt() converte um argumento de string e retorna um inteiro da raiz ou base específica.
// Number.parseFloat() converte a string recebida como argumento e a retorna como um número de ponto flutuante.

