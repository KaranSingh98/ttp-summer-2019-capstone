import {createStore, applyMiddlware, combineReducers} from 'react';
import thunkMiddleware from 'react-thunk';
import loginReducer from './reducers/LoginReducer';
import signUpReducer from './reducer/SignUpReducer'

const reducers = combineReducers(loginReducer)

export default createStore(loginReducer, applyMiddlware(thunkMiddleware));
