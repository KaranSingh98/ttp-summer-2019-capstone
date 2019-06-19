import axios from 'axios';

export const GET_USER = "GET_USER";


const gotMe = (user) => ({

    type: GET_USER,
        user

}); // end of gotMe


export const getMe = () => (dispatch) => {
  return axios.get('http://localhost:5000/api/auth/me')
    .then(res => res.data)
    .then(user => dispatch(gotMe(user)))
    .catch(err => console.log(err));

}; // end of getMe


export const userLogin = (formData) => (dispatch) => {

    return axios.put('http://localhost:5000/api/auth/login', formData)
        .then(res => res.data)
        .then(user => dispatch(gotMe(user)))
        .catch(err => console.log(err));

}; // end of userLoginThunk


export const userLogOut = () => (dispatch) => {

    return axios.delete('http://localhost:5000/api/auth/logout')
        .then(() => dispatch(gotMe({})))
        .catch(err => console.log(err));

}; // end of userLogOut
