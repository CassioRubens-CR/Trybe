// 2. Enviando uma action para um reducer
// Despache a LOGIN para a Store Redux chamando o dispatch
// e passe a ação criada por loginAction().
// * Chamar a função loginActiondeve retornar um objeto com a typepropriedade
// definida para a string LOGIN.
// * O armazenamento deve ser inicializado com um objeto
// com a propriedade login definida como false.
// * O store.dispatch()método deve ser usado para despachar uma ação do tipo LOGIN.

const store = Redux.createStore(
  (state = {login: false}) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};
// Dispatch the action here:
store.dispatch(loginAction());
