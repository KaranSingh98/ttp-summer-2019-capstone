import React from 'react';
import {Router, Routes} from 'react-router-dom';
import Home from './components/Home';
import PlayerSearch from './components/PlayerSearch';
import Login from './components/Login';
import SignUp from './components/SignUp';

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

    return (

        <Router>
            <Route exact path='/' render={HomeComponent} />
            <Route exact path='/login' render={LoginComponent} />
            <Route exact path='/signUp' render={SignUpComponent} />
            <Route exact path='/playerResults' render={PlayerSearchComponent} />
            <Route exact path='/playerResults/:id' render={props => <SinglePlayer{...props} />} />
        </Router>
    );
}

export default App;
