import reducers from '../reducer/combineReducer'
import { createStore } from 'redux';

const store = createStore(reducers);
export default store;