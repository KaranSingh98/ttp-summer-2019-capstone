import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import NavBar from './NavBar';
import Feed from './Feed';
import {connect} from 'react-redux';
import './Home.css'

const mapStates = (state) => {
    return {
        user: state.loginReducer.user
    };
};

class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        if(this.props.user.id)
            return (
                <div>
                    <h1> Basketcase </h1>
                    <NavBar />
                    <Feed />
                </div>
            );
        else {
            return (

                <div>
                    <h1> Basketcase </h1>
                    <NavBar />
                    <Feed />
                </div>
            );
        }
    };
};

export default connect(mapStates, null)(Home);
