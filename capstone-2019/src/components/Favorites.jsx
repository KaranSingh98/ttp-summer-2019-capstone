import React, {Component} from 'react';
import NavBar from './NavBar';
import {Link} from 'react-router-dom';
import {addFavoriteThunk, deleteFavoriteThunk, fetchFavoritesThunk} from '../actions/FavoritesActions';
import {connect} from 'react-redux';


class Favorites extends Component {
	constructor(props) {
		super(props);

		this.state = {
			// array of playerIds that a user 
			// has favorited fetched from db on a session
			favorites: []
		}
	}

	render() {
		return (
			<div>
			<h1>test</h1>
			</div> 
			)
	}

};




const mapStates = (state) => {
    return {
        favorites: state.favorites
    };
};

const mapDispatch = (dispatch) => ({
        addFavorite: (playerID) => dispatch(addFavorite(playerID)),
        deleteFavorite: (playerID) => dispatch(deleteFavorite(playerID)),
        fetchFavorites: () => dispatch(fetchFavorites())

     
});

export default connect(mapStates,mapDispatch)(Favorites);