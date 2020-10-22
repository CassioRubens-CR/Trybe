// 3. Criando um Reducer para receber e manipular uma action
// Preencha o corpo da reducerfunção para que, se receber uma ação do tipo,
// 'LOGIN'ela retorne um objeto de estado com logindefinido como true. 
// Caso contrário, ele retorna o atual state. 
// Observe que o atual statee o despachado actionsão passados ​​para o redutor,
// para que você possa acessar o tipo da ação diretamente com action.type.
// * Chamar a função loginActiondeve retornar um objeto
// com a propriedade type definida para a string LOGIN.
// * O armazenamento deve ser inicializado com um objeto
// com a propriedade logindefinida como false.
// * O despacho loginActiondeve atualizar a login 
// propriedade no estado da loja para true.
// * Se a ação não for do tipo LOGIN,
// o armazenamento deve retornar ao estado atual.

const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  // Change code below this line
  if (action.type === "LOGIN") {
    return {
    login: true
    };
  } else {
    return state;
  }
  // Change code above this line
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};
