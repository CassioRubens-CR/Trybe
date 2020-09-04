// // Exercico 4
// A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5, retorna "fizz" se for divisível apenas por 3, retorna "buzz" se divisível apenas por 5, retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número
// Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
// Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
// Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
// Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
// Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado

const myFizzBuzz = require('./exercises4');

test('exercicio3', () => {
    expect(typeof myFizzBuzz).toBe('function');
})

test('número divisível por 3 e 5', () => {
    expect(myFizzBuzz(15)).toMatch('fizzbuzz');
})

test('número divisível por 3', () => {
    expect(myFizzBuzz(9)).toMatch('fizz');
})

test('número divisível por 5', () => {
    expect(myFizzBuzz(25)).toMatch('buzz');
})

test('número que não é divisível por 3 ou 5', () => {
    expect(myFizzBuzz(17)).toBe(17);
})

test('um parâmetro que não é um número', () => {
    expect(myFizzBuzz('this_is_not_a_number')).toBe(false);
})

// implemente seus testes aqui
// assert.strictEqual(myFizzBuzz(15), 'fizzbuzz');
// assert.strictEqual(myFizzBuzz(9), 'fizz');
// assert.strictEqual(myFizzBuzz(25), 'buzz');
// assert.strictEqual(myFizzBuzz(17), 17);
// assert.strictEqual(myFizzBuzz('this_is_not_a_number'), false);