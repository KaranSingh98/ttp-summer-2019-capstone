import React, {Component} from 'react';
import NavBar from './NavBar';

class Home extends Component {

    render() {

        return (

            <div>
                <header>
                    <h1> Basketcase </h1>
                </header>
                <span> <NavBar /> </span>
            </div>
        );
    }
};

export default Home;
