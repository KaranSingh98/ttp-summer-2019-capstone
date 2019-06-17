import axios from 'axios';
export const CREATE_USER = "CREATE_USER";


const createUser = (newUser) => {
    return {
        type: CREATE_USER,
        payload: newUser
    };

}; // end of createUser

export const createUserThunk = (newUser) => (dispatch) => {

	return function(dispatch) {
		return axios
			.post("localhost:5000/api/users", newUser)
			.then(res => res.data)
			.then(newUser => dispatch(createUser(newUser)))
	}
    return dispatch(createUser(newUser));

}; // end of createUserThunk
