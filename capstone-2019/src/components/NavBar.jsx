import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PlayerSearch from './PlayerSearch';

const mapStates = (state) => {
    return {
        login: state.loginReducer.login
    };
};

class NavBar extends Component {

    constructor(props){
        super(props);
    }

    render() {

        return (
            <div>
                <a href='/'> Home </a>
                <a href='/Login'> Login </a>
                <a href='/SignUp'> Sign Up </a>
                <PlayerSearch />
            </div>
        );
    }
};

export default connect(mapStates, null)(NavBar);
