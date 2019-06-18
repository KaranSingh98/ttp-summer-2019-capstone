import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PlayerSearch from './PlayerSearch';

const mapStates = (state) => {
    return {
        user: state.loginReducer.user
    };
};

class NavBar extends Component {

    constructor(props){
        super(props);

    }; // end of contructor

    render() {

        return (
            <div>
                <a href='/'> Home </a>
                <a href='/Login'> Login </a>
                <a href='/SignUp'> Sign Up </a>
                <PlayerSearch />
            </div>
        );

    }; // end of render

}; // end of NavBar c

export default connect(mapStates, null)(NavBar);
