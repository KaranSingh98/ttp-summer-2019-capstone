import React, {Component} from 'react';
import {Route, BrowserRouter as Router, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {getMe} from './actions/LoginActions';
import store from './Store';
import Home from './components/Home';
import PlayerSearch from './components/PlayerSearch';
import Login from './components/Login';
import SignUp from './components/SignUp';
import PlayerResults from './components/PlayerResults';
import SinglePlayer from './components/SinglePlayer';
import Favorites from './components/Favorites';

class App extends Component {

    constructor(props){
        super(props);
    };

    componentDidMount () {
        //console.log(this.props);
        this.props.intializeData()
    };

    render() {

        //console.log(this.props);

        const HomeComponent = () => {
            return <Home/>
        };

        const PlayerResultsComponent = () => {
            return <PlayerSearch/>
        };

        const LoginComponent = () => {
            return <Login/>
        };

        const SignUpComponent = () => {
            return <SignUp/>
        };

        const PlayerSearchComponent = () => {
            return <PlayerSearch/>
        };

        const SinglePlayerComponent = () => {
            return <SinglePlayer/>
        }

        const FavoritesComponent = () => {
            return <Favorites/>
        }


        return (

            <Router>
                <Route exact path='/' component={Home} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/signUp' component={SignUp} />
                <Route exact path='/playerResults' component={PlayerSearch} />
                <Route exact path='/playerResults/:id' render={props => <SinglePlayer{...props} />} />
            </Router>
        );
    };
};

const mapDispatch = (dispatch) => {

    return {
        intializeData: () => {
            dispatch(getMe())
        }
    }
};

export default connect(null, mapDispatch)(App);
