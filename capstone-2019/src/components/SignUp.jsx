import React, {Component} from 'react';

class SignUp extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }; // end of constructor


    handleChange = event => {

        this.setState({ [event.target.name]: event.target.value })

    }; // end of handleChange


    handleSubmit = () => {

        // thunk call repsonsible for handling axios post call for user database

    }; // end of handleSubmit


    render() {

        return (
            <div>
                <h1> Please Sign Up Below </h1>

                <form>
                    <h2> Please Enter Your Email </h2> <br/>
                    <input type='text' name='email' placeholder='Email'
                        onChange={this.handleChange}/> <br/>
                    <h2> Please Enter a Password </h2> <br/>
                    <input type='text' name='password' placeholer='Password'
                        onChange={this.handleChange}/> <br/>
                </form> <br/>

                <button type='submit' onClick={this.handleSubmit}> Create Account </button>
            </div>
        );
    }; // end of render

}; // end of SignUp class

export default SignUp;
