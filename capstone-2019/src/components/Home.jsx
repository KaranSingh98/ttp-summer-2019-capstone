import React, {Component} from 'react';
import NavBar from './NavBar';
import {connect} from 'react-redux';

const mapStates = (state) => {
    return {
        login: state.loginReducer.login
    };
};

class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <h1> Basketcase </h1>
                <span> <NavBar /> </span>

                {this.props.login ? <h1> WELCOME </h1> : <h1> PLEASE LOGIN </h1>}
            </div>
        );
    };
};

export default connect(mapStates, null)(Home);
