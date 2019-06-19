import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import NavBar from './NavBar';
import {connect} from 'react-redux';

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
                    <h2> Feed </h2>
                    <h4> USER ID is {this.props.user.id} </h4>
                </div>
            );
        else {
            return (

                <div>
                    <h1> Basketcase </h1>
                    <NavBar />

                    <h2> Feed </h2>
                    <h4> Please Login to See Your Feed </h4>
                    <h4>
                        If you don't have an account, you can create one by clicking
                        <Link to='/signUp'> here </Link>
                    </h4>
                </div>
            );
        }
    };
};

export default connect(mapStates, null)(Home);
