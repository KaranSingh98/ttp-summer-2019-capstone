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
		this.props.addFavorite(237);
		console.log(this.props.favorites)

		return (
			<div>
			<h1>Favorites</h1>
			{this.props.favorites}
			</div> 
			)
	}

};




const mapStates = (state) => {
    return {
        favorites: state.favorites,
        user: state.loginReducer.user
    };
};

const mapDispatch = (dispatch) => ({
        addFavorite: (playerID) => dispatch(addFavoriteThunk(playerID)),
        deleteFavorite: (playerID) => dispatch(deleteFavoriteThunk(playerID)),
        fetchFavorites: (userID) => dispatch(fetchFavoritesThunk(userID))

     
});

export default connect(mapStates,mapDispatch)(Favorites);