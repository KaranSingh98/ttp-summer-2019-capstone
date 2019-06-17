import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PlayerSearch from './PlayerSearch';

class NavBar extends Component {

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

export default NavBar;
