import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import loginReducer from './reducers/LoginReducer';
import signUpReducer from './reducers/SignUpReducer';

const rootReducer = combineReducers({
    loginReducer,
    signUpReducer
});

const middleWare = thunkMiddleware

const store = createStore(rootReducer, applyMiddleware(middleWare));

export default store;
