// --- Instruções
// Escreva uma função que retorna o número de vogais
// usado em uma string. As vogais são os caracteres 'a', 'e'
// 'i', 'o' e 'u'.
// --- Exemplos
// vogais ('Olá!') -> 3
// vogais ('Por que você pergunta?') -> 4
// vogais ('Por quê?') -> 0

const vowels = require('./exercisesVowels');

test('Vowels is a function', () => {
  expect(typeof vowels).toEqual('function');
});

test('returns the number of vowels used', () => {
  expect(vowels('aeiou')).toEqual(5);
});

test('returns the number of vowels used when they are capitalized', () => {
  expect(vowels('AEIOU')).toEqual(5);
});

test('returns the number of vowels used', () => {
  expect(vowels('abcdefghijklmnopqrstuvwxyz')).toEqual(5);
});

test('returns the number of vowels used', () => {
  expect(vowels('bcdfghjkl')).toEqual(0);
});