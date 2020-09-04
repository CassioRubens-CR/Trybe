// // Exercico 5
// Compare dois objetos (JSON) para verificar se são idênticos ou não

const { obj1, obj2, obj3 } = require('./exercises5');

test('objetos JSON', () => {
  expect(typeof obj1).toBe('object');
})

test('obj1 e obj2', () => {
  expect(obj1).toEqual(obj2);
})

test('obj1 e obj3', () => {
  expect(obj1).not.toEqual(obj3);
})

test('obj2 e obj3', () => {
  expect(obj2).not.toEqual(obj3);
})

// implemente seus testes aqui
// assert.deepStrictEqual(obj1, obj2);
// assert.notDeepStrictEqual(obj1, obj3);
// assert.notDeepStrictEqual(obj2, obj3);