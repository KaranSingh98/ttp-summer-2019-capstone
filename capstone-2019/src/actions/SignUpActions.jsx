export const CREATE_USER = "CREATE_USER";

const createUser = (newUser) => {
    return {
        type: CREATE_USER,
        payload: newUser
    };

}; // end of createUser

const createUserThunk = (newUser) =>(dispatch) => {

    // axios post call to user database

}; // end of createUserThunk
