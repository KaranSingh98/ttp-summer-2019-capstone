import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {userLogOut} from '../actions/LoginActions';
import PlayerSearch from './PlayerSearch';
import './NavBar.css';

const mapStates = (state) => {
    return {
        user: state.loginReducer.user
    };

}; // end of mapStates


const mapDispatch = (dispatch) => {
    return {
        logOut: () => {
            dispatch(userLogOut())
        }
    };

}; // end of mapDispatch

class NavBar extends Component {

    constructor(props){
        super(props);

    }; // end of contructor

    handleLogOut = () => {

        this.props.logOut();

    }; // end of handleLogOut

    render() {

        if(this.props.user.id) {
            return (
                <div>
                    <nav>
                        <Link to='/'> <p>Home</p> </Link>
                        <Link to='/' onClick={this.handleLogOut}>
                            <p>Logout</p>
                        </Link>
                        <PlayerSearch />
                    </nav>
                </div>
            );
        }
        else {
            return (
                <div>
                    <nav>
                        <Link to='/'> Home </Link>
                        <Link to='/Login'> Login </Link>
                        <Link to ='/SignUp'> Sign Up </Link>
                        <PlayerSearch />
                    </nav>
                </div>
            );

        }

    }; // end of render

}; // end of NavBar

export default connect(mapStates, mapDispatch)(NavBar);
