import {USER_LOGIN} from '../action/LoginActions';

function loginReducer(state = {
    user: {
        email: '',
        password: ''
    },
    login: false
}, action) {

    switch(action.type) {
        case USER_LOGIN: {
            return action.payload;
        }
        default:
            return state;
    };

}; // end of  loginReducer

export default loginReducer;
