import axios from 'axios';

export const USER_LOGIN = "USER_LOGIN";

const userLogin = (user) => {

    console.log('user is ', user);

    return {
        type: USER_LOGIN,
        payload: user
    };

}; // end of userLogin

export const userLoginThunk = (user) => (dispatch) => {

    return axios.get('http://localhost:5000/api/users/')
        .then(res => {

            const users = res.data;
            let found = false;

            console.log('users is', users);

            for(let i = 0; i < users.length; i++){
                if(users[i].email == user.email && users[i].password == user.password)
                    found = true;
            }

            if(found)
                dispatch(userLogin(user));
            else
                return;
        })
        .catch(err => console.log(err));

}; // end of userLoginThunk
