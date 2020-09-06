// --- Instruções
// Dado um string, retorna verdadeiro se o string for um palíndromo
// ou falso se não for. Palíndromos são cordas que
// forma a mesma palavra se for invertida. * Inclua * espaços
// e pontuação para determinar se a string é um palíndromo.
// --- Exemplos:
// palíndromo ("abba") === verdadeiro
// palíndromo ("abcdefg") === falso

const palindrome = require('./exercisesPalindrome');

test('palindrome function is defined', () => {
  expect(typeof palindrome).toEqual('function');
});

test('"aba" is a palindrome', () => {
  expect(palindrome('aba')).toBeTruthy();
});

test('" aba" is not a palindrome', () => {
  expect(palindrome(' aba')).toBeFalsy();
});

test('"aba " is not a palindrome', () => {
  expect(palindrome('aba ')).toBeFalsy();
});

test('"greetings" is not a palindrome', () => {
  expect(palindrome('greetings')).toBeFalsy();
});

test('"1000000001" a palindrome', () => {
  expect(palindrome('1000000001')).toBeTruthy();
});

test('"Fish hsif" is not a palindrome', () => {
  expect(palindrome('Fish hsif')).toBeFalsy();
});

test('"pennep" a palindrome', () => {
  expect(palindrome('pennep')).toBeTruthy();
});