import React, {Component} from 'react';
import NavBar from './NavBar';
import {Link} from 'react-router-dom';
import {createUserThunk} from '../actions/SignUpActions';
import {connect} from 'react-redux';

const mapStates = (state) => {
    return {
        user: state.user
    };
}; // end of mapStates

const mapDispatch = (dispatch) => {
    return {
        createUser: (newUser) => {
            dispatch(createUserThunk(newUser));
        }
    };
}

class SignUp extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }; // end of constructor


    handleChange = event => {

      this.setState({ [event.target.name]: event.target.value });

    }; // end of handleChange


    handleSubmit = () => {

        const newUser = {
            email: this.state.email,
            password: this.state.password
        };
      console.log(newUser);
      this.props.createUser(newUser);

    }; // end of handleSubmit


    render() {

        return (
            <div>

                <NavBar/>

                <h1> Please Sign Up Below </h1>

                <form>
                    <h2> Please Enter Your Email </h2> <br/>
                    <input type='text' name='email' placeholder='Email'
                        onChange={this.handleChange}/> <br/>
                    <h2> Please Enter a Password </h2> <br/>
                    <input type='text' name='password' placeholer='Password'
                        onChange={this.handleChange}/> <br/>
                </form> <br/>

                <Link to='/'>
                    <button type='submit' onClick={this.handleSubmit}> Create Account </button>
                </Link>
            </div>
        );
        
    }; // end of render

}; // end of SignUp class

export default connect(mapStates, mapDispatch)(SignUp);
