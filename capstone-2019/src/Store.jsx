import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger'
import loginReducer from './reducers/LoginReducer';
import signUpReducer from './reducers/SignUpReducer';

const rootReducer = combineReducers({
    loginReducer,
    signUpReducer
});

const middleWare = thunkMiddleware

const store = createStore(rootReducer, applyMiddleware(middleWare, loggerMiddleware));

export default store;
