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

	componentDidMount() {
	//	console.log("mountain")
		this.props.addFavorite(238);
		this.props.addFavorite(230);
	}

	render() {
		// this.props.addFavorite(238);
		console.log(this.props.favorites);

		return (
			<div>
			<h1>Favorites</h1>
			{/* this.props.favorites ? "hello" : "bye" */}
			{/*this.props.favorites[0]*/}
			</div>
		)
	}

};




const mapStates = (state) => {
	//console.log("my redux store", state)
    return {
        favorites: state.favoriteReducer,
        user: state.loginReducer.user
    };
};

const mapDispatch = (dispatch) => ({
        addFavorite: (playerID) => dispatch(addFavoriteThunk(playerID)),
        deleteFavorite: (playerID) => dispatch(deleteFavoriteThunk(playerID)),
        fetchFavorites: (userID) => dispatch(fetchFavoritesThunk(userID))

     
});

export default connect(mapStates,mapDispatch)(Favorites);