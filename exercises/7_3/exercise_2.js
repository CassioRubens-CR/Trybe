// Exercico 2
// A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
// Verifique se o array passado por parâmetro não sofreu alterações
// Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado

const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
// implemente seus testes aqui
assert.strictEqual(typeof myRemove, 'function');
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);
// assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]); //Apresernta erro por não excluir o 3

const parameter = [5, 6, 7, 8];
myRemove(parameter, 5);
assert.deepStrictEqual(parameter, [5, 6, 7, 8]);

assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);

//assert.strictEqual(myRemove[1, 2, 3, 4], 3);