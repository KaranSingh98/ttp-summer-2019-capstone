import React, {Component} from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Home from './components/Home';
import PlayerSearch from './components/PlayerSearch';
import Login from './components/Login';
import SignUp from './components/SignUp';
import PlayerResults from './components/PlayerResults';
import SinglePlayer from './components/SinglePlayer';

class App extends Component {

    render() {

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

        return (

            <Router>
                <Route exact path='/' render={HomeComponent} />
                <Route exact path='/login' render={LoginComponent} />
                <Route exact path='/signUp' render={SignUpComponent} />
                <Route exact path='/player/' render={SinglePlayerComponent}/>
                <Route exact path='/player/:id' render={props => <SinglePlayer{...props} />} />
            </Router>
        );
    };
};

export default App;
