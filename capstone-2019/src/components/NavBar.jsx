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
                <Link to='/'> Home </Link>
                <Link to='/Login'> Login </Link>
                <Link to='/SignUp'> Sign Up </Link>
                <PlayerSearch />
            </div>
        );
    }
};

export default connect(mapStates, null)(NavBar);
