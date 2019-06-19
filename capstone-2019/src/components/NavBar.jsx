import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {userLogOut} from '../actions/LoginActions';
import PlayerSearch from './PlayerSearch';

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
    }

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
                    <Link to='/'> Home </Link>
                    <Link to='/' onClick={this.handleLogOut}>
                        Logout
                    </Link>
                    <PlayerSearch />
                </div>
            );
        }
        else {

            return (
                <div>
                    <Link to='/'> Home </Link>
                    <Link to='/Login'> Login </Link>
                    <Link to ='/SignUp'> Sign Up </Link>
                    <PlayerSearch />
                </div>
            );

        }

    }; // end of render

}; // end of NavBar

export default connect(mapStates, mapDispatch)(NavBar);
