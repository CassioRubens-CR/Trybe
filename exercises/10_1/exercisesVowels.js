// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  var m = str.match(/[aeiou]/gi);
  return m === null ? 0 : m.length;
}

module.exports = vowels;

// RegExp - flags "g" corresponder globalmente; acha todas as correspondências em vez de parar após achar a primeira

// function vowels(str) {
//   var vowelsCount = 0;
//   var string = str.toString();
//
//   for (var i = 0; i <= string.length - 1; i++) {
//     if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
//       vowelsCount += 1;
//     }
//     if (string.charAt(i) == "A" || string.charAt(i) == "E" || string.charAt(i) == "I" || string.charAt(i) == "O" || string.charAt(i) == "U") {
//       vowelsCount += 1;
//     }
//   }
//   return vowelsCount;
// }
// toString() retorna uma string representando o objeto.
// charAt() retorna o caractere especificado a partir de uma string.