import React, {Component} from 'react';
import NavBar from './NavBar';
import {Link} from 'react-router-dom';
// will need to import thunk once created
import {connect} from 'react-redux';


class Favorites extends Component {
	constructor(props) {
		super(props);

		this.state = {
			// array of playerIds that a user 
			// has favorited 
			favorites: []
		}
	}

	render() {
		return ()
	}

};




const mapStates = (state) => {
    return {
        favorites: state.favorites
    };
}; // end of mapStates

const mapDispatch = (dispatch) => {
    return {
        createUser: (newUser) => {
            dispatch(createUserThunk(newUser));
        }
     
    };
}

export default connect(mapStates,mapDispatch)(Favorites);