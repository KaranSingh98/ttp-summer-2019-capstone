import React, {Component} from 'react';
import NavBar from './NavBar';

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

        // stub

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

export default Login;
