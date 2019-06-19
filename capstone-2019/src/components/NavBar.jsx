import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PlayerSearch from './PlayerSearch';

const mapStates = (state) => {
    return {
        loggedIn: state.loginReducer.login
    };
};

class NavBar extends Component {

    constructor(props){
        super(props);
    }

    render() {

        return (
            <div>
                <ul>
                    <li> <Link to='/'> Home </Link> </li>
                    <li> <Link to='/Login'> Login </Link> </li>
                    <li> <Link to='/SignUp'> Sign Up </Link> </li>
                    <li> <PlayerSearch /> </li>
                </ul>
            </div>
        );
    }
};

export default connect(mapStates, null)(NavBar);
