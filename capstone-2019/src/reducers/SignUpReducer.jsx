import {CREATE_USER} from '../actions/SignUpActions';

function signUpReducer(state = {
    user: {
        email: '',
        password: ''
    }
}, action) {

    switch(action.type) {
        case CREATE_USER: {
            return action.payload;
        }
    };

}; // end of signUpReducer

export default signUpReducer;
