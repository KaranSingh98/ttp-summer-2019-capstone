import React, {Component} from 'react';
import NavBar from './NavBar';


const mapStates = (state) => {

}; // end of mapStates


const mapDispatch = (dispatch) => {

    return {
        userLogin: (user) => {
            dispatch(userLoginThunk(user));
        }
    };

}; // end of mapDispatch



class Login extends Component {

    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        };

    }; // end of constructor


    handleChange = event => {

        this.setState({[event.target.name]: event.target.value })

    }; // end of handleChange


    handleSubmit = () => {

        const user = {
            email: this.state.email,
            password: this.state.password
        };

        userLogin(user);

    }; // end of handleSubmit

    render() {
        return (
            <div>
                <NavBar/>

                <h1> Please Login Below </h1>

                <form name='Login'>
                    <input type='text' name='email' placeholder='Email'
                        onChange={this.handleChange}/> <br/>

                    <input type='text' name='password' placeholer='Password'
                        onChange={this.handleChange}/> <br/>
                </form>

                <button type="submit" onClick={this.handleSubmit}> Submit </button>
            </div>
        );

    }; // end of render

}; // end of Login class

export default connect(mapStates, mapDispatch)(Login);
