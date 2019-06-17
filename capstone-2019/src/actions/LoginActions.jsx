export const USER_LOGIN = "USER_LOGIN";

const userLogin = (user) => {

    return {
        type: USER_LOGIN,
        payload: user
    };

}; // end of userLogin

export const userLoginThunk = (user) => (dispatch) => {

    return dispatch(userLogin(user));
    
}; // end of userLoginThunk
