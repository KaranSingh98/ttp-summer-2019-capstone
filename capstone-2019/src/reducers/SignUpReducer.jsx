import {CREATE_USER} from '../actions/SignUpActions';

function signUpReducer(state = {
    user: {
        email: 'karansingh98123@gmail.com',
        password: 'password'
    }
}, action) {

    switch(action.type) {
        case CREATE_USER: {
            console.log(action.payload);
            return action.payload;
        }
        default:
            return state;
    };

}; // end of signUpReducer

export default signUpReducer;
