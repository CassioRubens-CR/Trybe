// 1. Definindo um action creator
// * Defina uma função chamada actionCreator()que retorne o actionobjeto quando chamada.
// * A função actionCreatordeve existir.
// * A execução da actionCreatorfunção deve retornar o objeto de ação.
// * A ação retornada deve ter um tipo de propriedade chave com valor LOGIN.

const action = {
  type: 'LOGIN'
}
// Define an action creator here:
function actionCreator() {
  return action.type;
};