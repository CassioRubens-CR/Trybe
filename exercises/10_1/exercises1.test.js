// Exercico 1
// A função sum(a, b) retorna a soma do parâmetro a com o b
// Teste se o retorno de sum(4, 5) é 9
// Teste se o retorno de sum(0, 0) é 0
// Teste se a função sum lança um erro quando os parametros são 4 e "5"(string 5)
// Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")
const sum = require('./exercises1');

test('exercicio1', () => {
  expect(typeof sum).toBe('function');
})

test('retorno de sum(4, 5)', () => {
  expect(sum(4, 5)).toBe(9);
})

test('retorno de sum(4, 5)', () => {
  expect(sum(0, 0)).toBe(0);
})

test('retorno de sum(4, 5)', () => {
  expect(() => {
    sum(4, "5");
  }).toThrow('parameters must be numbers');
})

// implemente seus testes aqui
// assert.strictEqual(sum(4, 5), 9);
// assert.strictEqual(sum(0, 0), 0);
// assert.strictEqual(sum(4, "5"), 9); // apresenta erro "parameters must be numbers"