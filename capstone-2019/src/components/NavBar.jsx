import React, {Component} from 'react';
import PlayerSearch from './PlayerSearch';

class NavBar extends Component {

    render() {

        return (
            <div>
                <a href='./Login'> Login </a>
                <a href='./SignUp'> Sign Up </a>
                <PlayerSearch />
            </div>
        );
    }
};

export default NavBar;
