import {createStore, applyMiddlware, combineReducers} from 'react';
import thunkMiddleware from 'react-thunk';
import loginReducer from './reducers/LoginReducer';

export default createStore(loginReducer, applyMiddlware(thunkMiddleware));
