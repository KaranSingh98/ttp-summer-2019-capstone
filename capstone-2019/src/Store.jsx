import {createStore, applyMiddlware, combineReducers} from 'react';
import thunkMiddleware from 'react-thunk';

export default createStore(reducer, applyMiddlware(thunkMiddleware));
