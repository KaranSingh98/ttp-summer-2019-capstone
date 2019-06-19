import {CREATE_USER} from '../actions/SignUpActions';

function signUpReducer(state = {
    user: {}
}, action) {

    switch(action.type) {
        
        case CREATE_USER: {
            return action.payload;
        }
        default:
            return state;
    };

}; // end of signUpReducer

export default signUpReducer;
