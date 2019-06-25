import axios from 'axios';
export const CREATE_USER = "CREATE_USER";


const createUser = (newUser) => {
  return {
    type: CREATE_USER,
    payload: newUser
  };

}; // end of createUser

export const createUserThunk = (newUser) => (dispatch) => {

	return axios
	//.post('http://localhost:5000/api/users', newUser)
  .post('/api/users', newUser)
		.then(res => res.data)
		.then(newUser => dispatch(createUser(newUser)))
        .catch(err => console.log(err));

}; // end of createUserThunk
