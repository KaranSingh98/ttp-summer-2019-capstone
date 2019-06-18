import {GET_USER} from '../actions/LoginActions';

function loginReducer(state = {
    user: {}
}, action) {

    switch(action.type) {

        case GET_USER: {
            return {
                ...state,
                user: action.user
            };
        }
        default:
            return state;
    };

}; // end of  loginReducer

export default loginReducer;
