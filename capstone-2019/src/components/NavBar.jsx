import React, {Component} from 'react';

class NavBar extends Component {

    render() {

        return (
            <div>
                <a href='./Login'> Login </a>
                <a href='./SignUp'> Sign Up </a>
                <form className='SearchBar'>
                    <input type='text' name='player' placeholder='Search Player'/>
                </form>
            </div>
        );
    }
};

export default NavBar;
