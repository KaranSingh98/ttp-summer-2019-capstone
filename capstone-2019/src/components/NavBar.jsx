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
                        <a href='/'> Home </a>
                        <a href='/' onClick={this.handleLogOut}>
                            Logout
                        </a>
                        <PlayerSearch />
                    </nav>
                </div>
            );
        }
        else {
            return (
                <div>
                    <nav>
                        <a href='/'> Home </a>
                        <a href='/Login'> Login </a>
                        <a href='/SignUp'> Sign Up </a>
                        <PlayerSearch />
                    </nav>
                </div>
            );

        }

    }; // end of render

}; // end of NavBar

export default connect(mapStates, mapDispatch)(NavBar);
