import { createStore, combineReducers } from 'redux';
import reducer from '../reduxcers'

const rootReducer = combineReducers({reducer}) 
const store = createStore(rootReducer);

export default store;