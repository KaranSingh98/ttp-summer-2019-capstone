import {USER_LOGIN} from '../actions/LoginActions';

function loginReducer(state = {
    user: {
        email: '',
        password: ''
    },
    login: null
}, action) {

    switch(action.type) {

        case USER_LOGIN: {
            return {
                ...state,
                user: action.payload.email,
                password: action.payload.password,
                login: true
            };
        }
        default:
            return state;
    };

}; // end of  loginReducer

export default loginReducer;
