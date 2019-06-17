import {createStore, applyMiddlware, combineReducers} from 'react';
import thunkMiddleware from 'react-thunk';
import loginReducer from './reducers/LoginReducer';
import signUpReducer from './reducer/SignUpReducer'

const reducers = combineReducers(loginReducer)
const store = createStore(loginReducer, applyMiddlware(thunkMiddleware));
export default store;
