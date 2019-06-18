import axios from 'axios';
export const GET_USER = 'GET_USER';
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';


const gotMe = (user) => ({
	type:GET_USER,
	user
})


const userLogin = (user) => {

    return {
        type: USER_LOGIN,
        payload: user
    };

}; // end of userLogin

export const getMe = () => dispatch => {
	// axios call to the database to retreive the user information
	return axios
	.get('http://localhost:5000/api/users')
	.then(user => dispatch(gotMe(user)))
	.catch(console.error.bind(console))
	}


export const userLoginThunk = (formData) => (dispatch) => {
	return axios
	.get('http://localhost:5000/api/users')


}; // end of userLoginThunk

//
export const userLogoutThunk = () => dispatch => {
	// axios call in this thunk?
}