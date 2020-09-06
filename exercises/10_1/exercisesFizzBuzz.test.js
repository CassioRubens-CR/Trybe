// --- Instruções
// Escreva um programa que o console registre os números
// de 1 a n. Mas para múltiplos de três imprimir
// “fizz” em vez do número e para os múltiplos
// de cinco imprime “buzz”. Para números que são múltiplos
// de três e cinco imprimem “fizzbuzz”.
// --- Exemplo
// fizzBuzz (5);
// 1
// 2
// fizz
// 4
// buzz

const fizzBuzz = require('./exercisesFizzBuzz');

test('fizzBuzz function is defined', () => {
  expect(fizzBuzz).toBeDefined();
});

test('multiple three', () => {
  expect(fizzBuzz(9)).toMatch('fizz');
})

test('multiple five', () => {
  expect(fizzBuzz(5)).toMatch('buzz');
})

test('multiple three and five', () => {
  expect(fizzBuzz(15)).toMatch('fizzbuzz');
})

test('number not multiples five and three', () => {
  expect(fizzBuzz(1)).toBe(1);
})

test('number not multiples five and three', () => {
  expect(fizzBuzz(22)).toBe(22);
})

test('number not multiples five and three', () => {
  expect(fizzBuzz(34)).toBe(34);
})
