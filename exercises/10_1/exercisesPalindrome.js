// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  return str == str.split('').reverse().join('');
}

module.exports = palindrome;

// split() divide um objeto String em um array de strings ao separar a string em substrings.
// reverse() inverte os itens de um array. 
// (O primeiro elemento do array se torna o último e o último torna-se o primeiro).
// join() junta todos os elementos de uma array (ou um array-like object) 
// em uma string e retorna esta string.



