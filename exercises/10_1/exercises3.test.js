// // Exercico 3
// A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array
// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
// Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado

const myRemoveWithoutCopy = require('./exercises3');

test('exercicio3', () => {
  expect(typeof myRemoveWithoutCopy).toBe('function');
})

test('chamada myRemove retorna o array esperado', () => {
  expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toMatchObject([1, 2, 4]);
})

test('chamada myRemove retorna o array esperado não retorna o array', () => {
  expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toBe([1, 2, 3, 4]);
})

// test('array passado por parâmetro não sofreu alterações', () => {
//   const myArraay = [1, 2, 3, 4];
//   myRemoveWithoutCopy(myArraay, 1);
//   expect(myArraay).toBe([1, 2, 3, 4]);
// })

test('chamada myRemove retorna o array esperado', () => {
  expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
});

// assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4]);
// assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]);
// assert.strictEqual(myArraay.length, 3);
// assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4]);