export const CREATE_USER = "CREATE_USER";

const createUser = (newUser) => {
    return {
        type: CREATE_USER,
        payload: newUser
    };

}; // end of createUser

export const createUserThunk = (newUser) => (dispatch) => {

    return dispatch(createUser(newUser));

}; // end of createUserThunk
